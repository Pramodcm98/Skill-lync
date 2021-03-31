function MyBrowsers() {
    var arr = [];
    var obj = {};
    var i = 0;
    var b1 = prompt("Enter browser1");
    if (b1 != '') {
        arr[i] = b1;
        i = i + 1;
        obj[b1] = b1.length;
    }
    var b2 = prompt("enter browser2");
    if (b2 != '') {
        arr[i] = b2;
        i = i + 1;
        obj[b2] = b2.length;
    }
    var b3 = prompt("enter browser3");
    if (b3 != '') {
        arr[i] = b3;
        obj[b3] = b3.length;
    }
    console.log(arr);
    console.log(obj);

}

