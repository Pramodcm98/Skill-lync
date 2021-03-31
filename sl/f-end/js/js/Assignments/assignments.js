function changethecolor(color) {
    document.getElementById("king").style.color = color;

}


function increment() {
    var num1 = document.getElementById("num1");
    num1.value = Number(document.getElementById("num1").value) + 1;
}


function decrement() {
    var num1 = document.getElementById("num1");
    if (num1.value > 0) {
        num1.value = Number(document.getElementById("num1").value) - 1;
    }
}


function calculate(op) {
    var num1 = document.getElementById("num1");
    if (op == 'increment') {
        num1.value = Number(document.getElementById("num1").value) + 1;
    } else {
        if (num1.value > 0) {
            num1.value = Number(document.getElementById("num1").value) - 1;

        }
    }
}


function calculatelength() {
    var value = document.getElementById("sai").value;
    document.getElementById("kiran").innerText = value.length;
}


function showHide() {
    var btn = document.getElementById('op_btn');
    var divElem = document.getElementById('op_div');
    if (btn.value == "hide") {
        btn.value = "show";
        divelem.style.display = "none";
    } else {
        btn.value = "hide";
        divElem.style.display = "block";
    }
}



function printNumbers(upper) {
    for (var i = 0; i <= upper; i++) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
}



function printchars(str) {
    for (var i = 0; i < str.length; i++) {
        console.log(str.charAt(i));
    }
}

function printElems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i] * arr[i]);
    }
}


