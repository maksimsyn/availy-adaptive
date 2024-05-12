const sendBtn = document.querySelector('#submitBtn');

const sendMessageModal = document.querySelector('#messageSend');
const closeModalMessageBtn = document.querySelector('#messageModalClose');

function modalMessageTimeout() {
  const timeout = setTimeout(() => {
    sendMessageModal.classList.remove('modal--visible');
    sendMessageModal.classList.add('modal--hidden');
  }, 5000);
}

// sendBtn.addEventListener('click', (event) => {
// //   event.preventDefault();
// //   sendRequestModal.classList.remove('modal--hidden');
// //   sendRequestModal.classList.add('modal--visible');
// //   modalRequestTimeout();
// // });

closeModalMessageBtn.addEventListener('click', () => {
  sendRequestModal.classList.remove('modal--visible');
  sendRequestModal.classList.add('modal--hidden');
  clearTimeout(modalMessageTimeout);
});
