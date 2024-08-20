startStopBtn = document.querySelector("#start-stop")
resetBtn = document.querySelector("#reset")
millisecondsInput = document.querySelector("#milliseconds").innerText = ''
secondInput = document.querySelector('#seconds').innerText = '00'
minutesInput = document.querySelector("#minutes").innerText = '00'
hoursInput = document.querySelector("#hour").innerText = '00'

let milliseconds = 0
let seconds = 0
let minutes = 0
let hour = 0
let count = 0

function timer () {
    if((milliseconds += 1) == 100) {
        milliseconds = 0
        seconds++
    }
    if(seconds == 60) {
        seconds =0
        minutes++
    }
    if(minutes == 60) {
        minutes = 0
        hour++
    }
  
    document.querySelector('#milliseconds').innerText = showInput(milliseconds)
    document.querySelector('#seconds').innerText = showInput(seconds)
    document.querySelector('#minutes').innerText = showInput(minutes)
    document.querySelector('#hour').innerText = showInput(hour)
}

function showInput (input) {
    if (input < 10) {
        return '0' + input
    } else {
        return input
    }
}

function pause () {
    clearInterval(count)
}

startStopBtn.addEventListener('click', () => {
    if(count < 1) {
        count = setInterval(() => {
            timer()
        }, 10) 
    } else {
        pause()
        count = 0
    }
})

resetBtn.addEventListener('click', () => {
    pause()
    milliseconds = 0
    minutes = 0
    hour = 0
    count = 0
    seconds = 0
    millisecondsInput = document.querySelector("#milliseconds").innerText = ''
    minutesInput = document.querySelector('#minutes').innerText = '00'
    hoursInput = document.querySelector('#hour').innerText = '00'
    secondInput = document.querySelector('#seconds').innerText = '00'
})