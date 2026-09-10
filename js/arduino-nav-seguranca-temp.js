document.addEventListener('DOMContentLoaded', function(){
  const menu = document.getElementById('arduinoModuleMenu');
  if(!menu || menu.querySelector('a[href="arduino-seguranca.html"]')) return;

  const link9 = document.createElement('a');
  link9.className = 'module-btn';
  link9.href = 'arduino-seguranca.html';
  link9.textContent = '9. Proteção e Segurança';
  link9.style.textDecoration = 'none';

  const exercicios = menu.querySelector('a[href="arduino-exercicios.html"]');
  if(exercicios) menu.insertBefore(link9, exercicios);
  else menu.appendChild(link9);
});
