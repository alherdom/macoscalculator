const displayPreviousValue = document.getElementById('previous.value')
const displayCurrentValue = document.getElementById('current-value')
const numericButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.opertaor')

const display = new Display(displayPreviousValue, displayCurrentValue)
numericButtons.forEach(boton => {
    boton.addEventListener('click',() => display.addNumber(boton.innerHTML))
})