function finding(x) {
    if (x % 2 == 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}


function getting(y) {
    if (y < 0) {
        console.log("positive")
    } else if (y == 0) {
        console.log("nonnegative")
    } else {
        console.log("negative")
    }
}



function evennumbers(upper, lower) {
    for (var i = lower; i < upper; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}




function arrsum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}



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


//Check whether the given number is palindrome
function plndrm(str) {
    var ispalindrome = true;
    for (var i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str.charAt(i) != str.charAt(j)) {
            ispalindrome = false;
            // break;
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
    var rem, temp;
    var final = 0;
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
        sum = sum + rem;
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



//Check whether the given number is a strong number// sum of factorial the numbers
function strng(n) {
    var reminder
    var sum = 0;

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


// Check whether the given number is an Armstrong number //sum of cubes of the number is same

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




// print multiplication table

function multiTable(number) {
    console.log("below is the multiplication table for " + number);
    for (var i = 1; i <= 10; i++) {

        const result = i * number;

        console.log(number, "*", i, "=", result);
    }

}

// fibonocci
function fibnci(number) {

    var n1 = 0;
    var n2 = 1;
    // var n3 = 1;
    var nextTerm;

    console.log('Fibonacci Series are as follows');
    var str = '';
    for (var i = 1; i <= number; i++) {
        //  console.log(n1);
        str += "<li>" + n2 + "</li>";
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    document.getElementById('fib').innerHTML = str;
}




//leap year between a given range//doubt


function leap_year_range(st_year, end_year) {
    var year_range = [];

}

//Find the maximum and minimum numbers of an array without sorting.

function maxmin(arr) {
    var max = arr[0], min = arr[0];

    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log("Maximum value is " + max + " and Minimum value is " + min);

}


//Write a JavaScript function to get the last element of an array.
function arrlst(arr) {
    var k = arr.length - 1;
    var lst = arr[k];
    console.log(lst);
}


// Passing a parameter 'n' will return the last 'n' elements of the array.

function arrlstn(arr, n) { ////2345    2
    var k = arr.length - n;
    for (var i = k; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

//leap year between given range
function lpyear(st, end) { // 2000, 2020
    var i;
    console.log("Leap years between " + st + " and " + end + " is below ");
    for (i = st; i <= end; i++) {
        if ((i % 4 == 0 && i % 100 != 0) || (i % 400 == 0)) {
            console.log(i);

        }
    }
}



//swapping of number
function Swap(num1, num2) {
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;
    console.log("after swapping : " + num1, num2);
}

//leap year between given range
function lpyear(st, end) { // 2000, 2020
    var i;
    console.log("Leap years between " + st + " and " + end + " is below ");
    for (i = st; i <= end; i++) {
        if ((i % 4 == 0 && i % 100 != 0) || (i % 400 == 0)) {
            console.log(i);

        }
    }
}

// function biggst(arr) {

// second lrgst number in array of anumbers
//count of each charector of a string
//happy number




//write a program to sum multiples of 3 and 5 under 1000// 1- 10


function multplsum(st, end) {
    var sum = 0;

    for (var x = st; x <= end; x++) {
        if (x % 3 === 0 || x % 5 === 0) {
            sum = sum + x;
        }
    }
    console.log("The sum of multiples of 3 and 5 is " + sum);

}

// second lrgst number in array of anumbers

function scndlrgst(arr) {
    lrgst = arr[0];
    var scndlargest = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > lrgst) {

            scndlargest = lrgst;
            lrgst = arr[i];
        }
        else if (arr[i] > scndlargest && arr[i] != lrgst) {
            scndlargest = arr[i];

        }
    }
    return scndlargest;
    console.log("The second largest in the array is " + scndlargest);
}



//count of each charector of a string
function count() {
    var string = "";

}


//FOR MEAN SEPERATELY
function mean(arr) {
    sum = 0;
    var mean;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        mean = sum / arr.length;
    }
    console.log(mean);

}

//FOR MEDIAN SEPERATELY
function median(arr) {
    n = arr.length
    var median, k;
    {
        k = parseInt(n / 2);//midddle
        if (n % 2 == 0) {
            median = parseInt(arr[k - 1] + arr[k]) / 2;
        }
        else {
            median = arr[k];
        }
    }
    console.log(median);
}



//MODE SEPERATELY
function printMode(arr) {
    var countObj = {};
    var maxCount = 0, mode;
    arr.forEach(function (val, index) {
        console.log("countObj before:", JSON.stringify(countObj));
        if (countObj[val]) {
            countObj[val]++;
        }
        else {
            countObj[val] = 1;
        }
        console.log("countObj after:", JSON.stringify(countObj));
        console.log("maxCount before:", maxCount)
        console.log("mode before:", mode)
        if (maxCount < countObj[val]) {
            maxCount = countObj[val];
            mode = val;
        }
        console.log("maxCount after:", maxCount)
        console.log("mode after:", mode)
    });
    console.log("countObj", countObj, "MaxCount", maxCount, "Mode", mode);
}




//MEAN, MEDIAN AND MODE TOGETHER

function meanmedianmode(arr) {
    sum = 0;
    var mean;
    var mode;
    n = arr.length;
    var median, k;
    var m = 3;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        mean = sum / arr.length;
    }
    console.log("mean = " + mean);////
    {
        k = parseInt(n / 2);//midddle
        if (n % 2 == 0) {
            median = parseInt(arr[k - 1] + arr[k]) / 2;
        }
        else {
            median = arr[k];
        }
    }
    console.log("median = " + median);
    mode = (m * (median - mean)) + mean; //relation b/w mean,median and mode
    console.log("mode = " + mode);

}


///////       OR

//MODE  //OTHER METHOD FOR MODE
function meanmedianmode11(arr) {
    sum = 0;
    var mean;
    var mode;
    n = arr.length;
    var median, k;
    var m = 3;
    var countObj = {};
    var maxCount = 0, mode;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        mean = sum / arr.length;
    }
    console.log("mean = " + mean);////
    {
        k = parseInt(n / 2);//midddle
        if (n % 2 == 0) {
            median = parseInt(arr[k - 1] + arr[k]) / 2;
        }
        else {
            median = arr[k];
        }
    }
    console.log("median = " + median);

    arr.forEach(function (val, index) {
        console.log("countObj before:", JSON.stringify(countObj));
        if (countObj[val]) {
            countObj[val]++;
        }
        else {
            countObj[val] = 1;
        }
        console.log("countObj after:", JSON.stringify(countObj));
        console.log("maxCount before:", maxCount)
        console.log("mode before:", mode)
        if (maxCount < countObj[val]) {
            maxCount = countObj[val];
            mode = val;
        }
        console.log("maxCount after:", maxCount)
        console.log("MODE AFTER==FINAL RESULT:", mode)////
    });
    console.log("countObj", countObj, "MaxCount", maxCount, "Mode", mode);
}







//swaping of strings

function swap(letters) {
    var newLetters = "";
    for (var i = 0; i < letters.length; i++) {
        if (letters[i] == letters[i].toLowerCase()) {
            newLetters += letters[i].toUpperCase();
        } else {
            newLetters += letters[i].toLowerCase();
        }
    }
    console.log("after swapping answer : " + newLetters);
    return newLetters;
}





//happy number

// //Control statement
// function myarray(arr) {
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] % 3 == 0) {
//             //  arr[i]="fizz";
//             console.log("fizz");

//             //    document.getElementById("array").innerHTML=arr[i];
//         }
//         else {
//             console.log(arr[i]);
//             //document.getElementById("array").innerHTML=arr[i];
//         }
//     }
//     //document.getElementById("fizz_id").innerHTML="fizz";
// }


function fzbz(st, end) {
    var array;
    for (i = st; i <= end; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("fizzbuzz");
        }
        else if (i % 3 == 0) {
            // arr[i] = "fizz";
            console.log("fizz");
        }
        else if (i % 5 == 0) {
            console.log("buzz");
        }
        else {
            console.log(i);
        }
    } //document.getElementById('array').innerHTML =

}

