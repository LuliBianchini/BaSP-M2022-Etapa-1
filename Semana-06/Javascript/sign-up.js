window.onload = function () {

    var inputName = document.getElementById("first-name");
    var inputSurname = document.getElementById("surname");
    var inputId = document.getElementById("id");
    var inputDateOfBirth = document.getElementById("dob");
    var inputPhone = document.getElementById("phone-number");
    var inputAdress = document.getElementById("adress");
    var inputCity = document.getElementById("city");
    var inputPostCode = document.getElementById("post-code");
    var inputEmail = document.getElementById("email");
    var inputPassword = document.getElementById("password");
    var inputRepeatPassword = document.getElementById("repeat-password");
/*     var inputCreateBtn = document.getElementById("create-btn"); */
    var msgContainer = document.getElementsByClassName("msg-container");

    console.log(inputEmail.value)
    inputName.addEventListener("blur", nameBlur);
    inputName.addEventListener("focus", nameFocus);
    inputSurname.addEventListener("blur", surnameBlur);
    inputSurname.addEventListener("focus", surnameFocus);
    inputId.addEventListener("blur", idBlur);
    inputId.addEventListener("focus", idFocus);
    inputDateOfBirth.addEventListener("blur", dateOfBirthBlur);
    inputDateOfBirth.addEventListener("focus", dateOfBirthFocus);
    inputPhone.addEventListener("blur", phoneBlur);
    inputPhone.addEventListener("focus", phoneFocus);
    inputAdress.addEventListener("blur", adressBlur);
    inputAdress.addEventListener("focus", adressFocus);
    inputCity.addEventListener("blur", cityBlur);
    inputCity.addEventListener("focus", cityFocus);
    inputPostCode.addEventListener("blur", postCodeBlur);
    inputPostCode.addEventListener("focus", postCodeFocus);
    inputEmail.addEventListener("blur", eMailBlur);
    inputEmail.addEventListener("focus", eMailFocus);
    inputPassword.addEventListener("blur", passWordBlur);
    inputPassword.addEventListener("focus", passWordFocus);
    inputRepeatPassword.addEventListener("blur", repeatPasswordBlur);
    inputRepeatPassword.addEventListener("focus", repeatPasswordFocus);
    /*     inputCreateBtn.addEventListener("click", createBtnBlur); */

    // ------------ VALIDATE NAME ---------------
    function validateName(name) {
        var flag = true;
        var i = 0;

        if (name.length > 3) {
            while (i < name.length && flag === true) {
                if (!isNaN(name[i])) {
                    flag = false;
                }
                i++;
            }
        } else {
            flag = false;
        }
        return flag;
    }

    // FIRST NAME
    function nameBlur() {
        if (!validateName(inputName.value)) {
            msgContainer[0].classList.remove('hide');
            msgContainer[0].classList.add('error');
            msgContainer[0].innerHTML = "Name incorrect";
            inputName.style.border = "3px solid red";
        } else {
            msgContainer[0].classList.remove('error');
            inputName.style.border = "3px solid green";
        }
    }

    function nameFocus() {
        msgContainer[0].classList.add('hide');
        inputName.style.border = "3px solid grey";
    }

    // SURNAME
    function surnameBlur() {
        if (!validateName(inputSurname.value)) {
            msgContainer[1].classList.remove('hide');
            msgContainer[1].classList.add('error');
            msgContainer[1].innerHTML = "Surname incorrect";
            inputSurname.style.border = "3px solid red";
        } else {
            msgContainer[1].classList.remove('error');
            inputSurname.style.border = "3px solid green";
        }
    }

    function surnameFocus() {
        msgContainer[1].classList.add('hide');
        inputSurname.style.border = "3px solid grey";
    }

    // ID
    function validateId() {
        var flag = true;
        var i = 0

        if (inputId.value.length > 7) {
            while (i < inputId.value.length && flag === true) {
                if (isNaN(inputId.value[i])) {
                    flag = false;
                }
                i++;
            }
        } else {
            flag = false;
        }
        return flag;
    }

    function idBlur() {
        if (!validateId()) {
            msgContainer[2].classList.remove('hide');
            msgContainer[2].classList.add('error');
            msgContainer[2].innerHTML = "DNI incorrect";
            inputId.style.border = "3px solid red";
        } else {
            msgContainer[2].classList.remove('error');
            inputId.style.border = "3px solid green";
        }
    }

    function idFocus() {
        msgContainer[2].classList.add('hide');
        inputId.style.border = "3px solid grey";
    }

    // DATE OF BIRTH
    function validateDoF() {
        if (new Date(inputDateOfBirth.value).getTime() > new Date().getTime()) {
            return false;
        } else {
            return true;
        }
    }

    function dateOfBirthBlur() {
        if (!validateDoF()) {
            msgContainer[3].classList.remove('hide');
            msgContainer[3].classList.add('error');
            msgContainer[3].innerHTML = "Date of birth incorrect";
            inputDateOfBirth.style.border = "3px solid red";
        } else {
            msgContainer[3].classList.remove('error');
            inputDateOfBirth.style.border = "3px solid green";
        }
    }

    function dateOfBirthFocus() {
        msgContainer[3].classList.add('hide');
        inputDateOfBirth.style.border = "3px solid grey";
    }

    // PHONE NUMBER

    function validatePhone() {

        for (var i = 0; i < inputPhone.value.length; i++) {
            if (!isNaN(inputPhone.value[i]) && (inputPhone.value.lenght == 9)) {
                return true;
            }
        }
        return false;
    }

    function phoneBlur() {
        if (!validatePhone()) {
            msgContainer[4].classList.remove('hide');
            msgContainer[4].classList.add('error');
            msgContainer[4].innerHTML = "Phone number incorrect";
            inputPhone.style.border = "3px solid red";
        } else {
            msgContainer[4].classList.remove('error');
            inputPhone.style.border = "3px solid green";
        }
    }

    function phoneFocus() {
        msgContainer[4].classList.add('hide');
        inputPhone.style.border = "3px solid grey";
    }


    // ADRESS

    function validateAdress() {
        var addressBlanks = inputAdress.value.replaceAll(' ', '');
        var number = false;
        for (var i = 0; i < addressBlanks.length; i++) {
            if (isNaN(addressBlanks[i]) == false) {
                number = true;
            }
        }
        var letter = false;
        for (var i = 0; i < addressBlanks.length; i++) {
            if (isNaN(addressBlanks[i]) == true) {
                letter = true;
            }
        }
        if (inputAdress.value.length > 5 && number == true && letter == true &&
            inputAdress.value.indexOf(' ') > 0 &&
            inputAdress.value.indexOf(' ') < inputAdress.value.length - 1 &&
            inputAdress.value.length > inputAdress.value.lastIndexOf(' ')) {
            return true
        } else {
            return false
        }

    } function adressBlur() {
        if (!validateAdress()) {
            msgContainer[5].classList.remove('hide');
            msgContainer[5].classList.add('error');
            msgContainer[5].innerHTML = "Adress incorrect";
            inputAdress.style.border = "3px solid red";
        } else {
            msgContainer[5].classList.remove('error');
            inputAdress.style.border = "3px solid green";
        }
    }

    function adressFocus() {
        msgContainer[5].classList.add('hide');
        inputAdress.style.border = "3px solid grey";
    }

    

    // CITY
    function cityBlur() {
        if (!validateName(inputCity.value)) {
            msgContainer[6].classList.remove('hide');
            msgContainer[6].classList.add('error');
            msgContainer[6].innerHTML = "Name incorrect";
            inputCity.style.border = "3px solid red";
        } else {
            msgContainer[6].classList.remove('error');
            inputCity.style.border = "3px solid green";
        }
    }

    function cityFocus() {
        msgContainer[6].classList.add('hide');
        inputCity.style.border = "3px solid grey";
    }

    // POST CODE

    function validatePostCode() {
        var flag = true;
        var i = 0

        if ((inputPostCode.value.lenght >= 4) && (inputPostCode.value.lenght <= 5)) {
            while (i < inputPostCode.value.length && flag === true) {
                if (isNaN(inputPostCode.value[i])) {
                    flag = false;
                }
                i++;
            }
        } else {
            flag = false;
        }
        return flag;

    }
    function postCodeBlur() {
        if (!validatePostCode()) {
            msgContainer[7].classList.remove('hide');
            msgContainer[7].classList.add('error');
            msgContainer[7].innerHTML = "Name incorrect";
            inputPostCode.style.border = "3px solid red";
        } else {
            msgContainer[7].classList.remove('error');
            inputPostCode.style.border = "3px solid green";
        }
    }

    function postCodeFocus() {
        msgContainer[7].classList.add('hide');
        inputPostCode.style.border = "3px solid grey";
    }
    
    // EMAIL

    function validateEmail() {
        var emailFormat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
        var emailValue = inputEmail.value;
        var validMail = emailFormat.test(emailValue);
        if (!validMail) {
            return false;
        }

        return true
    }

    function eMailBlur() {
        if (!validateEmail(inputEmail.value)) {
            msgContainer[8].classList.remove('hide');
            msgContainer[8].classList.add('error');
            msgContainer[8].innerHTML = "Email incorrect";
            inputEmail.style.border = "3px solid red";
        } else {
            msgContainer[8].classList.remove('error');
            inputEmail.style.border = "3px solid green";
        }
    }

    function eMailFocus() {
        msgContainer[8].classList.add('hide');
        inputEmail.style.border = "3px solid grey";
    }

    // PASSWORD

    function validatePassword() {
        var passwordFormat = /^[A-Za-z0-9_-]*$/;
        var passwordValue = inputPassword.value;
        var validPassword = passwordFormat.test(passwordValue);
        if (passwordValue.length < 7 || !validPassword) {
            return false;
        }

        return true
    }

    function passWordBlur() {
        if (!validatePassword(inputPassword.value)) {
            msgContainer[9].classList.remove('hide');
            msgContainer[9].classList.add('error');
            msgContainer[9].innerHTML = "Password incorrect";
            inputPassword.style.border = "3px solid red";
        } else {
            msgContainer[9].classList.remove('error');
            inputPassword.style.border = "3px solid green";
        }
    }

    function passWordFocus() {
        msgContainer[9].classList.add('hide');
        inputPassword.style.border = "3px solid grey";
    }

    // REPEAT PASSWORD

    function reValidatePassword() {
        if (inputRepeatPassword.value == inputPassword.value) {

            return true;

        } return false

    }
    function repeatPasswordBlur() {
        if (!reValidatePassword(inputRepeatPassword.value)) {
            msgContainer[10].classList.remove('hide');
            msgContainer[10].classList.add('error');
            msgContainer[10].innerHTML = "Password incorrect";
            inputRepeatPassword.style.border = "3px solid red";
        } else {
            msgContainer[10].classList.remove('error');
            inputRepeatPassword.style.border = "3px solid green";
        }
    }

    function repeatPasswordFocus() {
        msgContainer[10].classList.add('hide');
        inputRepeatPassword.style.border = "3px solid grey";
    }
}












