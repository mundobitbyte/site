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

async function loadBancoDadosCap6(){
  const paths = [
    'fragments/bancodedados/cap6-1.html',
    'fragments/bancodedados/cap6-2.html',
    'fragments/bancodedados/cap6-3.html',
    'fragments/bancodedados/cap6-4.html',
    'fragments/bancodedados/cap6-exercicios.html'
  ];

  const parts = await Promise.all(paths.map(async path => {
    const response = await fetch(path);
    if(!response.ok) throw new Error(`Falha ao carregar ${path}: ${response.status}`);
    return response.text();
  }));

  const placeholder = document.getElementById('mod-sgbd');
  if(placeholder) placeholder.outerHTML = parts.slice(0, 4).join('');

  const card = document.querySelector(".exercise-chapter-card[onclick=\"openExerciseChapter('ex-building-sgbd')\"]");
  if(card){
    card.outerHTML = `<button class="exercise-chapter-card" onclick="openExerciseChapter('ex-cap7')">
<h3>6 Administração e SGBD</h3>
<p>Servidor, serviço, clientes, usuários, privilégios, roles, backup, restauração e diagnóstico.</p>
<span class="exercise-status available">Disponível · 12 exercícios</span>
</button>`;
  }

  const exercisePlaceholder = document.getElementById('ex-building-sgbd');
  if(exercisePlaceholder) exercisePlaceholder.outerHTML = parts[4];
}

loadBancoDadosCap6().catch(err => console.error('Falha ao carregar Capítulo 6:', err));
