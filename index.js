const displayPreviousValue = document.getElementById('previous.value')
const displayCurrentValue = document.getElementById('current-value')
const numericButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')

const display = new Display(displayPreviousValue, displayCurrentValue)
numericButtons.forEach(boton => {
    boton.addEventListener('click',() => display.addNumber(boton.innerHTML))
})

operatorButtons.forEach(boton => {
    boton.addEventListener('click',() => display.compute(boton.value))
})