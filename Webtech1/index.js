$(document).ready(function () {
    $("#signin-button").click(function () {
        var inputPhone = document.getElementById("phone").value.trim();
        var inputEmail = document.getElementById("email").value.trim();
        var inputPwd = document.getElementById("password").value.trim();
        var inputZip = document.getElementById("zip").value.trim();

        if (mustFill() & validateEmail(inputEmail) & checkPassword(inputPwd) &passwordMatch() & checkPhone(inputPhone) & checkZip(inputZip)) {
            window.location.href = "logged-in/logged-in.html";
        }
    })
})

function validateEmail(inputEmail) {
    var inputEmailLength = document.getElementById("email").value.trim().length;

    if (inputEmailLength > 0) {
        var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (re.test(inputEmail)) {
            return (true)
        } else {
            document.getElementById("invalid-email").style.display = "block";
            document.getElementById("empty-name").innerHTML = "pelda@pelda.hu";
            return (false)
        }
    }
}

function checkPassword(pwd) {

    var inputPwd = document.getElementById("password").value.trim().length;

    if (inputPwd > 0) {
        var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        if (re.test(pwd)) {
            document.getElementById("invalid-pwd").style.display = "none";
            document.getElementById("empty-pwd").innerHTML = "";  
            return (true)
        } else {
            document.getElementById("invalid-pwd").style.display = "block";
            document.getElementById("empty-pwd").innerHTML = "Legalább 6 karakter, szám, kis és nagy betű használata kötelező!";
            return (false)
        }
    }
}
function passwordMatch() {

    var inputPwd = document.getElementById("password").value.trim().length;
    var inputPwd2 = document.getElementById("password2").value.trim().length;

    if(inputPwd!=inputPwd2){
        document.getElementById("invalid-pwd2").style.display = "block";
        document.getElementById("empty-pwd2").innerHTML = "A jelszavaknak egyezniük kell!";
        return false;
    }
    else {
        document.getElementById("invalid-pwd2").style.display = "none";
        document.getElementById("empty-pwd2").innerHTML = "";
        return true;
    }
}

function checkPhone(phone) {
    var inputPhone = document.getElementById("phone").value.trim().length;

    if (inputPhone > 0) {
        var re = /^\+36(?:(?:(?:1|20|30|31|50|70)[1-9]\d{6})|[1-9]\d{7})$/;
        if (re.test(phone)) {
            return (true)
        } else {
            document.getElementById("invalid-phone").style.display = "block";
            document.getElementById("empty-name").innerHTML = "Pl.:+36201234567";
            return (false)
        }
    }
}

function checkZip(zip) {
    var inputZip = document.getElementById("zip").value.trim().length;

    if (inputZip > 0) {
        if (zip >= 1000 && zip <= 9999) {
            return (true)
        } else {
            document.getElementById("invalid-zip").style.display = "block";
            return (false)
        }
    }
}

function awake() {
    var awakeSound = document.getElementById("awakeSound");
    awakeSound.play(); 
}

function mustFill() {
    var inputName = document.getElementById("name").value.trim().length;
    var inputPhone = document.getElementById("phone").value.trim().length;
    var inputEmail = document.getElementById("email").value.trim().length;
    var inputPwd = document.getElementById("password").value.trim().length;
    var inputZip = document.getElementById("zip").value.trim().length;
    var inputCity = document.getElementById("city").value.trim().length;
    var inputStreet = document.getElementById("street").value.trim().length;
    var inputStreetNumber = document.getElementById("streetNumber").value.trim().length;

    if (checkFilledN() & checkFilledP() & checkFilledE() & checkFilledPwd() & checkFilledZ() & checkFilledC() & checkFilledS() & checkFilledSN()) {
        return true;
    } else {
        return false;
    }

    function checkFilledN() {
        if (inputName === 0) {
            document.getElementById("empty-name").style.display = "block";
            document.getElementById("empty-name").innerHTML = "A név mező kitöltése kötelező!";
            return false;
        } else {
            document.getElementById("empty-name").style.display = "none";
            return true;
        }
    }

    function checkFilledP() {
        if (inputPhone === 0) {
            document.getElementById("empty-phone").style.display = "block";
            document.getElementById("empty-phone").innerHTML = "A telefonszám mező kitöltése kötelező!";
            return false;
        } else {
            document.getElementById("empty-phone").style.display = "none";
            return true;
        }
    }

    function checkFilledE() {
        if (inputEmail === 0) {
            document.getElementById("empty-email").style.display = "block";
            document.getElementById("empty-email").innerHTML = "Az e-mail mező kitöltése kötelező!";
            return false;
        } else {
            document.getElementById("empty-email").style.display = "none";
            return true;
        }
    }

    function checkFilledPwd() {
        if (inputPwd === 0) {
            document.getElementById("empty-pwd").style.display = "block";
            document.getElementById("empty-pwd").innerHTML = "A jelszó mező kitöltése kötelező!";
            return false;
        } else {
            document.getElementById("empty-pwd").style.display = "none";
            return true;
        }
    }

    function checkFilledZ() {
        if (inputZip === 0) {
            document.getElementById("empty-zip").style.display = "block";
            document.getElementById("empty-zip").innerHTML = "Az irányítószám mező kitöltése kötelező!";
            return false;
        } else {
            document.getElementById("empty-zip").style.display = "none";
            return true;
        }
    }

    function checkFilledC() {
        if (inputCity === 0) {
            document.getElementById("empty-city").style.display = "block";
            document.getElementById("empty-city").innerHTML = "A település mező kitöltése kötelező!";
            return false;
        } else {
            document.getElementById("empty-city").style.display = "none";
            return true;
        }
    }

    function checkFilledS() {
        if (inputStreet === 0) {
            document.getElementById("empty-street").style.display = "block";
            document.getElementById("empty-street").innerHTML = "Az utca mező kitöltése kötelező!";
            return false;
        } else {
            document.getElementById("empty-street").style.display = "none";
            return true;
        }
    }

    function checkFilledSN() {
        if (inputStreetNumber === 0) {
            document.getElementById("empty-streetNumber").style.display = "block";
            document.getElementById("empty-streetNumber").innerHTML = "A házszám mező kitöltése kötelező!";
            return false;
        } else {
            document.getElementById("empty-streetNumber").style.display = "none";
            return true;
        }
    }

}

const audioContainer = document.getElementById("audioContainer"); 

function playMp3() { 
  audioContainer.play(); 
} 




