const L='ABCDE';
let S={year:null,ex:null,i:0,st:{},review:false,timer:null};
const app=document.getElementById('app');
function load(id){try{return JSON.parse(localStorage.getItem('sim:'+id))||{}}catch(e){return {}}}
function save(){try{localStorage.setItem('sim:'+S.ex.id,JSON.stringify(S.st))}catch(e){}}
function timerKey(id){return 'sim:timer:'+id}
function timerLoad(id){let t;try{t=JSON.parse(localStorage.getItem(timerKey(id)))}catch(e){};return {elapsed:Math.max(0,Number(t?.elapsed)||0),running:false,started:Date.now()}}
function timerSave(){if(S.ex&&S.timer)try{localStorage.setItem(timerKey(S.ex.id),JSON.stringify(S.timer))}catch(e){}}
function timerMs(){if(!S.timer)return 0;return S.timer.elapsed+(S.timer.running?Math.max(0,Date.now()-S.timer.started):0)}
function timerFmt(ms){const sec=Math.floor(ms/1000),h=Math.floor(sec/3600),m=Math.floor(sec%3600/60),s=sec%60;return [h,m,s].map(x=>String(x).padStart(2,'0')).join(':')}
function timerPause(){if(S.timer?.running){S.timer.elapsed=timerMs();S.timer.running=false;timerSave()}}
function timerResume(){if(S.timer&&!S.timer.running){S.timer.started=Date.now();S.timer.running=true;timerSave()}}
function timerRefresh(){const clock=document.getElementById('clock'),btn=document.getElementById('timer-toggle');if(clock)clock.textContent=timerFmt(timerMs());if(btn)btn.textContent=S.timer?.running?'Pausar':'Retomar'}
setInterval(timerRefresh,500);

