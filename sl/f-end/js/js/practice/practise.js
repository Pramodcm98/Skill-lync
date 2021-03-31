

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






//MODE
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



//INTERSECTION
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

function captlString(myStr)
  {
    //var myStr="india is my country ";
    var stnce = myStr.toLowerCase();
    var newStrng = "";
    
    for (var i = 0; i < stnce.length; i++) 
    {
        if(i == 0)
        {
        newStrng += stnce.charAt(i).toUpperCase();
        }
        else if (stnce.charAt(i) == " ") {
            newStrng += " " + stnce.charAt(i+1).toUpperCase();
            i++;
        }
        else
        {
          newStrng += stnce.charAt(i).toLowerCase();
        }
       
      }
 
   console.log("camalin string : " + newStrng);
}






