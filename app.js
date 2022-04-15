// Calculates roots of quadratic equation based on input cefficients a, b and c

//UI elements
const navbarLink = document.querySelector('.navbar-links');
const inputForm = document.querySelector('#input-form');
const coeffA = document.querySelector('#coeff-a');
const coeffB = document.querySelector('#coeff-b');
const coeffC = document.querySelector('#coeff-c');
const results = document.querySelector('#results');
const clearResults = document.querySelector('#clear-results');
let message = document.querySelector('#message');

//global variables
let equationCoeffs;

//Load all event handlers

function loadAllEventsHandlers() {
  navbarLink.addEventListener('click', makeActiveLink);
  document.addEventListener('DOMContentLoaded', sideNavigation);
  document.addEventListener('DOMContentLoaded', getAllResults);
  inputForm.addEventListener('submit', calculateRoots);
  results.addEventListener('click', deleteResult);
  clearResults.addEventListener('click', clearAllResults);
}

function sideNavigation() {
  var elems = document.querySelectorAll('.sidenav');
  var instance = M.Sidenav.init(elems, {});
}

function makeActiveLink() {}

function getAllResults() {}

function calculateRoots() {
  if (coeffA.value !== '' && coeffB.value !== '' && coeffC.value !== '') {
    const a = parseInt(coeffA.value);
    const b = parseInt(coeffB.value);
    const c = parseInt(coeffC.value);
    const D = b * b - 4 * a * c;

    if (D < 0) {
      setMessage('Roots will be complex numbers.', 'red');
      //return;
    } else if (D === 0) {
      setMessage('Roots will be real and the same.', 'brown');
    } else {
      setMessage('Roots will be real and different.', 'green');
    }

    const x1 = -b - Math.sqrt(D);

    console.log(a, b, c, D);
    clearInputs();
  } else {
    showAlert('Please check your inputs');
  }
}

function deleteResult() {}

function clearAllResults() {}

loadAllEventsHandlers();

//Prepare message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
  console.log(color);
  if (color === 'red') {
    console.log(color);
    clearInputs();
  }
  setTimeout(function () {
    message.textContent = '';
  }, 3000);
}

//Show alert
function showAlert() {
  console.log('alert');
}

//Clear inputs
function clearInputs() {
  coeffA.value === '';
  coeffB.value === '';
  coeffC.value === '';
}
