function sendMail(contactForm){
    emailjs.send("service_abu3bfk","template_qujff7m",{
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "travel_enquiry":contactForm.travelenquiry.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
    });
    return false
}
