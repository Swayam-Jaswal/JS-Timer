let timer = document.getElementById("timer");
let clicknumber = document.getElementById("click");
let startTimer = document.getElementById("timer-start");
let resetTimer = document.getElementById("timer-reset");
let inputTime = document.getElementById("timeinput");
let setTimebtn = document.getElementById("setTime");
count = 60;
clock = null;

function time(){
  clock=setInterval(() => {
    if(count>=0){
      clicknumber.innerText = count;
      count--;
    }
    if (count<0) {
      clearInterval(clock)
      startTimer.disabled = false;
    }
    else{
      startTimer.disabled = true;
    }
  }, 1000);
}

function resetTime(){
  count = 60;
  // count = inputTime.value;
  clicknumber.innerText=count;
  if(clock!==null){
    clearInterval(clock);
    startTimer.disabled = false;
  }else{
    startTimer.disabled = false;
  }
}

setTimebtn.addEventListener("click",()=>{
  count = inputTime.value;
  clicknumber.innerText=count;
})

startTimer.addEventListener("click",()=>{
  time();
  startTimer.disabled=true;
  setTimebtn.disabled=true;
})

resetTimer.addEventListener("click",()=>{
  resetTime();
  setTimebtn.disabled=false;
})