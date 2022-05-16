// VALIDATION

document.querySelector('.onclick').onclick = () => {

    var name = document.querySelector(`#name`).value;
    var email = document.querySelector(`#email`).value;
    var message = document.querySelector(`#message`).value;

    var nameContact = /^([a-z0-9-]+)$/i;

    var emailContact = /^([a-z0-9]+)@([a-z]+).([a-z]{2,5})(.[a-z]{2,3})?$/;

    var textContact = /^([a-z0-9+$%,:;*#&-_\s]+)$/igm;

    if (name == '') {
        document.querySelector('.usererror').textContent = `Please insert your name here`;
    }
    else if (name.length < 2) {
        document.querySelector('.usererror').innerHTML = `Name: ${name} cannot be less than 2 characters.`;
    }
    else if (!(nameContact.test(name))) {
        document.querySelector('.usererror').innerHTML = `Name: ${name} = invalid`;
    }
    else {
        document.querySelector('.usererror').innerHTML = `success`;
    };

    if (email == '') {
        document.querySelector('.usererror1').textContent = `Please insert your e-mail address here`;
    }
    else if (email.length < 8) {
        document.querySelector('.usererror1').innerHTML = `E-mail: ${email} cannot be less than 8 characters.`;
    }
    else if (!(emailContact.test(email))) {
        document.querySelector('.usererror1').innerHTML = `E-mail: ${email} = invalid`;
    }
    else {
        document.querySelector('.usererror1').innerHTML = `success`;
    };

    if (message == '') {
        document.querySelector('.usererror2').textContent = `Please insert your message here`;
    }
    else if (message.length < 5) {
        document.querySelector('.usererror2').innerHTML = `Message: ${message} cannot be less than 5 characters.`;
    }
    else if (!(textContact.test(message))) {
        document.querySelector('.usererror2').innerHTML = `Message: ${message} = invalid`;
    }
    else {
        document.querySelector('.usererror2').innerHTML = `success`;
    };

};


// window.addEventListener("scroll", function(){
//     if(document.body.scrollTop > 900 || document.documentElement.scrollTop > (20)){
//         document.querySelector('.up').style.display = "block";
//     }
//     else{
//         document.querySelector('.up').style.display = "none";
//     }
// });

// document.addEventListener("click", function(){
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// });