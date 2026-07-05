(function(){
  const started = localStorage.getItem('mbbAcademiaStarted');
  if(!started){
    localStorage.setItem('mbbAcademiaStarted','true');
  }
})();
