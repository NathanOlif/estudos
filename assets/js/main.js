function myTimer() {
    const timer = document.querySelector('#timer')

    function formatTime(seconds) {
        let date = new Date(seconds * 1000)
        return date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    function updateTimerDisplay(seconds) {
        timer.innerHTML = formatTime(seconds);
    }

    function clearTimer() {
        clearInterval(interval);
        interval = null
    }

    let interval;
    let seconds = 0
    function startTimer() {
        if (!interval) {
            console.log('Start Timer!')
            timer.classList.remove('pause-timer')
            
            interval = setInterval(function() {
                seconds++
                updateTimerDisplay(seconds)
            }, 10);
        }
    }

    function pauseTimer() {
        if (interval) {
            console.log('Pause Timer!')
            timer.classList.add('pause-timer')
            clearTimer();
        }
    }

    function resetTimer() {
        console.log('Reset Timer!')
        seconds = 0
        updateTimerDisplay(seconds)
        timer.classList.remove('pause-timer')
        clearTimer()
    }

    document.addEventListener('click', function(event) {
        let el = event.target;
        if (el.id == 'start') {
            startTimer();
        }
        if (el.id == 'pause') {
            pauseTimer();
        }
        if (el.id == 'reset') {
            resetTimer();
        }
    });
}
myTimer();
