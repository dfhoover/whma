// script.js
document.addEventListener("DOMContentLoaded", function() {
  const headerElement = document.getElementById('header-element');

  // Fetch the content of the header file
  fetch('commonPost.html')
    .then(response => response.text())
    .then(data => {
      // Insert the header content into the placeholder element
      headerElement.innerHTML = data;
    })
    .catch(error => {
      console.error('Error fetching header:', error);
    });
});