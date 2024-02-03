const images = document.querySelectorAll('.image-fade');

function rotateImages() {
    const activeImage = document.querySelector('.image-fade.active');
    activeImage.classList.remove('active');

    const nextImage = activeImage.nextElementSibling || images[0];
    nextImage.classList.add('active');
} setInterval(rotateImages, 5000);


//nav ko text dekhaune tarika/script
function showContent(buttonNumber) {
    // Hide all content divs
    for (let i = 1; i <= 4; i++) {
        document.getElementById('content' + i).classList.remove('active');
    }

    // Show the selected content div
    document.getElementById('content' + buttonNumber).classList.add('active');
}




document.addEventListener('DOMContentLoaded', function () {
    // Get the counter element
    var counterElement = document.getElementById('counter');
  
    // Set the target number
    var targetNumber = 6;
    var duration = 2000; // Animation duration in milliseconds
    var interval = 20; // Update interval in milliseconds
    var repeatInterval = 10000; // Repeat interval in milliseconds
  
    // Function to update the counter at regular intervals
    function updateCounter() {
      var increment = targetNumber / (duration / interval);
      var currentValue = 0;
  
      // Increment the counter at regular intervals
      function step() {
        currentValue += increment;
        counterElement.textContent = Math.round(currentValue);
  
        if (currentValue < targetNumber) {
          // Call the function again after the interval
          setTimeout(step, interval);
        }
      }
  
      // Start the count-up animation
      step();
  
      // Repeat the animation after the repeat interval
      setTimeout(updateCounter, repeatInterval);
    }
  
    // Initial call to start the animation
    updateCounter();
  });