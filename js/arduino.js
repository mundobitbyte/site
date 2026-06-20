function copyCode(id){
  const code = document.getElementById(id);
  if(code && navigator.clipboard){
    navigator.clipboard.writeText(code.textContent);
  }
}

document.addEventListener('click', function(event){
  const btn = event.target.closest('.mc-option');
  if(!btn) return;

  const question = btn.closest('.mc-question');
  if(!question || question.classList.contains('answered')) return;

  const feedback = question.querySelector('.mc-feedback');
  const options = question.querySelectorAll('.mc-option');
  const correct = btn.dataset.correct === 'true';

  question.classList.add('answered');

  options.forEach(option => {
    option.disabled = true;

    if(option.dataset.correct === 'true'){
      option.classList.add('correct');
    }
  });

  if(correct){
    btn.classList.add('correct');
    feedback.textContent = 'Certa.';
    feedback.className = 'mc-feedback ok';
  }else{
    btn.classList.add('wrong');
    feedback.textContent = 'Errada.';
    feedback.className = 'mc-feedback no';
  }
});

document.addEventListener('DOMContentLoaded', function(){

  const links = Array.from(
    document.querySelectorAll("nav .nav-btn[href^='#']")
  );

  const sections = links
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if(!links.length || !sections.length){
    return;
  }

  function setActive(hash){
    links.forEach(link => {
      link.classList.toggle(
        'active',
        link.getAttribute('href') === hash
      );
    });
  }

  function showPanel(hash){
    const target = document.querySelector(hash);

    if(!target){
      return;
    }

    window.scrollTo(0, 0);

    sections.forEach(section => {
      section.classList.remove('active-panel');
    });

    target.classList.add('active-panel');

    setActive(hash);

    window.scrollTo(0, 0);

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);

    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }

  links.forEach(link => {
    link.addEventListener('click', function(e){
      e.preventDefault();

      const hash = this.getAttribute('href');

      if(!document.querySelector(hash)){
        return;
      }

      showPanel(hash);
    });
  });

  const initialHash =
    location.hash && document.querySelector(location.hash)
      ? location.hash
      : (links[0]
          ? links[0].getAttribute('href')
          : '#intro');

  showPanel(initialHash);

});