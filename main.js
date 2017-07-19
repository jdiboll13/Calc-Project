const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
const zero = document.getElementById('zero')
const clear = document.getElementById('clear')
const multiply = document.getElementById('multiply')
const divide = document.getElementById('divide')
const add = document.getElementById('add')
const subtract = document.getElementById('subtract')
const equal = document.getElementById('equal')
const decimal = document.getElementById('decimal')
let numbers = document.getElementsByClassName('!== op1')

let display = document.getElementById('display')
let thisOperator = 0
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
multiply.addEventListener('click', () => {
  thisOperator = '*'
  display.append('*')
})
divide.addEventListener('click', () => {
  thisOperator = '/'
  display.append('/')
})
add.addEventListener('click', () => {
  display.append('+')
})
subtract.addEventListener('click', () => {
  display.append('-')
})
decimal.addEventListener('click', () => {
  display.append('.')
})
equal.addEventListener('click', () => {
  display.textContent.split('').
  forEach((v, i, a) => {
  console.log(a)
  function sort(values) {
    for(var i = 0; i < values.length; ++i) {
      if (values[i] === numbers && values[i+1] === numbers) {
        concat(values[i], values[i+1]);
      } else {
        return Number
      }
    }
  }
})
    //if ((display.textContent[i] = numbers))
    //let array = []
    //array.push(display.textContent)
    //console.log(display.textContent)
  })

clear.addEventListener('click', () => {
  display.append()
})
