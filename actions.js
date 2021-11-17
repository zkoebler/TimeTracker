var isOn = false;
function pressed()
{
    var repeater;
    var T;
    var currentTime = Date.now()
    function stopwatch()
    {
        T = Date.now()
        var miliTime = T-currentTime;

        var secs = Math.floor(miliTime/1000) % 60;
        var mins = Math.floor(miliTime/60000) % 60;
        var hrs = Math.floor(miliTime/(1000*60*60)) % 24;
        if(secs >= 10)
        {
            document.getElementById('sec').innerHTML = secs;
        }
        else{
            document.getElementById('sec').innerHTML = "0" + secs;
        }
        if(mins >= 10)
        {
            document.getElementById('m').innerHTML = mins;
        }
        else{
            document.getElementById('m').innerHTML = "0" + mins;
        }
        if(hrs >= 10)
        {
            document.getElementById('h').innerHTML = hrs;
        }
        else{
            document.getElementById('h').innerHTML = "0" + hrs;
        }

        if(isOn)
        {
            repeater = setTimeout(stopwatch,500);
        }
        else{
            document.getElementById('h').innerHTML = "00";
            document.getElementById('sec').innerHTML = "00";
            document.getElementById('m').innerHTML = "00";
            return {T,currentTime};
        }
    }
    return stopwatch();
}

var timeState = null;
let btn = document.getElementById("btn");



btn.onclick = async function(){
    btn.style.transform = "rotateY(360deg)";
    if(isOn == false)
    {
        isOn = true;
        timeState = await pressed();
        btn.style.background = "red";
        btn.innerHTML = "Stop";
        
    }
    else{
        isOn = false;
        btn.style.background = "green";
        btn.innerHTML = "Start";
        btn.style.transform = "rotateY(0deg)";
    }
}
