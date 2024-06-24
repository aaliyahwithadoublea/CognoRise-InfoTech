
// Function to calculate and update the countdown
function countdown() {
    // Set the target date and time for the countdown
    const targetDate = new Date("2024-12-31T23:59:59").getTime();
    // Get the current date and time
    const now = new Date().getTime();
    // Calculate the difference between the target date and the current date
    const difference = targetDate - now;

    // Calculate the number of days remaining
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    // Calculate the number of hours remaining
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // Calculate the number of minutes remaining
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    // Calculate the number of seconds remaining
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Update the HTML elements with the calculated time values
    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

    // Check if the countdown has finished
    if (difference < 0) {
        // Stop the countdown timer
        clearInterval(timer);
        // Display a message indicating that the countdown is finished
        document.querySelector('.countdown').innerHTML = "<h2>Countdown Finished!</h2>";
    }
}

// Set an interval to update the countdown every second (1000 milliseconds)
const timer = setInterval(countdown, 1000);
