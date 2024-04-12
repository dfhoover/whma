// script.js
document.addEventListener("DOMContentLoaded", function() {
 
  // Fetch the content of the header file
  fetch('commonSide.html')
    .then(response => response.text())
    .then(html => {
      // Insert the header content into the placeholder element
      document.body.innterHTML += html; 
    })
    .catch(error => {
      console.error('Error fetching commonSide:', error);
    });
});