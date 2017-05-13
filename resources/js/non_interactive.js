'use strict';

let modal;

document.addEventListener("DOMContentLoaded", function() {
  const stayTunedButtons = document.getElementsByClassName("section--button");
  const modalButtons = document.getElementsByClassName("overview--button");

  for (let i = 0; i < stayTunedButtons.length; i++) {
    stayTunedButtons[i].addEventListener("click", function(e) {
      e.target.innerText = "STAY TUNED";
    });
  }

  for (let i = 0; i < modalButtons.length; i++) {
    modalButtons[i].addEventListener("click", function(e) {
      modal = e.target.parentElement.children[3];
      modal.style.display = "block";
    });
  }

  window.addEventListener("click", function(e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  })
});





// class = jsTransition

// function isInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   const html = document.documentElement;
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || html.clientHeight) &&
//     rect.right <= (window.innerWidth || html.clientWidth)
//   );
// }
