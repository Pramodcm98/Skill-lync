function printBill() {
    var booksArr = [
        { name: "B1", q: 20 },
        { name: "B2", q: 15 },
        { name: "B3", q: 43 },
        { name: "B4", q: 11 },

    ];
    var booksObj = {
        "B1": 450,
        "B2": 235,
        "B3": 110,
        "B4": 145
    }
    var trStr = '';
    var total = 0;
    booksArr.forEach(function (value, index) {
        var price = booksObj[value.name];
        var amount = price * value.q;
        total += amount; //total of the purchase
        trStr += '<tr>';     //for raw by raw feeding
        trStr += '<td>' + (index + 1) + '</td>';
        trStr += '<td>' + value.name + '</td>';
        trStr += '<td>' + price + '</td>';
        trStr += '<td>' + value.q + '</td>';
        trStr += '<td>' + amount + '</td>';
        trStr += '</tr>';

        //for total of all the order
    });
        trStr += "<tr>";
        trStr += "<td></td>";
        trStr += "<td></td>";
        trStr += "<td></td>";
        trStr += "<td>Total</td>";
        trStr += "<td>" + total + "</td>";
        trStr += "</tr>";

   
    document.getElementById('bill_tbody').innerHTML = trStr;
}
document.onreadystatechange = function () {
    console.log(this.readyState);
    if (this.readyState === 'complete') {
        printBill();
    }
}

//second lrgst number in array of anumbers
//count of each charector of a string
//happy number