// Variables for time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//Variables for the buttons
let play = document.getElementById("startStopBtn")
let reset = document.getElementById("restartBtn")

//variable for the leading zero
let Leadingsec = 0
let Leadingmin = 0
let Leadinghour = 0

let displayTimer = document.querySelector('.timer')

//variables for setInterval and timer status

let timerInterval = null
let timerStatus = "stopped"

function stopWatch(){

    seconds++

    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;
    
        if(minutes / 60 === 1){
            minutes = 0;
            hours++
        }
    }

    if(seconds < 10){
         Leadingsec ="0" + seconds.toString();
    }else
        { Leadingsec = seconds}
    
    if(minutes < 10){
         Leadingmin = "0" + minutes.toString()
        
       
    }else
        { Leadingmin = minutes}
    if(hours < 10){
         Leadinghour = "0" + hours.toString()
    }else
    { Leadinghour= hours}


    displayTimer.innerText = Leadinghour + ":" + Leadingmin +  ":" + Leadingsec
}

 
play.addEventListener("click", function(){
    if (timerStatus === "stopped"){
        timerInterval = window.setInterval(stopWatch, 1000)
        play.innerHTML = `<i class = "fa-solid fa-pause" id="pause"></i>`;
        timerStatus = "started"
    }else{
        window.clearInterval(timerInterval);
        play.innerHTML = `<i class ="fa-solid fa-play" id="play">
        </i>`
        timerStatus =="stopped"

        }
})

reset.addEventListener('click', function(){
 
    displayTimer.innerText = "00:00:00"
    window.clearInterval(timerInterval)
    document.getElementById("startStopBtn").innerHTML =  `<i class ="fa-solid fa-play" id="play">
    </i>`
})