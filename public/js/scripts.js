document.addEventListener("DOMContentLoaded", function() {
    let timeLeft = 300; // 5 minutes in seconds
    const timerElement = document.querySelector(".timer_count");

    function updateTimer() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeLeft > 0) {
            timeLeft--;
        } else {
            clearInterval(timerInterval);
        }
    }

    updateTimer(); // Initial call to set the timer immediately
    const timerInterval = setInterval(updateTimer, 1000);
});