var milliseconds = 00;
var seconds = 00;
var minutes = 00;

var displaymilliseconds = document.getElementById("milliseconds");
var displayseconds = document.getElementById("seconds");
var displayminutes = document.getElementById("minutes"); 

var interval; 
var status = stopped; 


function setTime(){

    milliseconds++;
    displaymilliseconds.innerHTML = milliseconds;

   if(milliseconds >= 100){
       seconds++;
       displayseconds.innerHTML = seconds; 
       milliseconds = 00;      
   }
   else if(seconds >= 60){
       minutes++;
       displayminutes.innerHTML = minutes;
       seconds = 00;
   }
}

interval = setInterval(setTime, 10);

function startStop(){
    if(status === "stopped"){
        interval = setInterval(setTime, 10);        
        document.getElementById('startStop').innerHTML = "Stop";
        status = "started";
    }
    else{
        clearInterval(interval)
        document.getElementById('startStop').innerHTML = "Start";
        status = "stopped";
    }
}

function reset(){
    milliseconds = 00;
    seconds = 00;
    minutes = 00;
    displaymilliseconds.innerHTML = milliseconds;
    displayseconds.innerHTML = seconds; 
    displayminutes.innerHTML = minutes;
    clearInterval(interval)
    document.getElementById('startStop').innerHTML = "Start";
}