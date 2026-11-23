// Smoke tests for IAR 2026. Run: node tests/iar-2026.test.cjs
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const match = html.match(/<script[^>]*id=["']data["'][^>]*>([\s\S]*?)<\/script>/i);
assert.ok(match, 'Embedded exam JSON missing');
const initialExams = JSON.parse(match[1]);
const appElement = {innerHTML:'',querySelectorAll:()=>[],querySelector:()=>null};
const context = vm.createContext({
  document:{getElementById(id){return id==='data'?{textContent:match[1]}:appElement;},addEventListener(){},activeElement:null},
  window:{addEventListener(){},scrollTo(){}},
  localStorage:{getItem(){return null;},setItem(){}},
  setInterval(){return 0;},console
});
const scripts = ['core.js','explicaciones.js','novas_pdf.js','novas_pdf_lote2.js','novas_pdf_lote3.js','novas_pdf_lote4.js','novas_pdf_validadas.js','validacion_pdf_2026.js','iar_2026_nuevas.js','app.js'];
for(const script of scripts) {
 const source = fs.readFileSync(path.join(root,script),'utf8');
 new vm.Script(source,{filename:script}).runInContext(context,{timeout:10000});
}
const exam = vm.runInContext('EX.find(e=>e.id==="iar-2026-completo")',context);
const key = vm.runInContext('KEY["iar-2026-completo"]',context);
assert.ok(exam,'Integrated exam missing');
assert.equal(exam.qs.length,88);
assert.deepEqual(Array.from(exam.qs,q=>q.n),Array.from({length:88},(_,i)=>i+1));
const pending=[];
for(const q of exam.qs){
 assert.ok(key[q.n], 'Missing key entry: '+q.n);
 assert.ok(Array.isArray(q.o), 'Missing options: '+q.n);
 assert.ok(q.o.length===4||q.n===6,'Unexpected option count: '+q.n);
 const k=key[q.n];
 if(k.a)assert.ok('ABCD'.includes(k.a),'Invalid key: '+q.n);
 if(k.a)assert.ok(q.o.length>'ABCD'.indexOf(k.a),'Key outside options: '+q.n);
 if(!k.a||k.status!=='validado'||k.calificable===false)pending.push(q.n);
}
for(const q of exam.qs){const k=key[q.n];if(k.status==='validado'&&k.a&&k.calificable!==false){assert.ok(k.why&&k.src&&k.src_url,'Qualified item without explanation/reference: '+q.n);assert.ok(/^https:\/\//.test(k.src_url),'Invalid source URL: '+q.n);assert.equal(Object.keys(k.o||{}).length,3,'Expected 3 distractor explanations for '+q.n);assert.ok(!Object.values(k.o).some(v=>/No corresponde al mecanismo|No es la mejor respuesta en el escenario descrito/.test(v)),'Generic explanation in '+q.n);}}
assert.equal(pending.length,18,'Review exclusions changed: audit before changing expected count');
assert.ok(pending.includes(6)&&pending.includes(3)&&!pending.includes(80));
assert.ok(html.includes('src="app.js"'));
assert.ok(initialExams.length>0);
const shown=vm.runInContext('typeof home==="function"',context);
assert.equal(shown,true);
vm.runInContext('S.year="IAR 2026 · prueba 88 preguntas";home()',context);
assert.ok(appElement.innerHTML.includes('Últimas IAR 2026'));
assert.ok(appElement.innerHTML.includes('18 sin puntuación definitiva'));

assert.equal(vm.runInContext('needsReview(KEY["iar-2026-completo"][80])',context),false,'ECG 80 with source image should be scored');
assert.equal(vm.runInContext('needsReview(KEY["iar-2026-completo"][6])',context),true,'Incomplete question must not score');
assert.equal(vm.runInContext('needsReview(KEY["iar-2026-completo"][49])',context),false,'Verified Swan-Ganz item should score');
// Reproduce an outdated saved answer and ensure scoring uses the CURRENT key rather than stored ok.
vm.runInContext('S.ex=EX.find(e=>e.id==="iar-2026-completo"); S.year=S.ex.year; S.i=0; S.st={1:{a:"A",c:1,ok:true}}; quiz()',context);
assert.ok(appElement.innerHTML.includes('0 correctas'),'Stored ok=true must not override current wrong answer');
assert.ok(appElement.innerHTML.includes('Revisar errores (1)'),'Wrong-answer review must use current key');
vm.runInContext('S.st={1:{a:"B",c:1,ok:false}}; quiz()',context);
assert.ok(appElement.innerHTML.includes('1 correctas'),'Stored ok=false must not override current correct answer');
assert.ok(appElement.innerHTML.includes('Revisar errores (0)'),'Correct answers must not be shown as errors');
vm.runInContext('S.st={80:{a:"B",c:1,ok:true}}; S.i=79; quiz()',context);
assert.ok(appElement.innerHTML.includes('1 correctas'),'Scorable flutter ECG must be counted');
assert.ok(appElement.innerHTML.includes('assets/ecg-iar-2026-80.png'),'ECG image must display in question 80');
vm.runInContext('S.st={3:{a:"C",c:1,ok:true}}; S.i=2; quiz()',context);
assert.ok(!appElement.innerHTML.includes('1 correctas'),'Ambiguous ECG 3 must remain unscored');
assert.ok(appElement.innerHTML.includes('assets/ecg-iar-2026-03.webp'),'ECG image must display in question 3');

console.log('PASS: full script initialization; 88 questions; 18 non-scored; home UI; key integrity.');
