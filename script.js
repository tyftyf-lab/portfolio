// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", function() {
    // Show a welcome message in an alert box when the page is loaded
    alert("Prepare to be blinded by my artistic genius!");
});

// The following block of code runs once the page is fully loaded (including images, etc.)
window.addEventListener('load', function() {
  // Get the reference to the theme toggle checkbox element by its ID
  const themeToggle = document.getElementById('theme-toggle');

  // Retrieve the saved theme from localStorage (if any)
  const savedTheme = localStorage.getItem('theme');

  // Check if the saved theme is 'dark'
  if (savedTheme === 'dark') {
    // If dark mode was previously saved, apply the 'dark-mode' class to the body
    document.body.classList.add('dark-mode');
    
    // Also, check the toggle switch to indicate that dark mode is active
    themeToggle.checked = true;
  }
});

// Add an event listener to the theme toggle checkbox to listen for a change (when the user clicks the switch)
document.getElementById('theme-toggle').addEventListener('change', function() {
  // Check if the toggle switch is in the "checked" (ON) state (which means dark mode is selected)
  if (this.checked) {
    // Apply dark mode by adding the 'dark-mode' class to the body element
    document.body.classList.add('dark-mode');
    
    // Save the user's theme preference in localStorage, so it's remembered next time
    localStorage.setItem('theme', 'dark');
  } else {
    // If the toggle switch is not checked (OFF), remove the 'dark-mode' class (light mode)
    document.body.classList.remove('dark-mode');
    
    // Save the user's theme preference in localStorage as 'light'
    localStorage.setItem('theme', 'light');
  }
});


window.addEventListener("load", function() {
    document.getElementById("background-music").play();
});
