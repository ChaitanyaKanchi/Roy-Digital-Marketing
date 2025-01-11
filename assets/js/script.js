'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/**
 * Text animation
 */

const dynamicTextElement = document.querySelector('.dynamic-text'); 
const phrases = [ 
  'available for marketing', 
  'developing new solutions' ]; 
  let wordIndex = 0; 
  let phraseIndex = 0; 
  function updateText() { 
    const words = phrases[phraseIndex].split(' '); 
    dynamicTextElement.textContent = words.slice(0, wordIndex + 1).join(' '); 
    if (wordIndex < words.length - 1) { wordIndex++; 
    } else { 
      wordIndex = 0; phraseIndex = (phraseIndex + 1) % phrases.length; 
      setTimeout(updateText, 1000); 
      return; 
    } 
    setTimeout(updateText, 300);
  } 
  updateText(); 

  