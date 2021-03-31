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


        }
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
        console.log(str.charAt(i));//(charActor at index)
    }
}

function printElems(arr) {
    for (var i = 0; i < arr.length; i++) {
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
    console.log(su0m);
}

//Checking for Prime number

function prime(number) {
    var prime = true;

    if (number === 1) {
        console.log("1 is not a prime number.");
    }


    else if (number > 1) {
        for (var i = 2; i < number; i++) {
            if (number % i == 0) {
                prime = false;
                break;
            }
        }
    }
    if (prime) {
        console.log('This is a prime number');
    }
    else {
        console.log('This is not a prime number');
    }
}

//................................................................................//12/02/2021

//calculating Greatest Common Diviser(GCD)

// function fndGcd(n1, n2) {
//     var n1, n2;                                         //dont have to declare n1,n2 two times
//     var gcd = 0;                                        //gcd shouldnt be 0,starts with 1
//     if (n1 - n2 < 0) {                                  //can use (var min = n1 > n2 ? n2 : n1;)
//         var min = n1;                                   //
//     }                                                   //
//         else{                                           //
//              min = n2;                                  //..
//         }                                               //can use (var min = n1 > n2 ? n2 : n1;)
//     console.log(min);                                   //have to display min value and then the value
//     for (var i = 2; i <= min; i++) {             
//         if (n1 % i == 0 && n2 % i == 0) {
//             gcd = i;
//         }
//     } 
// console.log(gcd);                                        //have to display gcd value and then the value
// } 

//CORRECT GCD CODE EDITED
function fndGcd(n1, n2) {
    var gcd = 1;
    var min = n1 > n2 ? n2 : n1;                           //Ternary operator for checking condition
    console.log("min", min);
    for (var i = 2; i <= min; i++) {
        if (n1 % i == 0 && n2 % i == 0) {
            gcd = i;
        }
    }
    console.log("gcd", gcd);
}



//string palindrome checking
function plndrm(str) {
    var ispalindrome = true;
    for (var i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str.charAt(i) != str.charAt(j)) {
            ispalindrome = false;
            break;
        }
    }
    if (ispalindrome) {
        console.log("It is a palindrome word");
    }
    else {
        console.log("It is not a palindrome  word");
    }
}



//number palindrome

function Palindrome(number) {
    var rem, temp, final = 0;


    temp = number;
    while (number > 0) {
        rem = number % 10;
        number = parseInt(number / 10);
        final = final * 10 + rem;
    }
    if (final == temp) {
        console.log("The inputed number is Palindrome");
    }
    else {
        console.log("The inputted number is not palindrome");
    }
}


//sum of digits in a number
function dgtSum(num) {
    var sum = 0;
    while (num > 0) {
        var rem = num % 10;
        var sum = sum + rem;
        num = parseInt(num / 10);
    }
    console.log(sum);
}



//count of Digits of a number
function countdgts(num) {
    const digits = (num, count = 0) => {
        if (num) {
            return digits(Math.floor(num / 10), ++count);
        };
        return count;
    };
    console.log("Count of digits are " + digits(num));
}






function arrayOptions() {
    var arr = [10, 11, 30, 22, 45, 2, 100];

    arr.forEach(function (val, index) {
        console.log(val, index);
    });

    var mapArr = arr.map(function (val, index) {
        return val * val;
    });
    console.log(mapArr);

    var fil = arr.filter(function (val, index) {
        return val % 2 != 0;
    });
    console.log(fil);

    var fin = arr.find(function (val, index) {
        return val % 2 != 0;
    });
    console.log(fin);

    var finI = arr.findIndex(function (val, index) {
        return val % 2 != 0;
    });
    console.log(finI);

    var ev = arr.every(function (val, index) {
        return val % 2 != 0;
    });
    console.log(ev);

    var som = arr.some(function (val, index) {
        return val % 2 != 0;
    });
    console.log(som);


    var red = arr.reduce(function (prevVal, curVal, index) {
        console.log(preval + index);
        return prevVal + curVal;

    });
    console.log(red);
}





//string palindrome checking
function plndrm(str) {
    var ispalindrome = true;
    for (var i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str.charAt(i) != str.charAt(j)) {
            ispalindrome = false;
            break;
        }
    }
    if (ispalindrome) {
        console.log("It is a palindrome word");
    }
    else {
        console.log("It is not a palindrome  word");
    }
}


