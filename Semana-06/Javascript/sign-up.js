window.onload = function () {

    var inputName = document.getElementById('first-name');
    var inputSurname = document.getElementById('surname');
    var inputId = document.getElementById('id');
    var inputDateOfBirth = document.getElementById('dob');
    var inputPhone = document.getElementById('phone-number');
    var inputAddress = document.getElementById('adress');
    var inputCity = document.getElementById('city');
    var inputPostCode = document.getElementById('post-code');
    var inputEmail = document.getElementById('email');
    var inputPassword = document.getElementById('password');
    var inputRepeatPassword = document.getElementById('repeat-password');
    var inputCreateBtn = document.getElementById('create-btn');
    var msgContainer = document.getElementsByClassName('msg-container');

    inputName.addEventListener('blur', nameBlur);
    inputName.addEventListener('focus', nameFocus);
    inputSurname.addEventListener('blur', surnameBlur);
    inputSurname.addEventListener('focus', surnameFocus);
    inputId.addEventListener('blur', idBlur);
    inputId.addEventListener('focus', idFocus);
    inputDateOfBirth.addEventListener('blur', dateOfBirthBlur);
    inputDateOfBirth.addEventListener('focus', dateOfBirthFocus);
    inputPhone.addEventListener('blur', phoneBlur);
    inputPhone.addEventListener('focus', phoneFocus);
    inputAddress.addEventListener('blur', adressBlur);
    inputAddress.addEventListener('focus', adressFocus);
    inputCity.addEventListener('blur', cityBlur);
    inputCity.addEventListener('focus', cityFocus);
    inputPostCode.addEventListener('blur', postCodeBlur);
    inputPostCode.addEventListener('focus', postCodeFocus);
    inputEmail.addEventListener('blur', eMailBlur);
    inputEmail.addEventListener('focus', eMailFocus);
    inputPassword.addEventListener('blur', passWordBlur);
    inputPassword.addEventListener('focus', passWordFocus);
    inputRepeatPassword.addEventListener('blur', repeatPasswordBlur);
    inputRepeatPassword.addEventListener('focus', repeatPasswordFocus);
    inputCreateBtn.addEventListener('click', createBtnClick);

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

    function nameBlur() {
        if (!validateName(inputName.value)) {
            msgContainer[0].classList.remove('hide');
            msgContainer[0].classList.add('error');
            msgContainer[0].innerHTML = 'Invalid Name.';
            inputName.style.border = '3px solid red';
        } else {
            msgContainer[0].classList.remove('error');
            inputName.style.border = '3px solid green';
        }
    }

    function nameFocus() {
        msgContainer[0].classList.add('hide');
        inputName.style.border = '3px solid grey';
    }

    function surnameBlur() {
        if (!validateName(inputSurname.value)) {
            msgContainer[1].classList.remove('hide');
            msgContainer[1].classList.add('error');
            msgContainer[1].innerHTML = 'Invalid Surname.';
            inputSurname.style.border = '3px solid red';
        } else {
            msgContainer[1].classList.remove('error');
            inputSurname.style.border = '3px solid green';
        }
    }

    function surnameFocus() {
        msgContainer[1].classList.add('hide');
        inputSurname.style.border = '3px solid grey';
    }

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
            msgContainer[2].innerHTML = 'Invalid ID.';
            inputId.style.border = '3px solid red';
        } else {
            msgContainer[2].classList.remove('error');
            inputId.style.border = '3px solid green';
        }
    }

    function idFocus() {
        msgContainer[2].classList.add('hide');
        inputId.style.border = '3px solid grey';
    }

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
            msgContainer[3].innerHTML = 'Invalid Date of birth.';
            inputDateOfBirth.style.border = '3px solid red';
        } else {
            msgContainer[3].classList.remove('error');
            inputDateOfBirth.style.border = '3px solid green';
        }
    }

    function dateOfBirthFocus() {
        msgContainer[3].classList.add('hide');
        inputDateOfBirth.style.border = '3px solid grey';
    }

    function validatePhone() {
        var flag = true;
        var i = 0

        if (inputPhone.value.length === 10) {
            while (i < inputPhone.value.length && flag === true) {
                if (isNaN(inputPhone.value[i])) {
                    flag = false;
                }
                i++;
            }
        } else {
            flag = false;
        }
        return flag;
    }

    function phoneBlur() {
        if (!validatePhone()) {
            msgContainer[4].classList.remove('hide');
            msgContainer[4].classList.add('error');
            msgContainer[4].innerHTML = 'Invalid Phone Number.';
            inputPhone.style.border = '3px solid red';
        } else {
            msgContainer[4].classList.remove('error');
            inputPhone.style.border = '3px solid green';
        }
    }

    function phoneFocus() {
        msgContainer[4].classList.add('hide');
        inputPhone.style.border = '3px solid grey';
    }

    function validateAdress() {
        var addressBlanks = inputAddress.value.replaceAll(' ', '');
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
        if (inputAddress.value.length > 5 && number == true && letter == true &&
            inputAddress.value.indexOf(' ') > 0 &&
            inputAddress.value.indexOf(' ') < inputAddress.value.length - 1 &&
            inputAddress.value.length > inputAddress.value.lastIndexOf(' ')) {
            return true
        } else {
            return false
        }

    } function adressBlur() {
        if (!validateAdress()) {
            msgContainer[5].classList.remove('hide');
            msgContainer[5].classList.add('error');
            msgContainer[5].innerHTML = 'Invalid Adress.';
            inputAddress.style.border = '3px solid red';
        } else {
            msgContainer[5].classList.remove('error');
            inputAddress.style.border = '3px solid green';
        }
    }

    function adressFocus() {
        msgContainer[5].classList.add('hide');
        inputAddress.style.border = '3px solid grey';
    }

    function cityBlur() {
        if (!validateName(inputCity.value)) {
            msgContainer[6].classList.remove('hide');
            msgContainer[6].classList.add('error');
            msgContainer[6].innerHTML = 'Invalid city.';
            inputCity.style.border = '3px solid red';
        } else {
            msgContainer[6].classList.remove('error');
            inputCity.style.border = '3px solid green';
        }
    }

    function cityFocus() {
        msgContainer[6].classList.add('hide');
        inputCity.style.border = '3px solid grey';
    }

    function validatePostCode() {
        var flag = true;
        var i = 0

        if (inputPostCode.value.length >= 4 && inputPostCode.value.length <= 5) {
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
            msgContainer[7].innerHTML = 'Invalid Post Code.';
            inputPostCode.style.border = '3px solid red';
        } else {
            msgContainer[7].classList.remove('error');
            inputPostCode.style.border = '3px solid green';
        }
    }

    function postCodeFocus() {
        msgContainer[7].classList.add('hide');
        inputPostCode.style.border = '3px solid grey';
    }

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
        if (!validateEmail()) {
            msgContainer[8].classList.remove('hide');
            msgContainer[8].classList.add('error');
            msgContainer[8].innerHTML = 'Invalid Email.';
            inputEmail.style.border = '3px solid red';
        } else {
            msgContainer[8].classList.remove('error');
            inputEmail.style.border = '3px solid green';
        }
    }

    function eMailFocus() {
        msgContainer[8].classList.add('hide');
        inputEmail.style.border = '3px solid grey';
    }

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
        if (!validatePassword()) {
            msgContainer[9].classList.remove('hide');
            msgContainer[9].classList.add('error');
            msgContainer[9].innerHTML = 'The password entered is incorrect.';
            inputPassword.style.border = '3px solid red';
        } else {
            msgContainer[9].classList.remove('error');
            inputPassword.style.border = '3px solid green';
        }
    }

    function passWordFocus() {
        msgContainer[9].classList.add('hide');
        inputPassword.style.border = '3px solid grey';
    }

    function reValidatePassword() {
        if (inputRepeatPassword.value == inputPassword.value) {

            return true;

        } return false

    }
    function repeatPasswordBlur() {
        if (!reValidatePassword()) {
            msgContainer[10].classList.remove('hide');
            msgContainer[10].classList.add('error');
            msgContainer[10].innerHTML = 'The password does not match.';
            inputRepeatPassword.style.border = '3px solid red';
        } else {
            msgContainer[10].classList.remove('error');
            inputRepeatPassword.style.border = '3px solid green';
        }
    }

    function repeatPasswordFocus() {
        msgContainer[10].classList.add('hide');
        inputRepeatPassword.style.border = '3px solid grey';
    }

    function createBtnClick() {
        alert('CONGRATULATIONS\n YOUR ACCOUNT HAS BEEN SUCCESSFULLY CREATED' + '\nName: ' + inputName.value + '\nSurname: ' + inputSurname.value + '\nID: ' + inputId.value +
            '\nDate of Birth: ' + inputDateOfBirth.value + '\nPhone Number: ' + inputPhone.value + '\nAddress: ' +
            inputAddress.value + '\nCity: ' + inputCity.value + '\nPost Code: ' + inputPostCode.value +
            '\nEmail: ' + inputEmail.value + '\nPassword: ' + inputPassword.value)
    }
}








