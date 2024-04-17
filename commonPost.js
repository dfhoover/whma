
document.addEventListener("DOMContentLoaded", function() {
  const headElement = document.getElementById('common-head');
  const headerElement = document.getElementById('common-header');
  const footerElement = document.getElementById('common-footer');

  // Function to handle fetching and injecting content
  function loadContent(elementId, fileName) {
    fetch(`../${fileName}`)
      .then(response => response.text())
      .then(data => {
        elementId.innerHTML = data;
      })
      .catch(error => {
        console.error(`Error fetching ${fileName}:`, error);
        // Optionally add user-friendly error handling here
      });
  }

  // Load content for head, header, and footer
  loadContent(headElement, 'commonHead.html');
  loadContent(headerElement, 'commonHeader.html');
  loadContent(footerElement, 'commonFooter.html');  // Assuming 'commonFooter.html' contains footer content

});



/*
// script.js
document.addEventListener("DOMContentLoaded", function() {
  const headElement = document.getElementById('common-head');  // Use a unique ID
  const headerElement = document.getElementById('common-header');  // Use a unique ID
  const footerElement = document.getElementById('common-footer');
  // Function to handle fetching and injecting content
  function loadContent(elementId, fileName) {
    fetch(`../${fileName}`)
      .then(response => response.text())
      .then(data => {
        elementId.innerHTML = data;
      })
      .catch(error => {
        console.error(`Error fetching ${fileName}:`, error);
        // Optionally add user-friendly error handling here (e.g., display an error message)
      });
  }

  // Load content for header and footer elements
  loadContent(headElement, 'commonHead.html');
  loadContent(headerElement, 'commonHeader.html');  // Assuming 'commonHeader.html' contains footer content
  loadContent(footerElement, 'commonFooter.html');
});
*/






/*
document.addEventListener("DOMContentLoaded", function() {
  const headerElement = document.getElementById('common-head');
  fetch('../commonHead.html')
    .then(response => response.text())
    .then(data => {
      headerElement.innerHTML = data;
    })
    .catch(error => {
      console.error('Error fetching header:', error);
    });
});
document.addEventListener("DOMContentLoaded", function() {
  const headerElement = document.getElementById('common-header');
  fetch('../commonHeader.html')
    .then(response => response.text())
    .then(data => {
      headerElement.innerHTML = data;
    })
    .catch(error => {
      console.error('Error fetching header:', error);
    });
});

document.addEventListener("DOMContentLoaded", function() {
  const headerElement = document.getElementById('common-footer');
  fetch('../commonFooter.html')
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
