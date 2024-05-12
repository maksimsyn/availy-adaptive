const callFormSubmit = () => {

  const $form = $('.call__form');
  let $error = false;

  $('.call__form input[required]').each(function () {
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
          sendRequestModal.classList.remove('modal--hidden');
          sendRequestModal.classList.add('modal--visible');
          closeBtn.click();
          modalRequestTimeout();

          setTimeout(() => {
            $('.call__form')[0].reset();
            $('.call__input').focusout()
          }, 400)
        }
      }
    })
  }

  return false
};

$('.call__form').submit(callFormSubmit);
