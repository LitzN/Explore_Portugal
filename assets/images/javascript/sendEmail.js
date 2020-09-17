/***CODE FOR EMAIL JS, MAKES REPLY EMAILS FUNCTIONAL******
 AND PROVIDES ERROR/SUCCESS MESSAGE********************** */
function sendMail(contactForm){
    emailjs.send("service_abu3bfk","template_qujff7m",{
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "travel_enquiry":contactForm.travelenquiry.value
    })
    .then(
        function(response) {
            $(".success-result").removeClass("hide");
        },
        function(error) {
            $(".error-result").removeClass("hide");
    });
    return false
}
