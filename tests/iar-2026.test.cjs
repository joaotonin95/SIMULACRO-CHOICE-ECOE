// Smoke tests for the complete CHOICES/IAR bank. Run: node tests/iar-2026.test.cjs
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const match = html.match(/<script[^>]*id=["']data["'][^>]*>([\s\S]*?)<\/script>/i);
assert.ok(match, 'Embedded exam JSON missing');

const appElement = {
  innerHTML: '',
  querySelectorAll: () => [],
  querySelector: () => null
};
const context = vm.createContext({
  document: {
    getElementById(id) {
      return id === 'data' ? {textContent: match[1]} : appElement;
    },
    addEventListener() {},
    activeElement: null
  },
  window: {addEventListener() {}, scrollTo() {}},
  localStorage: {getItem() { return null; }, setItem() {}},
  setInterval() { return 0; },
  console
});

const scriptPaths = Array.from(
  html.matchAll(/<script\s+src=["']([^"']+)["'][^>]*><\/script>/gi),
  match => match[1]
);
assert.ok(scriptPaths.includes('app.js'), 'app.js missing from index.html');
for (const scriptPath of scriptPaths) {
  const source = fs.readFileSync(path.join(root, scriptPath), 'utf8');
  new vm.Script(source, {filename: scriptPath}).runInContext(context, {timeout: 15000});
}

const summary = vm.runInContext(`(() => {
  const failures = [];
  let questions = 0;
  for (const exam of EX) {
    const keys = KEY[exam.id] || {};
    const seen = new Set();
    for (const question of exam.qs) {
      questions++;
      if (seen.has(question.n)) failures.push(exam.id + ': duplicate number ' + question.n);
      seen.add(question.n);
      const key = keys[question.n];
      if (!key) {
        failures.push(exam.id + ':' + question.n + ' missing key');
        continue;
      }
      if (!Array.isArray(question.o) || question.o.length < 2 || question.o.length > 5) {
        failures.push(exam.id + ':' + question.n + ' invalid options');
        continue;
      }
      const answerIndex = 'ABCDE'.indexOf(key.a);
      if (answerIndex < 0 || answerIndex >= question.o.length) {
        failures.push(exam.id + ':' + question.n + ' key outside options');
      }
      if (!key.why || !key.src) failures.push(exam.id + ':' + question.n + ' missing rationale/source');
      if (needsReview(key)) failures.push(exam.id + ':' + question.n + ' remains unscored');
    }
  }
  return {
    questions,
    exams: EX.length,
    specialties: EX.filter(exam => exam.year === 'Por especialidad').length,
    failures
  };
})()`, context);

assert.equal(summary.questions, 1532, 'Question count changed unexpectedly');
assert.equal(summary.specialties, 22, 'The 22 specialties must remain unified');
assert.deepEqual(Array.from(summary.failures), [], summary.failures.join('\n'));

const exam = vm.runInContext('EX.find(e => e.id === "iar-2026-completo")', context);
const key = vm.runInContext('KEY["iar-2026-completo"]', context);
assert.ok(exam, 'Integrated IAR 2026 exam missing');
assert.equal(exam.qs.length, 88);
assert.deepEqual(Array.from(exam.qs, q => q.n), Array.from({length: 88}, (_, i) => i + 1));

for (const question of exam.qs) {
  const correction = key[question.n];
  assert.ok(correction.src_url && /^https:\/\//.test(correction.src_url),
    'IAR 2026 item without source URL: ' + question.n);
}

assert.equal(vm.runInContext('needsReview(KEY["iar-2026-completo"][3])', context), false);
assert.equal(vm.runInContext('needsReview(KEY["iar-2026-completo"][6])', context), false);
assert.equal(vm.runInContext('needsReview(KEY["iar-2026-completo"][80])', context), false);

// Saved legacy flags must never override the current answer key.
vm.runInContext('S.ex=EX.find(e=>e.id==="iar-2026-completo"); S.year=S.ex.year; S.i=0; S.st={1:{a:"A",c:1,ok:true}}; quiz()', context);
assert.ok(appElement.innerHTML.includes('0 correctas'));
assert.ok(appElement.innerHTML.includes('Revisar errores (1)'));
vm.runInContext('S.st={1:{a:"B",c:1,ok:false}}; quiz()', context);
assert.ok(appElement.innerHTML.includes('1 correctas'));
assert.ok(appElement.innerHTML.includes('Revisar errores (0)'));
vm.runInContext('S.st={80:{a:"B",c:1,ok:true}}; S.i=79; quiz()', context);
assert.ok(appElement.innerHTML.includes('assets/ecg-iar-2026-80.png'));
vm.runInContext('S.st={3:{a:"C",c:1,ok:true}}; S.i=2; quiz()', context);
assert.ok(appElement.innerHTML.includes('assets/ecg-iar-2026-03.webp'));

console.log('PASS: 1532 questions; 22 specialties; one scorable key per item; IAR 2026 source URLs; UI scoring.');

// Check the active April questions after app.js has applied its later overrides.
const april = vm.runInContext('EX.find(e => e.id === "abril-2022")', context);
const aprilKeys = vm.runInContext('KEY["abril-2022"]', context);
const verifiedAnswers = {
  61:'A', 62:'B', 63:'D', 64:'D', 65:'A', 66:'B', 68:'A', 69:'D',
  70:'D', 71:'D', 72:'C', 73:'C', 74:'D', 75:'A', 76:'D', 77:'B',
  78:'D', 79:'A', 80:'B', 81:'B'
};
for (const [n, answer] of Object.entries(verifiedAnswers)) {
  const item = april.qs.find(q => q.n === Number(n));
  const key = aprilKeys[n];
  assert.equal(key.originalId, 'abril-2022:' + n);
  assert.equal(key.a, answer, key.originalId);
  assert.match(key.src_url, /^https:\/\//);
  assert.equal(key.verifiedOn, '2026-11-27');
  for (const [i] of item.o.entries()) {
    const letter = 'ABCDE'[i];
    assert.ok(letter === answer ? key.why : key.o[letter], key.originalId + ' ' + letter);
  }
}
assert.equal(aprilKeys[67].verifiedOn, '2026-11-26');
assert.match(april.qs.find(q => q.n === 63).o[3], /500 mg IM.*100 mg VO.*7 días/);

const answerBlock = [
  ...Array.from('DBDDDBADADABCCBCBCB', (answer, i) =>
    ['abril-2022', 82 + i, answer]),
  ['diciembre-2022', 1, 'B'],
  ...Array.from('CDAACBABBCBABBCCDDBA', (answer, i) => ['diciembre-2022', 2 + i, answer]),
  ...Array.from('CCABCDAABADBCABADCCD', (answer, i) => ['diciembre-2022', 22 + i, answer]),
  ...Array.from('BBCBDBDBAABDBBDBBABA', (answer, i) => ['diciembre-2022', 42 + i, answer])
];
assert.equal(answerBlock.length, 80);
for (const [examId, n, answer] of answerBlock) {
  const selected = vm.runInContext('EX.find(e => e.id === "' + examId + '")', context);
  const index = selected.qs.findIndex(item => item.n === n);
  const item = selected.qs[index];
  const correction = vm.runInContext('KEY["' + examId + '"][' + n + ']', context);
  assert.equal(correction.originalId, examId + ':' + n);
  assert.equal(correction.verifiedOn, '2026-11-27');
  assert.equal(correction.a, answer, correction.originalId);
  assert.match(correction.src_url, /^https:\/\//);
  assert.equal(Object.keys(correction.o).length, item.o.length - 1);
  for (const [i] of item.o.entries()) {
    const letter = 'ABCDE'[i];
    assert.ok(letter === answer ? correction.why : correction.o[letter]);
    vm.runInContext('S.ex=EX.find(e=>e.id==="' + examId + '");S.year=S.ex.year;S.i=' + index +
      ';S.st={' + n + ':{a:"' + letter + '",c:1}};quiz()', context);
    assert.ok(appElement.innerHTML.includes(letter === answer ? '>Correcto.' : '>Incorrecto.'), correction.originalId);
    assert.equal((appElement.innerHTML.match(/class="opt(?: sel)? ok"/g) || []).length, 1);
  }
}
