let equal = document.querySelector(".equal"),
  dot = document.querySelector(".dot"),
  del = document.querySelector(".del"),
  clear = document.querySelector(".clear"),
  buttons = document.querySelectorAll(".btn"),
  result = document.querySelector("#result"),
  number1 = "",
  number2 = "",
  operator = "",
  total = 0;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let buttonValue =
      e.target.innerText == "."
        ? e.target.innerText
        : parseInt(e.target.innerText);
    if (buttonValue >= 0 && buttonValue <= 9) {
      if (operator == "") {
        number1 += buttonValue;
      } else if (number1 != "" && operator != "") {
        number2 += buttonValue;
      }
      result.innerText == "0.00"
        ? (result.innerText = buttonValue)
        : (result.innerText += buttonValue);
    } else if (e.target.innerText == "+") {
      if (number1 != "" && number2 != "" && operator != "") {
        total = operation(number1, number2, operator);
        number1 = total;
        number2 = "";
        operator = e.target.innerText;
        result.innerText = total + " " + operator + " ";
      } else if (result.innerText != "0") {
        operator = e.target.innerText;
        result.innerText += operator;
      }
    } else if (e.target.innerText == "-") {
      if (number1 != 0 && number2 != 0 && operator != "") {
        total = operation(number1, number2, operator);
        number1 = total;
        number2 = "";
        operator = e.target.innerText;
        result.innerText = total + " " + operator + " ";
      } else if (result.innerText != "0") {
        operator = e.target.innerText;
        result.innerText += operator;
      }
    } else if (e.target.innerText == "*") {
      if (number1 != 0 && number2 != 0 && operator != "") {
        total = operation(number1, number2, operator);
        number1 = total;
        number2 = "";
        operator = e.target.innerText;
        result.innerText = total + " " + operator + " ";
      } else if (result.innerText != "0") {
        operator = e.target.innerText;
        result.innerText += operator;
      }
    } else if (e.target.innerText == "/") {
      if (number1 != 0 && number2 != 0 && operator != "") {
        total = operation(number1, number2, operator);
        number1 = total;
        number2 = "";
        operator = e.target.innerText;
        result.innerText = total + " " + operator + " ";
      } else if (result.innerText != "0") {
        operator = e.target.innerText;
        result.innerText += operator;
      }
    } else if (e.target.innerText == "=") {
      if (number1 != "" && number2 != "" && operator != "") {
        result.innerText = operation(number1, number2, operator);
      }
    } else if (e.target.innerText == "C") {
      reset();
    } else if (e.target.innerText == ".") {
      if (operator == "") {
        if (number1.indexOf(".") < 0) {
          number1 += ".";
          result.innerText = "";
          result.innerText += number1;
        }
      } else {
        if (number2.indexOf(".") < 0) {
          number2 += ".";
          result.innerText = "";
          result.innerText += number2;
        }
      }
    } else if (e.target.innerText == "Del") {
      if (operator == "") {
        number1 = number1.substring(0, number1.length - 1);
        if (number1 == "") {
          reset();
        } else {
          result.innerText = "";
          result.innerText += number1;
        }
      } else {
        number2 = number2.substring(0, number2.length - 1);
        if (number2 == "") {
          reset();
        } else {
          result.innerText = "";
          result.innerText += number2;
        }
      }
    }
  });
});
function reset() {
  number1 = number2 = operator = "";
  total = 0;
  result.innerText = "0.00";
}
function operation(n1, n2, simbol) {
  switch (simbol) {
    case "+":
      return add(n1, n2).toFixed(2);
      break;
    case "-":
      return sub(n1, n2).toFixed(2);
      break;
    case "*":
      return mul(n1, n2).toFixed(2);
      break;
    case "/":
      return n2 == 0 ? "Error" : div(n1, n2).toFixed(2);
      break;
  }
}
function add(n1, n2) {
  return parseFloat(n1) + parseFloat(n2);
}
function sub(n1, n2) {
  return parseFloat(n1) - parseFloat(n2);
}
function mul(n1, n2) {
  return parseFloat(n1) * parseFloat(n2);
}
function div(n1, n2) {
  return parseFloat(n1) / parseFloat(n2);
}