// fibonocci
function fibnci(number) {

    var n1 = 0;
    var n2 = 1;
    // var n3 = 1;
    var nextTerm;

    console.log('Fibonacci Series are as follows');
    var str = '';
    for (var i = 1; i <= number; i++) {
        //  console.log(n1);
        str += "<li>" + n2 + "</li>";
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    document.getElementById('fib').innerHTML = str;
}



//dashes b/w 2 even num

function dashes(num) {

    var str = String(num);
    var i;
    var newnum = "";
    for (i = 0; i <= str.length - 1; i++) {
        newnum += str.charAt(i)
        if (str.charAt(i) % 2 == 0 && str.charAt(i + 1) % 2 == 0 && i != str.length - 1) {
            newnum += "-";

            // console.log(str.charAt(i) + " -");
        }


        //     else {
        //         console.log(str.charAt(i));
        //     }
    } console.log(newnum);
}

//count of charector in a string
function charcount(string) {
    var obj = {};
    n = string.length;
    for (var i = 0; i < n; i++) {
        var ch = string.charAt(i);
        if (obj[ch]) {
            obj[ch]++;
        } else {
            obj[ch] = 1;
        }
    }
    return obj;
}

//most frquent item in array
function frqnt(arr) {
    var element = 0;
    var count = 0;
    for (var j = 0; j < arr.length; j++) {
        var tempElement = arr[j];
        var tempcount = 0;
        for (var p = 0; p < arr.length; p++) {
            if (arr[p] == tempElement) {
                tempcount++;
            }
            if (tempcount > count) {
                element = tempElement;
                count = tempElement;
            }
        }
        console.log(element);
    }

}
//MODE
// 
// 
// 
// 
// 
// 

//union of two arrays
//function union(x,y)
// 
// 
// 
// 
// 

//Qno 12 and 13

function Getrequest() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/users");//thing after ? is called as querry parameter in GET request
    xhttp.send();

    //callback
    xhttp.onreadystatechange = function () {
        console.log(this.status, this.readyState);
        if (this.readyState == 4 && this.status == 200) {   //200 is the response coming back
            console.log(this.responseText);
            var response = JSON.parse(this.responseText);
            console.log(response);
            //var data = response.data;
            var trStr = '';
            response.forEach(function (value, index) {
                console.log(index, value)
                trStr += "<tr>";
                trStr += "<td>" + value.id + "</td>";
                trStr += "<td>" + value.name + "</td>";
                trStr += "<td>" + value.username + "</td>";
                trStr += "<td>" + value.email + "</td>";
                trStr += "<td>" + value.address.suite + "" + value.address.street + "" + value.address.city + "" + value.address.zipcode + "</td>";


                trStr += "</tr>";
            })
            document.getElementById('ajax_tbody1').innerHTML = trStr;
        }
    }
}

function sendPostRequest() {
    var n1 = document.getElementById('n1').value;
    var j1 = document.getElementById('j1').value;
    var error = false;
    if (n1 == '') {
        error = true;
        document.getElementById('n1').style.border = "3px solid red";
    }
    else {
        document.getElementById('n1').style.border = "3px solid lightgrey";
    }
    if (j1 == '') {
        error = true;
        document.getElementById('j1').style.border = "3px solid red";
    } else {
        document.getElementById('j1').style.border = "3px solid lightgrey";
    }
    if (error) {
        return;
    }
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://jsonplaceholder.typicode.com/guide/");
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhttp.send("name=" + n1 + "&job" + j1);
    xhttp.onreadystatechange = function () {
        console.log(this.status, this.readyState);
        if (this.readyState == 4 && this.state == 201) {
            alert("Data added successfully");
        }
    }
    //console.log();
}


//dashes b/w 2 even num

function dashes(num) {

    var str = String(num);
    var i;
    var newnum = "";
    for (i = 0; i <= str.length - 1; i++) {
        newnum += str.charAt(i)
        if (str.charAt(i) % 2 == 0 && str.charAt(i + 1) % 2 == 0 && i != str.length - 1) {
            newnum += "-";

            // console.log(str.charAt(i) + " -");
        }


        //     else {
        //         console.log(str.charAt(i));
        //     }
    } console.log(newnum);
}



