function sendGetRequest() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://reqres.in/api/users?page=2&per_page=5");//thing after ? is called as querry parameter in GET request
    xhttp.send();

    //callback
    xhttp.onreadystatechange = function () {
        console.log(this.status, this.readyState);
        if (this.readyState == 4 && this.status == 200) {   //200 is the response coming back
            console.log(this.responseText);
            var response = JSON.parse(this.responseText);
            console.log(response);
            var data = response.data;
            var trStr = '';
            data.forEach(function (value, index) {
                console.log(index, value)
                trStr += "<tr>";
                trStr += "<td>" + value.id + "</td>";
                trStr += "<td>" + value.email + "</td>";
                trStr += "<td>" + value.first_name + "" + value.last_name + "</td>";
                trStr += "<td><img src='" + value.avatar + "'/></td>";
                trStr += "</tr>";
            })
            document.getElementById('ajax_tbody').innerHTML = trStr;
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
    xhttp.open("POST", "https://reqres.in/api/users");
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

