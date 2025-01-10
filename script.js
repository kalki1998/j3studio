(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "0cBPrftjZ1O_wkB35",
    });
})();

const msg = document.querySelector(".form-message");

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_zt8l5eh', 'template_09l9b1m', this).then(
            function() {
                document.getElementById("contact-form").reset();
                msg.innerHTML = "";
                msg.innerHTML += "<span class='success-message'>email sent successfully</span>";
            },
            function(error) {
                msg.innerHTML += "<span class='error-message'>email sent failed</span>";
            });
    });
}