//nesting of arrays
function nstarray(arr1, arr2, arr3) {

    console.log("raw:0");
    for (var i = 0; i < arr1.length; i++) {

        if (arrnum = arr1) {
            console.log(arr1[i]);
        }
    }
    console.log("raw:1");

    for (var i = 0; i < arr2.length; i++) {

        if (arrnum = arr1) {
            console.log(arr3[i]);
        }
    }
    console.log("raw:2");
    for (var i = 0; i < arr3.length; i++) {

        if (arrnum = arr1) {
            console.log(arr3[i]);
        }
    }
}

//CHECKING VOWEL
function isVowel(char) {
    if (char.length == 1) {
        var vowels = new Array("a", "e", "i", "o", "u");
        var isVowel = false;

        for (e in vowels) {
            if (vowels[e] == char) {
                isVowel = true;
            }
        }

        console.log(isVowel);
    }
}


//08/03/2021


function Jsfunction() {

    document.getElementById('newid').innerHTML = 'Starting javascript';

    //document.write(5 + 6);

    //window.print;


}

//removing falsy value from array

function MyArray(arr) {  //my method
    var arr2 = [];

    for (var i = 0; i < arr.length; i++) {
        !!arr[i] ? arr2.push(arr[i]) : arr2;
    }
    console.log(arr2);
}



//10/03/2021


//AJAX QUESTION FROM TEST

function getRequest() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://run.mocky.io/v3/d0e0d19a-4b75-48d1-97aa-71b2d2bf5501");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        console.log(this.status, this.readyState);
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var response = JSON.parse(this.responseText);
            console.log(response);
            var trStr = " ";
            var data = response.users;
            data.forEach(function (value, index) {
                console.log(index, value);
                trStr += "<tr>";
                trStr += "<td>" + value.name + "</td>";
                trStr += "<td>" + value.age + "</td>";
                trStr += "<td>" + value.qualification + "</td>";
                trStr += "<td>" + value.hobbies + "</td>";
                //trStr +=value.address ? "<td>" + value.address['door no'] + " " + value.address['street']+ " " + value.address['city'] + "</td>": ''; //USED TERNARY(?) OPERATOR USED BECAUSE SOME ITEMS DONT HAVE ADDRESS
                trStr += "<td>";
                if (value.address) {
                    if (value.address['door no']) {
                        trStr += value.address['door no'] + "";
                    }
                    if (value.address.street) {
                        trStr += value.address.street + "";
                    }
                    if (value.address.city) {
                        trStr += value.address.city;
                    }
                }
                trStr += "</td>";
                trStr += "</tr>";
            })
            document.getElementById('ajax').innerHTML = trStr;
        }
    }
}




//human readable form

function humnrdbl(num) {
    var x = parseInt(num % 10);
    var y = parseInt(num % 100);
    if (x == 1 && y !== 11) {
        console.log(num + "st");
    }
    else if (x == 3 && y !== 13) {
        console.log(num + "rd");
    }
    else if (x == 2 && y !== 12) {
        console.log(num + "nd");
    }
    else {
        console.log(num + "th");
    }
}





//COUNTRY AND STATES
document.onreadystatechange = function () {
    console.log(this.readyState);
    if (this.readyState === "complete") {
        populateCountry();
    }
}
var countries = {

    "US": ["NY", "NJ"],
    "CA": ["Montreal", "BC"],
    "IN": ["ND", "TN"]
}

function populateCountry() {
    var str = '<option value= " " >Select country</option>';
    for (var key in countries) {
        str += "<option value =" + key + " > " + key + "</option>";
    }
    document.getElementById('country').innerHTML = str;
}
function populateState(country) {
    var states = countries[country] || [];
    var str = '<option value = " " > Select state </option>';
    states.forEach(function (val, index) {
        str += "<option value='" + val + "'>" + val + "</option>";
    });
    document.getElementById('state').innerHTML = str;
}









//REMOVE DUPLICATE FROM AN ARRAY
// [1,2,5,2]

function dupli(arr1, arr2) {

    var newarr = arr1.concat(arr2);
    console.log(newarr);
    var x;
    var myarr = [];
    for (i = 0; i < newarr.length - 1; i++) {
        for (j = i + 1; j < newarr.length - 1; j++) {
            if (newarr[i] != newarr[j]) {
                x = newarr[i];
                //myarr=
                //newarr.splice(newarr[i],1);
                //newarr=arr;
            }
            myarr = newarr.push(x);
        }
        console.log(myarr);
    }


}


//remove specific element from an array
function rmvspfc(arr, char) {
    for (var i = 0; i < arr.length; i++) {
        if (char == arr[i]) {
            arr.splice(i, 1);
            //console.log(arr);
        }
    }
    console.log(arr);
}


