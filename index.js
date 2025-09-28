let intervalId,currentState="work";
function updateTime()
{
    let time=document.getElementById("timer").innerText;
    let strArr=time.split(":");
    let minutes=parseInt(strArr[0]);
    let seconds=parseInt(strArr[1]);
    let timeInSeconds= minutes*60+seconds-1;
    let setSecs,setMins;
     if(timeInSeconds>0){
    setMins= Math.floor(timeInSeconds/60);
    setSecs=timeInSeconds%60;
     }
     else{
    if(currentState=="work")
        {
            audio.play("welcome-to-the-afterlife-looping-tune-225538.mp3");
            setMins="05";
            setSecs="00";
            currentState="rest";
        }
        else{
            audio.play("80s_phone_samsung.mp3");
           setMins="25";
            setSecs="00";
            currentState="work"; 
        }
    }
    document.getElementById("timer").innerText=setMins.toString().padStart(2,0)+":"+setSecs.toString().padStart(2,0);
}
function start()
{
intervalId??=setInterval(updateTime,1000);
}
function pause()
{
    clearInterval(intervalId);
    intervalId=null;
}
function reset()
{
    pause();
    
    document.getElementById("timer").innerText="25:00";
}