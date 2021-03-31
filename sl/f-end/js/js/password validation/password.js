
//checking the password conditions
function validatePassword(password) {
    var passObj = {};
    if (password.length >= 8 && password.length <= 15) {
        passObj.lenCon = true;
    }
    var spcl = "!@#$%*+_-=";
    for (var i = 0; i < password.length; i++) {
        var ch = password.charAt(i);
        if (ch >= "A" && ch <= "Z") {
            passObj.charCon = true;
            passObj.upperCon = true;

        }
        else if (ch >= "a" && ch <= "z") {
            passObj.charCon = true;
            passObj.lowerCon = true;
        }
        else if (ch >= "0" && ch <= "9") {
            passObj.numCon = true;
        }
        else if (spcl.includes(ch)) {
            passObj.spclCon = true;
        }
    }
    console.log(passObj);
    var count = 0;
    for (var key in passObj) {
        console.log(key);
        count++;
    }
    console.log(count);
    var passElem = document.getElementById('passStr');
    if (count == 6) {
        passElem.innerText = "Strong";
        passElem.style.color = "green";
    }
    else if (count == 5 || count == 4) {
        passElem.innerText = "Medium";
        passElem.style.color = "orange";
    }
    else {
        passElem.innerText = "Weak";
        passElem.style.color = "red";
    }
}















