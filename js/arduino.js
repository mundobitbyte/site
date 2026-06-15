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
  const links = Array.from(document.querySelectorAll("nav .nav-btn[href^='#']"));
  const sections = links
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  if(!links.length || !sections.length) return;

  let manualScroll = false;
  let manualTimer = null;

  function getStickyOffset(){
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const headerHeight = header ? Math.ceil(header.getBoundingClientRect().height) : 0;
    const navHeight = nav ? Math.ceil(nav.getBoundingClientRect().height) : 0;
    return headerHeight + navHeight + 14;
  }

  function setActive(hash){
    links.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === hash);
    });
  }

  function scrollToSection(target, hash, behavior){
    const top = target.getBoundingClientRect().top + window.pageYOffset - getStickyOffset();
    manualScroll = true;
    window.scrollTo({ top: Math.max(0, top), behavior: behavior || 'smooth' });
    history.replaceState(null, '', hash);
    setActive(hash);

    clearTimeout(manualTimer);
    manualTimer = setTimeout(() => {
      const correctedTop = target.getBoundingClientRect().top + window.pageYOffset - getStickyOffset();
      if(Math.abs(window.pageYOffset - correctedTop) > 3){
        window.scrollTo({ top: Math.max(0, correctedTop), behavior: 'auto' });
      }
      setActive(hash);
      manualScroll = false;
    }, behavior === 'auto' ? 80 : 520);
  }

  links.forEach(link => {
    link.addEventListener('click', function(e){
      const hash = this.getAttribute('href');
      const target = document.querySelector(hash);
      if(!target) return;
      e.preventDefault();
      scrollToSection(target, hash, 'smooth');
    });
  });

  const observer = new IntersectionObserver((entries)=>{
    if(manualScroll) return;

    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

    if(visible){
      setActive('#' + visible.target.id);
    }
  },{
    rootMargin: `-${getStickyOffset() + 10}px 0px -65% 0px`,
    threshold: 0.01
  });

  sections.forEach(sec => observer.observe(sec));

  window.addEventListener('load', function(){
    if(location.hash){
      const target = document.querySelector(location.hash);
      if(target){
        scrollToSection(target, location.hash, 'auto');
      }
    }
  });
});
