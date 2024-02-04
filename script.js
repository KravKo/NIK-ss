const images = document.querySelectorAll('.image-fade');

function rotateImages() {
    const activeImage = document.querySelector('.image-fade.active');
    activeImage.classList.remove('active');

    const nextImage = activeImage.nextElementSibling || images[0];
    nextImage.classList.add('active');
} setInterval(rotateImages, 5000);


function toggleAnswer(questionId) {
  var answer = document.getElementById(questionId + '-answer');
  answer.classList.toggle('show');
}

let home_mbl = document.getElementById('home_mbl');
let team_mbl = document.getElementById('team_mbl')
let projects_mbl = document.getElementById('projects_mbl');
let Hire_mbl = document.getElementById('Hire_mbl')

home_mbl.addEventListener('click', function () {
  window.location.href = '/NIK-ss/index.html';
})

team_mbl.addEventListener('click', function () {
  window.location.href = '/NIK-ss/team.html';
})

projects_mbl.addEventListener('click', function () {
  window.location.href = '/NIK-ss/projects.html';
})

Hire_mbl.addEventListener('click', function () {
  window.location.href = '/NIK-ss/hire.html';
})


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
  function openPopup() {
    var popup = document.getElementById('popup-container');
    popup.style.display = 'block';
  }
  
  function closePopup() {
    var popup = document.getElementById('popup-container');
    popup.style.display = 'none';
  }
