//cancatination

var structure = "hello world";
structure += "good morning";//  += --> same as structure = structure + "good morning"
console.log(structure + "!");

//math operators
console.log(3 / 0);

//equality
// var x = "", y = 4;
// if (x == y) {
//     console.log("x and y is same");
// }
// else{
//     console.log("X AND Y ARE NOT EQUAL")
// }

//strict equality
var x = "4", y = 4;//different types
if (x === y) {  //
    console.log("x and y is same");
}
else {
    console.log("X AND Y ARE NOT EQUAL") //here both are of not same type so else will be printed
}

//for loop  
var sum = 0;
for (var i = 0; i <= 10; i++) {
    console.log(i);
    sum = sum + i;
}
console.log("sum of 0 to 10 is:" + sum); // +sum is given for printing result


//defaultvalues

// //alert box
// alert(15)

//Learning object declaration 
var person = {
    name:"appu",
    age:22
};
//dot notation instant editing of object propreties
person.age=23;
console.log(person);
