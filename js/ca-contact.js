'use strict'

  $('.contact .btn.btn-primary').click(function () {
    const subject =  $('.contact-subject input').val()
    const body = $('textarea#exampleFormControlTextarea1.form-control').val()
    const senderEmail = $('.contact-email input').val()

    console.log('body:', body)
    // console.log('subject:', subject)
    const queryStringParams = ``
    const newUrl = 
    `https://mail.google.com/mail/?view=cm&fs=1&to=inbalmoshe49@gmail.com&su=${subject}&body=${body}&bcc=${senderEmail}`

    window.open(newUrl)
  })



