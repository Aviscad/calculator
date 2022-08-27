let equal = document.querySelector(".equal"),
  dot = document.querySelector(".dot"),
  clear = document.querySelector(".clear"),
  buttons = document.querySelectorAll(".btn"),
  number1 = 0,
  number2 = 0,
  operator = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let buttonValue = parseInt(e.target.innerText);
    if (buttonValue >= 0 && buttonValue <= 9) {
      if (number1 == 0) {
        number1 = buttonValue;
      } else {
        number2 = buttonValue;
      }
      console.log(number1 + "..." + number2);
    } else if (e.target.innerText == "+") {
      console.log("+");
    } else if (e.target.innerText == "-") {
      console.log("-");
    } else if (e.target.innerText == "*") {
      console.log("*");
    } else if (e.target.innerText == "/") {
      console.log("/");
    } else if (e.target.innerText == "=") {
      console.log("=");
    } else if (e.target.innerText == "C") {
      console.log(e.target.innerText);
    }
  });
});

function add(n1, n2) {
  return n1 + n2;
}
function sub(n1, n2) {
  return n1 - n2;
}
function mul(n1, n2) {
  return n1 * n2;
}
function div(n1, n2) {
  return n1 / n2;
}
