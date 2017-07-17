const clear = document.getElementById('clear')
const multiply = document.getElementById('multiply')
const divide = document.getElementById('divide')
const add = document.getElementById('add')
const subtract = document.getElementById('subtract')
const equal = document.getElementById('equal')
const decimal = document.getElementById('decimal')

let button = document.querySelector('button')

clear.addEventListener('click', () => {})
multiply.addEventListener('click', () => {})
divide.addEventListener('click', () => {})
add.addEventListener('click', () => {})
subtract.addEventListener('click', () => {})
equal.addEventListener('click', () => {})
decimal.addEventListener('click', () => {})

let output = document.querySelector('display')

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener('click', () => {
    output.push(button[i].name)
  })
}
