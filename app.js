// Calculates roots of quadratic equation based on input cefficients a, b and c

//UI elements
const navbarLink = document.querySelector('.navbar-links');
const inputForm = document.querySelector('#input-form');
const coeffA = document.querySelector('#coeff-a');
const coeffB = document.querySelector('#coeff-b');
const coeffC = document.querySelector('#coeff-c');
const results = document.querySelector('#results');
const resultsDiv = document.querySelector('#results-div');
const clearResults = document.querySelector('#clear-results');
let message = document.querySelector('#message');
const loader = document.querySelector('.loader');

//global variables
let equationCoeffs;

//Load all event handlers
loadAllEventsHandlers();

function loadAllEventsHandlers() {
  navbarLink.addEventListener('click', makeActiveLink);
  document.addEventListener('DOMContentLoaded', sideNavigation);
  inputForm.addEventListener('submit', calculateRoots);
  clearResults.addEventListener('click', clearAllResults);
  results.addEventListener('click', openImage);
}

function sideNavigation() {
  var elems = document.querySelectorAll('.sidenav');
  var instance = M.Sidenav.init(elems, {});
}

function makeActiveLink() {}

function calculateRoots(e) {
  e.preventDefault();

  if (coeffA.value === '' || coeffB.value === '' || coeffC.value === '') {
    showAlert('Please check your inputs');
  } else {
    const a = parseInt(coeffA.value);
    const b = parseInt(coeffB.value);
    const c = parseInt(coeffC.value);
    const D = b * b - 4 * a * c;

    if (D < 0) {
      showAlert('Roots are complex numbers.');

      return;
    } else if (D === 0) {
      setMessage('Roots are real numbers and equal.', 'brown');
    } else {
      setMessage('Roots are real numbers and different.', 'green');
    }

    const x1 = ((-b - Math.sqrt(D)) / 2) * a;
    const x2 = ((-b + Math.sqrt(D)) / 2) * a;

    setLoader(true);
    setTimeout(function () {
      setLoader(false);
    }, 2000);

    addRoots(x1, x2, a, b, c, D);
    clearInputs();
  }
}

function addRoots(x1, x2, a, b, c, D) {
  const li = document.createElement('li');
  li.className = 'collection-item avatar';
  li.style.height = '100px';

  const avatar = document.createElement('a');
  avatar.className = 'circle';
  avatar.setAttribute('href', findImg(a, D));
  avatar.innerHTML = '<i class="material-icons">insights</i>';

  const equation = document.createElement('span');
  equation.className = 'title';
  equation.appendChild(
    document.createTextNode(
      `Equation: ${a}x ${b < 0 ? '' : '+'} ${b}x ${c < 0 ? '' : '+'} ${c}`
    )
  );

  const roots = document.createElement('p');
  roots.appendChild(document.createTextNode(`x1: ${x1.toFixed(2)}`));
  roots.appendChild(document.createElement('br'));
  roots.appendChild(document.createTextNode(`x2: ${x2.toFixed(2)}`));

  console.log(roots);

  li.appendChild(avatar);
  li.appendChild(equation);
  li.appendChild(roots);

  results.appendChild(li);
  console.log(results);
}

function findImg(a, D) {
  if (D === 0) {
    if (a > 0) {
      return '/img/quad3.png';
    } else if (a < 0) {
      return '/img/quad4.png';
    }
  } else if (D > 0) {
    if (a > 0) {
      return '/img/quad1.png';
    } else if (a < 0) {
      return '/img/quad2.png';
    }
  }
}

function openImage(e) {
  if (e.target.classList.contains('circle')) {
  }
}

function clearAllResults() {
  results.innerHTML = '';
}

//Prepare message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;

  setTimeout(function () {
    message.textContent = '';
    if (color === 'red') {
      clearInputs();
    }
  }, 3000);
}

//Show alert
function showAlert(error) {
  resultsDiv.style.display = 'none';

  const alertDiv = document.createElement('div');
  alertDiv.className = 'alert card-panel red';

  const alertH5 = document.createElement('h5');
  alertH5.className = 'white-text center-align';
  alertH5.appendChild(document.createTextNode(error));

  alertDiv.appendChild(alertH5);

  const parent = document.querySelector('.parent');
  parent.appendChild(alertDiv);

  setTimeout(function () {
    alertDiv.style.display = 'none';
    resultsDiv.style.display = 'block';
    clearInputs();
  }, 3000);
}

function setLoader(input) {
  resultsDiv.style.display = input ? 'none' : 'block';
  loader.style.display = input ? 'block' : 'none';
}

//Clear inputs
function clearInputs() {
  coeffA.value = '';
  coeffB.value = '';
  coeffC.value = '';
}
