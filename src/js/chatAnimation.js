const intro = document.querySelector('.intro');
const messages = document.querySelectorAll('.intro__message');
const messagesTexts = document.querySelectorAll('.intro__text');
let isMobile = navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i);

if (isMobile) {
  [].slice.call(messagesTexts).forEach((message) => {
    message.style.visibility = 'hidden';
  });

  setTimeout(() => {
    messagesTexts[0].style.visibility = 'visible'
  }, 2100);

  setTimeout(() => {
    messagesTexts[1].style.visibility = 'visible'
  }, 4200);

  setTimeout(() => {
    messagesTexts[2].style.visibility = 'visible'
  }, 6300);
}

if (!isMobile) {
  [].slice.call(messagesTexts).forEach((message) => {
    message.style.visibility = 'visible';
  });
  // messages[1].style.top = `${intro.offsetHeight / 4}px`;
  // messages[1].style.left = `${intro.offsetWidth / 5}px`;
  // messages[2].style.top = `${intro.offsetHeight / 2.5}px`;
  // messages[2].style.right = `${intro.offsetWidth / 8}px`;
}


