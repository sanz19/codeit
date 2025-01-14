var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var msgError = document.getElementById("msg-error");
var submitError = document.getElementById("submit-error");


function ValidateName(){
     var name = document.getElementById("contact-name").value;

     if(name.length == 0) {
        nameError.innerHTML = "Enter your name";
        return false;
     }
     if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Full name required";
        return false;
     }
     nameError.innerHTML = "";
     return true;
}

function ValidatePhone() {
    var phone = document.getElementById("contact-phone").value;

    if(phone.length == 0) {
        phoneError.innerHTML = "Enter your phone";
        return false;
     }
     if(phone.length !== 10) {
        phoneError.innerHTML = "Phone number too long";
        return false;
     }
     if(!phone.match(/^[6-9]{3}[0-9]{7}$/)) {
        phoneError.innerHTML = "Enter a valid phone number";
        return false;
     }
     phoneError.innerHTML = "";
     return true;
    
}

function ValidateEmail() {
    var email = document.getElementById("contact-email").value;

    if(email.length == 0) {
        emailError.innerHTML = "Enter your email";
        return false;
     }
     if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        emailError.innerHTML = "Enter a valid email";
        return false;
     }
     emailError.innerHTML = "";
     return true;

}

function ValidateMsg (){
    var msg = document.getElementById("contact-msg").value;
    var req = 7;
    var left = req - msg.length;

    if(left > 0) {
        msgError.innerHTML = left + " more characters required";
        return false;
     }
     msgError.innerHTML = "";
     return true;

}

function ValidateForm(){
    if(!ValidateName() || !ValidatePhone() || !ValidateEmail() || !ValidateMsg()) {
        submitError.style.display = "block";
        submitError.innerHTML = "Complete the form before send";
        setTimeout(function(){submitError.style.display="none";}, 3000);
        return false
    }


}