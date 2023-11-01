var display = document.querySelector('.display');
var buttons = document.querySelectorAll('.btn');
var firstNumber = null;
var secondNumber = null;
var operator = null;

function handleButtonClick(button) {

  let limit = 5
  while (display.textContent.length > limit) {
    var fontSize = window.getComputedStyle(display).getPropertyValue("font-size");
    var paddingTop = window.getComputedStyle(display).getPropertyValue("padding-top");

    display.style.fontSize = (parseInt(fontSize) - 2) + "px";
    display.style.paddingTop = (parseInt(paddingTop) + 1) + "px";
    limit += 2
    console.log(display.style.fontSize)
    console.log(display.style.paddingTop)
  }

  var buttonText = button.textContent;

  switch (button.id) {
    case 'ac':
      display.style.fontSize = "46px";
      display.style.paddingTop = "25px";
      display.textContent = "0";
      firstNumber = null;
      secondNumber = null;
      operator = null;
      break;
    case '±':
      display.textContent = parseFloat(display.textContent) * -1;
      break;
    case 'percent':
      display.textContent = (parseFloat(display.textContent) / 100).toFixed(2);
      break;
    case 'num':
      if (display.textContent === '0') {
        display.textContent = buttonText;
      } else {
        display.textContent += buttonText;
      }
      break

    case 'zero':
      if (display.textContent === '0') {
        display.textContent = buttonText;
      } else {
        display.textContent += buttonText;
      }
      break;
    case 'addition':
    case 'subtraction':
    case 'multiplication':
    case 'division':
      if (firstNumber === null) {
        firstNumber = parseFloat(display.textContent);
        operator = button.id;
        display.textContent = '0';
      }
      break;

    case 'point':
      display.textContent += buttonText;
      break;

    case 'equal':
      if (firstNumber !== null && operator !== null) {
        secondNumber = parseFloat(display.textContent);
        switch (operator) {
          case 'addition':
            display.textContent = (firstNumber + secondNumber);
            break;
          case 'subtraction':
            display.textContent = (firstNumber - secondNumber);
            break;
          case 'multiplication':
            display.textContent = (firstNumber * secondNumber) == 0 ? 0 : (firstNumber * secondNumber).toFixed(2);
            break;
          case 'division':
            if (secondNumber !== 0) {
              display.textContent = (firstNumber / secondNumber).toFixed(2);
            } else {
              display.textContent = "Error";
            }
            break;
        }
        firstNumber = null;
        secondNumber = null;
        operator = null;
      }
      break;
  }
}

buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    handleButtonClick(button);
  });
});