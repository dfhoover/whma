// script.js
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
 //const headerElement = document.getElementById('header-element');
 const headerElement = document.getElementById('common-side-latest-element');

  // Fetch the content of the header file
  //fetch('../commonPost.html')
  fetch('../commonSideLatest.html')
    .then(response => response.text())
    .then(data => {
      headerElement.innerHTML = data;
    })
    .catch(error => {
      console.error('Error fetching header:', error);
    });
});
