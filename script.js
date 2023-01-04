function clearScreen() {
  document.getElementById("result").value = "";
}

function display(value) {
  document.getElementById("result").value += value;
}

function calculate() {
  var input = document.getElementById("result").value;
  var output = eval(input);
  document.getElementById("result").value = output;
}
