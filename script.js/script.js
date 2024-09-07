function startCountdown() {
    const secondsInput = document.getElementById('seconds');
    let time = parseInt(secondsInput.value);

    if (isNaN(time) || time <= 0 || time > 60) {
        alert('Please enter a valid number between 1 and 60.');
        return;
    }

    const display = document.getElementById('timerDisplay');
    display.textContent = `Time remaining: ${time} seconds`;

    const interval = setInterval(() => {
        time -= 1;
        display.textContent = `Time remaining: ${time} seconds`;

        if (time <= 0) {
            clearInterval(interval);
            display.textContent = 'Time’s up!';
            alert('Time’s up!');
        }
    }, 1000);
}
