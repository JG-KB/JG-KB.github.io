const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.getElementById('close-modal');

const openModal = function() {
  document.body.classList.add('modal-open');
};

const closeModal = function() {
  document.body.classList.remove('modal-open');
};

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

