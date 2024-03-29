const timer = document.querySelector('#timer')
const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
const resetBtn = document.querySelector('#reset')

let interval = null;
let [hours, minutes, seconds] = [0, 0, 0]

const formatTime = function(hours, minutes, seconds) {
    hr = String(hours).padStart(2, '0')
    min = String(minutes).padStart(2, '0')
    sec = String(seconds).padStart(2, '0')

    return `${hr}:${min}:${sec}`
}

startBtn.addEventListener('click', function(event) {
    // TODO: Separar a lógica principal do timer
    if (!interval) {
        console.log('Start Timer!')
        
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

            timer.innerHTML = formatTime(hours, minutes, seconds)
        }, 1000);
    }
});

stopBtn.addEventListener('click', function(event) {
    if (interval) {
        console.log('Pause Timer!')
        clearInterval(interval);
        interval = null
    }
});

resetBtn.addEventListener('click', function(event) {
    console.log('Reset Timer!')
    hours = 0;
    minutes = 0;
    seconds = 0;
    timer.innerHTML = '00:00:00'
});