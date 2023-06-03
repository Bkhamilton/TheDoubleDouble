// current-page.js

document.addEventListener("DOMContentLoaded", function(event) {
    // Get the current URL
    var currentUrl = window.location.href;
  
    // Get all the links on the page
    var links = document.querySelectorAll(".nav-links a");
  
    // Loop through the links
    for (var i = 0; i < links.length; i++) {
      // If the link leads to the current page, add the "current" class
      if (links[i].href === currentUrl) {
        links[i].classList.add("current");
      }
    }
  });