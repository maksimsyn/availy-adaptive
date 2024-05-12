const formSubmit = () => {

  const $form = $('.contacts__form');
  let $error = false;

  $('.contacts__form input[required]').each(function () {
    if ($(this).val() == '') {
      $(this).addClass('error');
      $(this)[0].focus();

      console.log(`error: ` + $(this).attr('placeholder'));
      $error = true
    }
  });

  if (!$error) {
    const $data = $form.serialize();

    $.ajax({
      type: 'POST',
      url: 'send.php',
      data: $data,
      error: function(xhr, ajaxOptions, thrownError) {
        console.log(xhr.status);
        console.log(thrownError)
      },
      success: function(data) {
        if (data['error']) {
          console.log(`error: ${data['error']}`)
        } else {
          // showFormOverlay();
          sendMessageModal.classList.add('modal--visible');
          sendMessageModal.classList.remove('modal--hidden');
          modalMessageTimeout();

          setTimeout(() => {
            $('.contacts__form')[0].reset();
            $('.contacts__input, .contacts__message').focusout()
          }, 400)
        }
      }
    })
  }

  return false
};

$('.contacts__form').submit(formSubmit);
