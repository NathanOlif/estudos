const timer = document.querySelector('#timer')
const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')
const resetButton = document.querySelector('#reset')

let interval = null;
let hours = minutes = seconds = 0

const formatTime = function(hours, minutes, seconds) {
    hr = String(hours).padStart(2, '0')
    min = String(minutes).padStart(2, '0')
    sec = String(seconds).padStart(2, '0')

    return `${hr}:${min}:${sec}`
}

const pauseTimer = function() {
    clearInterval(interval);
    interval = null
}

const updateTimerDisplay = function(hours, minutes, seconds) {
    timer.innerHTML = formatTime(hours, minutes, seconds)
}

startButton.addEventListener('click', function(event) {
    // TODO: Separar a lógica principal do timer
    if (!interval) {
        console.log('Start Timer!')
        timer.style.color = 'black' 
        
        interval = setInterval(function() {
            seconds++
            if (seconds > 59) {
                seconds = 0
                minutes++
            }

            if (minutes > 59) {
                minutes = 0
                hours++
            }

            updateTimerDisplay(hours, minutes, seconds)
        }, 10);
    }
});

pauseButton.addEventListener('click', function(event) {
    if (interval) {
        console.log('Pause Timer!')
        pauseTimer()
        timer.style.color = 'red' 
    }
});

resetButton.addEventListener('click', function(event) {
    console.log('Reset Timer!')
    pauseTimer()
    hours = minutes = seconds = 0
    updateTimerDisplay(hours, minutes, seconds)
    timer.style.color = 'black' 
});