// script.js
document.addEventListener("DOMContentLoaded", function() {
 //const headerElement = document.getElementById('header-element');
 const headerElement = document.getElementById('common-side-popular-element');

  // Fetch the content of the header file
  //fetch('../commonPost.html')
  fetch('../commonSidePopular.html')
    .then(response => response.text())
    .then(data => {
      headerElement.innerHTML = data;
    })
    .catch(error => {
      console.error('Error fetching header:', error);
    });
});
document.addEventListener("DOMContentLoaded", function() {
  const headerElement = document.getElementById('header-element');
  fetch('../commonPost.html')
    .then(response => response.text())
    .then(data => {
      headerElement.innerHTML = data;
    })
    .catch(error => {
      console.error('Error fetching header:', error);
    });
});

document.addEventListener("DOMContentLoaded", function() {
 //const headerElement = document.getElementById('header-element');
 const headerElement = document.getElementById('common-side-element');

  // Fetch the content of the header file
  //fetch('../commonPost.html')
  fetch('../commonSide.html')
    .then(response => response.text())
    .then(data => {
      headerElement.innerHTML = data;
    })
    .catch(error => {
      console.error('Error fetching header:', error);
    });
});
