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
assert.equal(pending.length,22,'Review exclusions changed: audit before changing expected count');
assert.ok(pending.includes(6)&&pending.includes(80));
assert.ok(html.includes('src="app.js"'));
assert.ok(initialExams.length>0);
const shown=vm.runInContext('typeof home==="function"',context);
assert.equal(shown,true);
vm.runInContext('S.year="IAR 2026 · prueba 88 preguntas";home()',context);
assert.ok(appElement.innerHTML.includes('Últimas IAR 2026'));
assert.ok(appElement.innerHTML.includes('22 sin puntuación definitiva'));
console.log('PASS: full script initialization; 88 questions; 22 non-scored; home UI; key integrity.');
