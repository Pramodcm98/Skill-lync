var timer = 0, x;
function startTimer() {
    var btn = document.getElementById('timer_btn');
    if (btn.value === 'Start') {
        btn.value = "Stop";
        btn.style.background = "red";
        x = setInterval(runTimer, 1000);
    } else {
        clearInterval(x);
        btn.value = "Start";
        btn.style.background = "green";
        timer = 0;



        
    }
}
function runTimer () {
    timer++;
    document.getElementById('timer').innerText = timer;
    if (timer === 10) {
        clearInterval(x);
        var btn = document.getElementById('timer_btn');
        btn.value = "Start";
        btn.style.background = "green";
    }
}