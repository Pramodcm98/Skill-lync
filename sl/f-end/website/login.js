function validate() 
{
    var username = document.forms["myform"]["emailId"].value;
    var password = document.forms["myform"]["password"].value;
    if (username == "pramodcm98@gmail.com" && password == "pramod")
    {
        window.location.href = "https://www.traveltours.in/about_us/";
    }
    else if(username == "common@gmail.com" && password == "common")
    {
        window.location.href = "https://skill-lync.com/careers/jobs/technical-support-engineer-eee/apply";
    }
    else
    {
        alert("Wrong user name or password..");
    }
}