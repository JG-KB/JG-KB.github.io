const showButton = document.getElementById('showButton');

showButton.addEventListener('click',function(){
  const para = document.querySelector('.textBoxP');

  if (para.classList.contains('open')) {
    para.classList.remove('open');
    showButton.innerText = 'Somethings About Me';   
  } else { 
    para.classList.add('open');
    showButton.innerText = 'Hide';
  }

  open = !open; 
});