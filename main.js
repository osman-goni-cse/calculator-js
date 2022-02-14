// display
const calculator = document.querySelector('.calculator');
// key select
const keys = calculator.querySelector('.calculator__keys');
// update display value
const display = document.querySelector('.calculator__display');
// variables

var operator = '', firstNumber, secondNumber, operatorSeparator, cntDecimal = 0;

keys.addEventListener('click', function(event) {
  // console.log(event.target);
  const key = event.target;
  const action = key.dataset.action;
  
  // console.log(key);
  // console.log(key.dataset);
  // console.log(key.dataset.action);

  // const keyContent = key.textContent;
  const keyContent = key.innerText;
  const displayedNum = display.innerText;
  
  console.log(keyContent, displayedNum);

  
  if(!action) {
    // console.log('Number key!!!');
    if(displayedNum == '0') {
      display.innerText = keyContent;
    }
    else {
      display.innerText = displayedNum + keyContent;
    }
  }
  else {
    if(action == 'add' ||
      action == 'subtract' ||
      action == 'multiply' ||
      action == 'divide') {
        console.log('Operator key!!!');
        if(operator == '') {
          firstNumber = display.innerText;
          operator = action;
          operatorSeparator = keyContent;
          console.log(operator);
          // console.log(event.target.value);
          display.innerText += keyContent;
        }
      }
      else if(action == 'decimal') {
        console.log('decimal key');
        if(!(display.innerText).includes('.')) {
          display.innerText = displayedNum + '.';
          cntDecimal++;
        }
        else if(operator != '') {
          if(cntDecimal < 2) {
            display.innerText = displayedNum + '.';
            cntDecimal++;
          }
        }
      }
      else if(action == 'calculate') {
        console.log('Equal key!!!');
        var now = (display.innerText).split(operatorSeparator);
        secondNumber = now[1];
        console.log(secondNumber);
        var ans = calculateResult(firstNumber, operator, secondNumber);
        display.innerText = ans;
      }
      else {
        console.log('Clear!!!');
        display.innerText = '0';
      }
  }
});

function calculateResult(num1, opr, num2) {
  
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  console.log(num1, num2);

  if(opr == 'add') return num1 + num2;
  else if(opr == 'subtract') return num1 - num2;
  else if(opr == 'multiply') return num1 * num2;
  else if(opr == 'divide') return num1 / num2;
}

