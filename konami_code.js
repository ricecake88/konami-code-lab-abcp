const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var konami_index = 0;

function init() {
  // Write your JavaScript code inside the init() function
  document.body.addEventListener('keydown', react);
}

function react(e) {
  if (e.which === code[konami_index]) {
    konami_index++;
  }
  else {
    konami_index = 0;
  }
}