//Remove duplicate items from an array (ignore case sensitivity).
function removdupli(arr) {
    var newArray = [];
    var newObj = {};
    arr.forEach(function (val, index) {
        if (!(val in newObj))//checking weather val is already present in the object,go inside add only if not present in it
        {
            newArray.push(val);
            newObj[val] = true;
        }
    });
    console.log(newArray);

}

//////////OR

//Remove duplicate items from an array (ignore case sensitivity).
function removdupli111(arr) {
    var newArray = arr.filter(function (val, index) {
        var indexOfElem = arr.indexOf(val);
        return indexOfElem == index;
    });
    console.log(newArray);
}



// Compute the union of two arrays
// Sample Data :
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]
//unionof2Array([1, 2, 3], [100, 2, 1, 10]) 

function unionof2Array(arr1, arr2) {
    var cnctArr = arr1.concat(arr2);
    console.log(cnctArr);
    var unionArr = [];
    var newObj = {};
    cnctArr.forEach(function (val, index) {
        if (!(val in newObj))//checking weather val is already present in the object,go inside add only if not present in it
        {
            unionArr.push(val);
            newObj[val] = true;
        }
    });
    console.log(unionArr);
}


//other--teachers method
//unionofArray([1, 2, 3], [100, 2, 1, 10])
function unionofArray(arr1, arr2) {
    var outputArr = arr1.slice();
    for (var i = 0; i < arr2.length; i++) {
        if (!outputArr.includes(arr2[i])) {
            outputArr.push(arr2[i]);
        }
    }
    console.log(outputArr);
}



// Find the symmetric difference of two arrays
// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]
// function unionof2Array(arr1, arr2) {
//     var cnctArr = arr1.concat(arr2);
//     console.log(cnctArr);
//     var unionArr = [];
//     var newObj = {};
//     cnctArr.forEach(function (val, index) {
//         if (!(val in newObj))//checking weather val is already present in the object,go inside add only if not present in it
//         {
//             unionArr.push(val);
//             newObj[val] = true;
//         }
//     });
//     console.log(unionArr);
// }



// //arr([1, 2, 3], [2, 1, 10])
// function arr(arr1, arr2) {
//     for (i = 0, j = 0; i < arr1.length, j < arr2, length; i++, j++) {
//         if (arr1[i] == arr2[j]) 
//         {
//             console.log("repeating");
//         }
//         else
//         {
//             console.log("not repeating");
//         }
//     }
// }

//Compute the union of two arrays



//SYMMETRIC ARRAY
//symmetricDiffOfArrays([1, 2, 3], [2, 1, 10])
function symmetricDiffOfArrays(arr1, arr2) {
    var outputArr = [];
    for (var i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            outputArr.push(arr1[i]);
        }
    }
    for (var i = 0; i < arr2.length; i++) {
        if (!arr1.includes(arr2[i])) {
            outputArr.push(arr2[i]);
        }
    }
    console.log(outputArr);
}



//INTERSECTION OF 2 ARRAY
function intersectionOfArrays(arr1, arr2) {
    var outputArr = [];
    for (var i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            outputArr.push(arr1[i]);
        }
    }
    console.log(outputArr);
}


//SUM OF ELEMENTS OF 2 ARRAYS

function sumof2arry(arr1, arr2) {
    var sumArray;
    var i;
    sumArray = [];
    bigarray = (arr1.length > arr2.length) ? arr1 : arr2;
    for (i = 0; i < bigarray.length; i++) {
        if (arr1[i] == undefined) {
            arr1[i] = 0;
        }
        if (arr2[i] == undefined) {
            arr2[i] = 0;
        }
        sumArray[i] = arr1[i] + arr2[i];


    }
    console.log(sumArray);
}

//Capitalize the first letter of each word in a string
//india is my country  ==> India Is My Country

function captlString(myStr) {
    //var myStr="india is my country ";
    var stnce = myStr.toLowerCase();
    var newStrng = "";

    for (var i = 0; i < stnce.length; i++) {
        if (i == 0) {
            newStrng += stnce.charAt(i).toUpperCase();
        }
        else if (stnce.charAt(i) == " ") {
            newStrng += " " + stnce.charAt(i + 1).toUpperCase();
            i++;
        }
        else {
            newStrng += stnce.charAt(i).toLowerCase();
        }

    }

    console.log("camalin string : " + newStrng);
}


//
//Sort the elements of an array without using in-built function
//arr=[1,3,2,5,4]
function sortarr(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
}