const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function isProvisional(k){return !!(k&&(k.status==='provisional'||/Revisar con bibliografía actualizada|todavía no se ha validado individualmente/i.test(k.why||'')))}
function needsReview(k){return !!(k&&((k.status==='discutible'||k.status==='provisional'||k.status==='provisional')||/\brevisar\b|\bpregunta con error\b|\bninguna (?:opci[oó]n|fecha)\b|\bno pude acceder\b|\bcontradic\b|\banulable\b|\bpuede estar desactualizada\b|QUESTÃO (?:AMBÍGUA|SEM|INCOMPLETA|DESATUALIZADA)|PREGUNTA (?:AMBIGUA|AMBÍGUA|CON ERROR)/i.test(k.why||'')||/\brevisar\b/i.test(JSON.stringify(k.o||{}))))}
function home(){
  timerPause();S.ex=null;const ys=[...new Set(EX.map(e=>e.year))];if(!S.year||!ys.some(y=>String(y)===String(S.year)))S.year='Por especialidad';
  let h='<h1>CHOICES Final de Carrera – UAI</h1><p class="sub">Simulacros por año y por especialidad · '+EX.reduce((a,e)=>a+e.qs.length,0)+' preguntas · tu avance se guarda en este navegador</p><div class="years">';
  ys.forEach(y=>h+='<button class="chip'+(String(y)===String(S.year)?' on':'')+'" data-y="'+y+'">'+y+'</button>');
  h+='</div><div class="exams">';
  EX.filter(e=>String(e.year)===String(S.year)).forEach(e=>{const st=load(e.id),n=Object.keys(st).length,k=Object.values(st).filter(v=>v.c).length;
    h+='<button class="ex" data-e="'+e.id+'"><b>'+e.name+'</b><span>'+e.qs.length+' preguntas · '+k+' respondidas</span><div class="bar"><i style="width:'+(100*k/e.qs.length)+'%"></i></div></button>'});
  app.innerHTML=h+'</div>';
  app.querySelectorAll('[data-y]').forEach(b=>b.onclick=()=>{S.year=ys.find(y=>String(y)===b.dataset.y);home()});
  app.querySelectorAll('[data-e]').forEach(b=>b.onclick=()=>{S.ex=EX.find(e=>e.id==b.dataset.e);S.st=load(S.ex.id);S.i=0;S.review=false;S.timer=timerLoad(S.ex.id);timerResume();quiz()});
}
function quiz(){
  S.cf=0;
  const e=S.ex;
  const wrong=e.qs.map((x,j)=>({x,j,s:S.st[x.n]})).filter(v=>v.s&&v.s.c&&v.s.ok===false&&!needsReview((KEY[e.id]||{})[v.x.n]));
  if(S.review&&wrong.length&&!wrong.some(v=>v.j===S.i))S.i=wrong[0].j;
  const q=e.qs[S.i],st=S.st[q.n]||{},k=(KEY[e.id]||{})[q.n];
  const done=e.qs.filter(x=>S.st[x.n]?.c).length;
  const graded=e.qs.filter(x=>!needsReview((KEY[e.id]||{})[x.n])).map(x=>S.st[x.n]).filter(v=>v&&v.c&&v.ok!==undefined);
  let h='<div class="top"><button class="link" id="back">← Simulacros</button><span class="stats">'+done+' / '+e.qs.length+' respondidas'+(graded.length?' · '+graded.filter(v=>v.ok).length+' correctas':'')+'</span></div>';
  h+='<div class="progress-line" role="progressbar" aria-label="Progreso del examen" aria-valuenow="'+done+'" aria-valuemin="0" aria-valuemax="'+e.qs.length+'"><span style="width:'+(100*done/e.qs.length)+'%"></span></div>';
  h+='<div class="timer"><span>⏱ Tiempo: <span class="timer-time" id="clock">'+timerFmt(timerMs())+'</span></span><button class="btn" id="timer-toggle">'+(S.timer?.running?'Pausar':'Retomar')+'</button><span class="timer-note">Tiempo efectivo de resolución</span></div>';
  h+='<div class="btns" style="margin:0 0 12px"><button class="btn" id="review">'+(S.review?'Mostrar todas las preguntas':'Revisar errores ('+wrong.length+')')+'</button></div>';
  h+='<div class="card"><div class="qn">'+esc(e.name)+' · pregunta '+esc(q.n)+'</div>'+(needsReview(k)?'<span class="flag">⚠ '+(isProvisional(k)?'Respuesta pendiente de validación científica: no se califica':'Pregunta ambigua o clave discutible: no se califica')+'</span>':'')+'<p class="qt">'+esc(q.q)+'</p>';
  if(q.o.length<2)h+='<div class="fb warn">El PDF original trae esta pregunta incompleta (sin opciones legibles). Usá el texto como consigna abierta.</div>';
  q.o.forEach((t,j)=>{let c='opt';if(st.a===L[j])c+=' sel';
    if(st.c&&k&&k.a&&!needsReview(k)){if(L[j]===k.a)c+=' ok';else if(st.a===L[j])c+=' ko'}
    h+='<button class="'+c+'" data-o="'+L[j]+'" aria-label="Alternativa '+L[j]+'"'+(st.c?' disabled':'')+'><b>'+L[j]+'</b><span>'+esc(t)+'</span></button>'});
  if(q.o.length&&q.o.length<4)h+='<div class="note" style="margin-top:4px">Nota: el PDF muestra solo '+q.o.length+' opciones para esta pregunta.</div>';
  if(st.c){
    if(k&&k.a){const ok=st.a===k.a,uncertain=needsReview(k);h+='<div class="fb '+(uncertain?'warn':ok?'ok':'ko')+'"><b>'+(uncertain?(isProvisional(k)?'Respuesta aún no validada científicamente: sin puntuación definitiva.':'Pregunta discutible: sin puntuación definitiva.'):ok?'Correcto.':'Incorrecto.')+' '+(uncertain?'Clave propuesta (no evaluable): ':'Clave registrada: ')+esc(k.a)+'.</b><br>'+esc(k.why||'')+(k.src?'<br><i>'+(k.src_url?'Fuente consultada para esta corrección: ':'Referencia sugerida (sin verificación individual): ')+esc(k.src)+'</i>':'')+(k.src_url&&/^https:\/\//.test(k.src_url)?'<br><a href="'+esc(k.src_url)+'" target="_blank" rel="noopener noreferrer">Consultar fuente</a>':'')+'</div>'}
    else h+='<div class="fb warn">'+(k?'<b>Pregunta anulable.</b> '+esc(k.why)+(k.src?'<br><i>Fuente: '+esc(k.src)+'</i>':''):'Tu respuesta quedó registrada ('+(st.a||'—')+'). El gabarito con fundamento científico de esta pregunta todavía no está cargado.')+'</div>'}
  if(st.c&&k&&k.o&&Object.keys(k.o).length)h+='<div class="why"><b>Revisión de las otras alternativas</b>'+Object.keys(k.o).sort().map(l=>'<p><b>'+l+'.</b> '+esc(k.o[l])+'</p>').join('')+'</div>';
  h+='<p class="kbd">Atajos: teclas 1–5 para responder · ← / → para navegar. Las respuestas quedan bloqueadas después de elegir.</p>';
  h+='<div class="btns"><button class="btn" id="prev"'+(S.i?'':' disabled')+'>← Anterior</button>'+
   '<button class="btn" id="next"'+(S.i<e.qs.length-1?'':' disabled')+'>Siguiente →</button></div></div><div class="grid">';
  e.qs.forEach((x,j)=>{const s=S.st[x.n]||{},kk=(KEY[e.id]||{})[x.n];if(S.review&&!(s.c&&s.ok===false))return;let c='g';
    if(s.c&&kk&&kk.a&&!needsReview(kk))c+=s.a===kk.a?' ok':' ko';else if(s.a)c+=' a';if(j==S.i)c+=' cur';
    h+='<button class="'+c+'" data-j="'+j+'">'+x.n+'</button>'});
  if(S.review&&!wrong.length)h+='<p class="note">Todavía no hay respuestas incorrectas para revisar.</p>';
  h+='</div><p class="section-label">Navegación por preguntas</p><div class="btns"><button class="link" id="reset">Reiniciar este simulacro</button></div>';
  app.innerHTML=h;window.scrollTo(0,0);
  if(S.review){const ids=wrong.map(v=>v.j),pos=ids.indexOf(S.i);document.getElementById('prev').disabled=pos<=0;document.getElementById('next').disabled=pos<0||pos>=ids.length-1;}
  document.getElementById('back').onclick=home;
  document.getElementById('timer-toggle').onclick=()=>{if(S.timer.running)timerPause();else timerResume();timerRefresh()};
  document.getElementById('review').onclick=()=>{S.review=!S.review;if(S.review&&wrong.length)S.i=wrong[0].j;quiz()};
  document.getElementById('prev').onclick=()=>{if(S.review){const ids=wrong.map(v=>v.j),pos=ids.indexOf(S.i);S.i=ids[Math.max(0,pos-1)]??S.i}else S.i--;quiz()};
  document.getElementById('next').onclick=()=>{if(S.review){const ids=wrong.map(v=>v.j),pos=ids.indexOf(S.i);S.i=ids[Math.min(ids.length-1,pos+1)]??S.i}else S.i++;quiz()};
  document.getElementById('reset').onclick=function(){if(!S.cf){S.cf=1;this.textContent='¿Seguro? Tocá de nuevo para borrar tus respuestas';return}S.cf=0;S.st={};save();S.i=0;S.review=false;S.timer={elapsed:0,running:true,started:Date.now()};timerSave();quiz()};
  app.querySelectorAll('[data-o]').forEach(b=>b.onclick=()=>{const a=b.dataset.o;S.st[q.n]={a,c:1};if(k&&k.a&&!needsReview(k))S.st[q.n].ok=a===k.a;save();quiz()});
  app.querySelectorAll('[data-j]').forEach(b=>b.onclick=()=>{S.i=+b.dataset.j;quiz()});
}
document.addEventListener('keydown',ev=>{if(!S.ex||ev.altKey||ev.ctrlKey||ev.metaKey||ev.repeat||/INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName||''))return;const q=S.ex.qs[S.i];if(/^[1-5]$/.test(ev.key)){const b=app.querySelector('[data-o="'+L[Number(ev.key)-1]+'"]');if(b&&!b.disabled){ev.preventDefault();b.click()}}else if(ev.key==='ArrowRight'){const b=document.getElementById('next');if(b&&!b.disabled){ev.preventDefault();b.click()}}else if(ev.key==='ArrowLeft'){const b=document.getElementById('prev');if(b&&!b.disabled){ev.preventDefault();b.click()}}});
window.addEventListener('pagehide',timerPause);
document.addEventListener('visibilitychange',()=>{if(document.hidden)timerPause();else timerRefresh()});
home();
