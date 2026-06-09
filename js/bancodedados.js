function openExerciseChapter(id){
  const home = document.getElementById('exerciseHome');
  if(home) home.classList.add('hidden');
  document.querySelectorAll('.exercise-chapter-view').forEach(v=>v.classList.remove('active'));
  const view = document.getElementById(id);
  if(view) view.classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
}
function backToExerciseHome(){
  const home = document.getElementById('exerciseHome');
  if(home) home.classList.remove('hidden');
  document.querySelectorAll('.exercise-chapter-view').forEach(v=>v.classList.remove('active'));
  window.scrollTo({top:0,behavior:'smooth'});
}

function showModule(id){
  document.querySelectorAll('.module').forEach(m=>m.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(b=>b.classList.remove('active'));
  const mod=document.getElementById('mod-'+id);
  const btn=document.getElementById('btn-'+id);
  if(mod&&btn){
    mod.classList.add('active');
    btn.classList.add('active');
    if(id==='exercicios' && typeof backToExerciseHome === 'function'){
      backToExerciseHome();
    }
    window.scrollTo({top:0,behavior:'smooth'});
  }
}
document.querySelectorAll('.nav-link[data-target]').forEach(btn=>btn.addEventListener('click',()=>showModule(btn.dataset.target)));
showModule('inicio');


document.addEventListener('click', function(e){
  const btn = e.target.closest('.copy-btn');
  if(!btn) return;
  const box = btn.closest('.codebox');
  const code = box ? box.querySelector('code') : null;
  if(!code) return;
  navigator.clipboard.writeText(code.innerText).then(function(){
    const old = btn.innerText;
    btn.innerText = 'Copiado!';
    btn.classList.add('copied');
    setTimeout(function(){ btn.innerText = old; btn.classList.remove('copied'); }, 1600);
  });
});
