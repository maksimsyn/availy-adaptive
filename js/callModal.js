const openBtn = document.querySelector('#callBtn');
const closeBtn = document.querySelector('.call__close');
const callModal = document.querySelector('.call');
const callSubmitBtn = document.querySelector('#callSubmit');

const sendRequestModal = document.querySelector('#requestSend');
const closeModalRequestBtn = document.querySelector('#requestModalClose');

closeBtn.addEventListener('click', () => {
  callModal.classList.add('call--closed');
  callModal.classList.remove('call--opened');
  clearTimeout(modalRequestTimeout);
});

openBtn.addEventListener('click', () => {
  callModal.classList.add('call--opened');
  callModal.classList.remove('call--closed');
});

// callSubmitBtn.addEventListener('click', (event) => {
//   event.preventDefault();
//   sendMessageModal.classList.add('modal--visible');
//   sendMessageModal.classList.remove('modal--hidden');
//   closeBtn.click();
// });

closeModalRequestBtn.addEventListener('click', () => {
  sendRequestModal.classList.remove('modal--visible');
  sendRequestModal.classList.add('modal--hidden');
});

function modalRequestTimeout() {
  const timeout = setTimeout(() => {
    sendRequestModal.classList.remove('modal--visible');
    sendRequestModal.classList.add('modal--hidden');
  }, 5000);
}

