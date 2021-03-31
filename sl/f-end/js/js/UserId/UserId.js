var payment = {
    premium: 5,
    enterprise: 10,
    platinum: 20
}

function showHidePaymentDiv(type) {     //for not showing payment calcu box for free button
    var paymentDiv = document.getElementById("payment_div");
    if (type == "free") {
        paymentDiv.style.display = "none";

    } else {
        paymentDiv.style.display = "block";
        document.getElementById("cost").innerText = payment[type];
        calculateTotal();
    }
}

function calculateTotal() {      //payment calculation happening
    var val = document.getElementById("text_val").value;
    var cost = document.getElementById("cost").innerText;
    document.getElementById("total").innerText = val * cost;


}
function vowelCount(str) {
    var count = 0;
    var obj = {};
    for (var i = 0; i < str.length; i++) {
        var ch = str.charAt(i);
        if ("aeiouAEIOU".includes(ch) && !obj[ch]) {
            obj[ch] = true;
            count++;
        }
    }
    return count;
}

function generateOptions() {
    var fname = document.getElementById('fname').value;
    var mname = document.getElementById('mname').value;
    var lname = document.getElementById('lname').value;

    var suggestion1 = fname.slice(0, 2) + mname.slice(0, 2) + lname.slice(0, 2) + fname.length + mname.length + lname.length;
    var suggestion2 = fname.slice(0, 3) + lname.slice(0, 3) + fname.length + mname.length + lname.length;

    var fvowel = vowelCount(fname);
    var mvowel = vowelCount(mname);
    var lvowel = vowelCount(lname);
    var suggestion3 = fname.slice(-3) + lname.slice(-3) + fvowel + mvowel + lvowel;

    var rand = Math.random();
    var alphas = "abcdefghijklmnopqrstuvwxyz";
    var alphaIndex = parseInt(rand * 26);
    var randomAlphabet = alphas[alphaIndex];

    var threedgtNum = parseInt(rand * 1000);
    if (threedgtNum < 10) {
        threedgtNum = "00" + threedgtNum;
    }
    else if (threedgtNum < 100) {
        threedgtNum = "0" + threedgtNum;

    }
    var suggestion4 = fname.slice(-3) + lname.slice(-3) + randomAlphabet + threedgtNum;

    var suggestions = "<li onclick='setValueToTextbox(this.innerText)'>" + suggestion1.toLowerCase() + "</li>";
    suggestions += "<li onclick='setValueToTextbox(this.innerText)'>" + suggestion2.toLowerCase() + "</li>";
    suggestions += "<li onclick='setValueToTextbox(this.innerText)'>" + suggestion3.toLowerCase() + "</li>";
    suggestions += "<li onclick='setValueToTextbox(this.innerText)'>" + suggestion4.toLowerCase() + "</li>";
    document.getElementById('ul_id').innerHTML = suggestions;
}

function setValueToTextbox(text) {
    document.getElementById('uname').value = text;
}






