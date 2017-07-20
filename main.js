const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')
const zero = document.querySelector('#zero')
const clear = document.querySelector('#clear')
const multiply = document.querySelector('#multiply')
const divide = document.querySelector('#divide')
const add = document.querySelector('#add')
const subtract = document.querySelector('#subtract')
const equal = document.querySelector('#equal')
const decimal = document.querySelector('#decimal')
const number = document.querySelector('.number')
const op1 = document.querySelectorAll('.op1')

let display = document.getElementById('display')

let number1
let number2
let operatorClicked
let resultNumber

one.addEventListener('click', () => {
  display.append(1)
})
two.addEventListener('click', () => {
  display.append(2)
})
three.addEventListener('click', () => {
  display.append(3)
})
four.addEventListener('click', () => {
  display.append(4)
})
five.addEventListener('click', () => {
  display.append(5)
})
six.addEventListener('click', () => {
  display.append(6)
})
seven.addEventListener('click', () => {
  display.append(7)
})
eight.addEventListener('click', () => {
  display.append(8)
})
nine.addEventListener('click', () => {
  display.append(9)
})
zero.addEventListener('click', () => {
  display.append(0)
})
// divide.addEventListener('click', () => {
//   number1 = parseFloat(display.textContent)
//   console.log(number1)
//   display.textContent = ''
// })
// multiply.addEventListener('click', () => {
//   number1 = parseFloat(display.textContent)
//   console.log(number1)
//   display.textContent = ''
// })
// subtract.addEventListener('click', () => {
//   number1 = parseFloat(display.textContent)
//   console.log(number1)
//   display.textContent = ''
// })
// add.addEventListener('click', () => {
//   number1 = parseFloat(display.textContent)
//   console.log(number1)
//   display.textContent = ''
// })
decimal.addEventListener('click', () => {
  display.append('.')
})
op1.forEach(operator => {
  operator.addEventListener('click', () => {
    number1 = parseFloat(display.textContent)
    operatorClicked = operator.textContent
    console.log(number1)
    console.log(operatorClicked)
    display.textContent = ''
  })
})
equal.addEventListener('click', () => {
  number2 = parseFloat(display.textContent)
  console.log(number2)
  if (operatorClicked === '+') {
    resultNumber = number1 + number2
  } else if (operatorClicked === '-') {
    resultNumber = number1 - number2
  } else if (operatorClicked === '/') {
    resultNumber = number1 / number2
  } else if (operatorClicked === '*') {
    resultNumber = number1 * number2
  }
  display.textContent = resultNumber
  console.log(resultNumber)
  number1 = resultNumber
  operatorClicked = null
  number2 = ''
})

clear.addEventListener('click', () => {
  display.textContent = ''
  number1 = ''
  number2 = ''
  operatorClicked = null
})
