const firstMessage = document.querySelector('.work__message--first');
const secondMessage = document.querySelector('.work__message--second');


secondMessage.addEventListener('animationiteration', () => {
  secondMessage.classList.add('work__message--paused');
  setTimeout(() => {
    secondMessage.classList.remove('work__message--paused')
  }, 7000)
});

firstMessage.addEventListener('animationiteration', () => {
  firstMessage.classList.add('work__message--paused');
  setTimeout(() => {
    firstMessage.classList.remove('work__message--paused')
  }, 7000)
});