function handleException() {
    var inputArray = [
        100, -100, 0, Infinity, -Infinity, NaN,
        true, false,
        undefined, null,
        "this is correct", "this is error",
        "A", "@", "a",
        { success: "true" }, { error: "true" },
        [1, 2, 3, 4], [1, 2, 3, 4, 5]
    ];
    inputArray.forEach(function (val, index) {
        try {
            if (typeof val === "number") {//checking whether it is number type or not
                if (val <= 0) {
                    throw "Encountered negative number or 0 at index" + index;
                }
                if (isNaN(val)) {
                    throw "Encountered NaN at index" + index;
                }
            }
            else if (typeof val === "boolean") {  //if only once we want it to be checked,or it will go and check again and again
                if (val == false) {
                    throw "Encountered false value at index " + index;
                }
            }
            else if (typeof val === "undefined") {
                throw "Encountered undefined value at index " + index;
            }
            else if (typeof val === "string") {
                if (val.length == 1) {
                    if (val < "A" || val > "Z") {
                        throw "Encountered lowercase or spcl char at index " + index;
                    }
                    else {
                        if (val.includes("error")) {
                            throw "Encountered error string at index " + index;
                        }
                    }
                    throw "Encountered character at index " + index;
                }
                else {
                    throw "Encountered string at index " + index;
                }

            }
            else if (typeof val === "object") {
                if (val instanceof Array) {
                    if (val.length < 5) {
                        throw "Encountered array less than 5 at index " + index;
                    }
                }
                else if (val instanceof Object) {
                    if ('error' in val) {
                        throw "Encountered object with key error at index " + index;
                    }
                }
                else {
                    throw "Encountered nul at index " + index;
                }
            }

        }
        catch (ex) {
            console.log("Exception:", index, ex);
        } finally {
            console.log("Finally", index);
        }
    })
}





//strong number checking
function strng(n) {
    var reminder, sum = 0;

    var tmp = n;

    while (n != 0) {
        reminder = n % 10;
        sum = sum + factorial(reminder);
        n = parseInt(n / 10);
    }
    if (sum == tmp)
        console.log(tmp + " is a strong number");
    else
        console.log(tmp + " is not a strong number");


    function factorial(n) {
        var fact = 1;

        for (var i = 2; i <= n; i++)
            fact = fact * i;

        return fact;
    }
}


// Armstrong number checking

function Amstrng(number) {


    var sum = 0;

    var temp = number;
    while (temp > 0) {

        var rem = temp % 10;

        sum += rem * rem * rem;


        temp = parseInt(temp / 10);
    }
    if (sum == number) {
        console.log(number + " is an Armstrong number");
    }
    else {
        console.log(number + " is not an Armstrong number.");
    }
}



// multiplication table

function multiTable(number) {

    for (let i = 1; i <= 10; i++) {

        const result = i * number;

        console.log(`${number} * ${i} = ${result}`);
    }

}

//fibonocci series


function fibnci(number) {

    var n1 = 0, n2 = 1;
    var nextTerm;

    console.log('Fibonacci Series:');

    for (var i = 1; i <= number; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}


//leap year between a given range


function leap_year_range(st_year, end_year) {
    var year_range = [];
    for (var i = st_year; i <= end_year; i++) {
        year_range.push(i);
    }
    var new_array = [];

    year_range.forEach(
        function (year) {
            if (test_LeapYear(year))
                new_array.push(year);
        });

    return new_array;
}

function test_LeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

//sum of 2 numbers
function sum(n1,n2)
{
   var sum;
    return sum=n1+n2;
}

//sum of n numbers

function sumofn(limit)
{
    var sum = 0;
    for (var i = 0; i<= limit; i++)
    {
        sum += i;
    }
    return sum;
}








//min and max of array





// last element of an array. 

function last_Item() {
    goods = ["iPhone", "Samsung", "Asus", "lenovo", "intex", "micromax"];

    var lastItem = goods[goods.length - 1];

    console.log("Last item in the array is " + lastItem);
}

//sum of digits of numbers
function sumofdigits(num)  22

var sum =0;

for()
{
    rem = num%10;
    sum= sum + rem;
    


}







