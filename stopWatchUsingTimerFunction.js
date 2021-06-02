
let StartStop= document.getElementById("startStop");
let reset=document.getElementById("Reset");
let para=document.getElementById("StopwatchData");
let hours=document.getElementById("hrs");
let minutes=document.getElementById("min");
let seconds=document.getElementById("sec");
let mseconds=document.getElementById("msec");
class StopWatch{
    
    intervalId;
    constructor(interval,newObj){
        this.displayAt=interval;
        this.newObj=newObj;
        this.hrs=0;
        this.min=0;
        this.sec=0;
        this.msec=0;
    }
    start(){
        this.newObj=true;
       this.intervalId=setInterval(this.timer.bind(this),this.displayAt)
       //this.timer();
    }
    timer(){
        this.msec= ++this.msec;
       // console.log("sec is:",this.sec);
        //this.sec.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
        //console.log("sec is:",this.sec);
        if(this.msec==100){
            this.msec=0;
            this.sec=this.sec+1;
            //(this.min).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
        }
        if(this.sec==60){
            this.sec=0;
            this.min=this.min+1;
           // (this.hrs).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        
        }
        if(this.min==60){
            this.min=0;
            this.hrs=this.hrs+1;
           // (this.hrs).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        }
        hours.innerHTML=this.hrs;
        minutes.innerHTML=this.min;
        seconds.innerHTML=this.sec;
        mseconds.innerHTML=this.msec;

    }
    stop(){
        this.newObj=false;
        clearInterval(this.intervalId);
    }
    reset(){
        this.sec=0;
        this.min=0;
        this.hrs=0
        this.msec=0;
        hours.innerHTML=this.hrs;
        minutes.innerHTML=this.min;
        seconds.innerHTML=this.sec;
        mseconds.innerHTML=this.msec;
    }
}

const stopWatch= new StopWatch(10,false);
StartStop.addEventListener('click',()=>{
    if(stopWatch.newObj==false){
        StartStop.innerHTML="Stop";
        para.innerHTML="Stopwatch Starterd";
        stopWatch.start();
    }
    else{
        StartStop.innerHTML="Start";
        stopWatch.stop();
    }
});
reset.addEventListener('click',stopWatch.reset());






