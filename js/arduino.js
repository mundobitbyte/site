function copyCode(id){navigator.clipboard.writeText(document.getElementById(id).textContent)}


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


document.addEventListener("DOMContentLoaded", function(){
  const links = Array.from(document.querySelectorAll("nav .nav-btn[href^='#']"));
  const sections = links.map(a => document.querySelector(a.getAttribute("href"))).filter(Boolean);

  links.forEach(link => {
    link.addEventListener("click", function(e){
      const target = document.querySelector(this.getAttribute("href"));
      if(!target) return;
      e.preventDefault();
      target.scrollIntoView({behavior:"smooth", block:"start"});
      history.replaceState(null, "", this.getAttribute("href"));
      links.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const id = "#" + entry.target.id;
        links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === id));
      }
    });
  },{rootMargin:"-30% 0px -60% 0px", threshold:0.01});

  sections.forEach(sec => observer.observe(sec));
});
