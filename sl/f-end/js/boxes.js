function changeH1Content() {
    var content = prompt("Input your content here");
    document.getElementById("h1_id").innerText = content;
    document.getElementById("h2_id").value = content;

    var color = prompt("give a good color");
    document.getElementById("h1_id").style.color = color;
}
//this is for changing colors
function ChangeColor(color) {

    document.getElementById("h1_id").style.color = color;
    document.getElementById("h2_id").style.color = color;

}
//this is for  + & -
function increment() {
    document.getElementById("num1").value = Number(document.getElementById("num1").value) + 1;

}
//this is for giving condition
function decrement() {
    if (num1.value > 0) {
        num1.value = Number(num1.value) - 1;

        document.getElementById("num1").value = Number(document.getElementById("num1").value) - 1;
    }
}

//this is for giving both in same one
function calculate(calcu) {
    var num1 = document.getElementById("num1");
    if (calcu == 'increment') {
        num1.value = Number(num1.value) + 1;
    }
    else {
        if (num1.value > 0) {
            num1.value = Number(num1.value) - 1;


        } S
    }
}

//function calculate_length() {
//    var value = document.getElementById('newid').value;
//    document.getElementById('myid').innerText = content;
//}

//
function showHide() {
    var btn = document.getElementById('btn');
    var divElem = document.getElementById('op_div');
    if (btn.value == "hide") {
        btn.value = "show"
        divElem.style.display = "none";
    }
    else {
        btn.value = "hide";
        divElem.style.display = "block";
    }
}
//print from1 to an upper value
function printNumber(upper) {
    for (var i = 1; i <= upper; i++) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
}


//to print 
function printChars(str) {
    for (var i = 0; i < str.length; i++) {
        console.log(str.charAr(i));//(charActor at index)
    }
}

function printElems(arr) {
    for (var i = o; i < arr.length; i++) {
        console.log(arr[i] * arr[i]);
    }
}


//ODD OR EVEN
function printOddEven(number) {

    if (number % 2 == 0) {
        console.log("The number is even.");
    }
    else {
        console.log("The number is odd.");
    }
}


//POSITIVE OR NEGATIVE
function printPosNeg(number) {

    if (number > 0) {
        console.log("The number is positive.");
    }
    else if (number == 0) {
        console.log("The number is neutral.");
    }
    else {
        console.log("The number is negative.");
    }

}

//Even and odd number from upper and lower limits
//even
function printUpperLower(lower, upper) {
    for (var i = lower; i < upper; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }

    }

}
//print sum of numbers in an array
function arraysum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];   //OR sum=sum+arr[i];
    }
    console.log(sum);

}


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


//Factorial
function dofact(number) {
    var fact = 1;

    for (var i = 2; i <= number; i++) {
        fact = fact * i;
    }
    console.log(fact);
}

//perfect number checking

function prfct(number) {
    var sum = 1;
    for (var i = 2; i < number; i++) {
        if (number % i == 0) {
            sum = sum + i;
        }
    }
    if (sum == number) {
        console.log("perfect_Number");
    } else {
        console.log("not_a_perfect_number");
    }
    console.log(sum);
}

//Checking for Prime number
function prime(number) {
    var number;
    for (var i = 2; i < number; i++) {
        if (number % i != 0);

    }
    console.log(i);
}
//................................................................................//12/02/2021