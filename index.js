var isStop = true;
var s = 0;
var min = 0;
var hr = 0;
var lapCounter = 1;

function start() {
    if (isStop) {
        isStop = false;
        timer();
    }
}

function timer() {
    if (!isStop) {
        s = parseInt(s);
        min = parseInt(min);
        hr = parseInt(hr);
        s++;
        if (s == 60) {
            s = 0;
            min++;
        }
        if (min == 60) {
            min = 0;
            hr++;
        }

        let displayS = s < 10 ? "0" + s : s;
        let displayM = min < 10 ? "0" + min : min;
        let displayH = hr < 10 ? "0" + hr : hr;

        stopwatch.innerHTML = displayH + " : " + displayM + " : " + displayS;
        setTimeout(timer, 1000);
    }
}

function stop() {
    isStop = true;
}

function reset() {
    isStop = true;
    s = 0;
    min = 0;
    hr = 0;
    stopwatch.innerHTML = "00 : 00 : 00";
    document.getElementById("laps").innerHTML = "";
    lapCounter = 1;
}

function recordLap() {
    if (!isStop) {
        var lapTime = stopwatch.innerHTML;
        var lapItem = document.createElement("li");
        lapItem.textContent = "Lap " + lapCounter + ": " + lapTime;
        document.getElementById("laps").appendChild(lapItem);
        lapCounter++;
    }
}
