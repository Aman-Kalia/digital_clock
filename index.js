function digitalClock(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var amorpm = hours >=12 ? 'pm':'am';
    var special;
    if(hours<12){
        special="Good Morning";
    }
    else if(hours>12&&hours<16){
        special="Good Afternoon";
    }
    else{
        special="Good evening";
    }
    
    hours = (hours<10) ? "0" + hours : hours;
    minutes = (minutes<10) ? "0" + minutes : minutes;
    seconds = (seconds<10) ? "0" + seconds : seconds;
    document.getElementById("hours").innerHTML= hours;
    document.getElementById("minutes").innerHTML= minutes;
    document.getElementById("seconds").innerHTML= seconds;
    document.getElementById("amorpm").innerHTML= amorpm;
    document.getElementById("special").innerHTML=special;
    setTimeout(digitalClock,500)
}
digitalClock();