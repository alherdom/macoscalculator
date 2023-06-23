class Display {
    constructor(displayPreviousValue, displayCurrentValue) {
        this.displayPreviousValue = displayPreviousValue
        this.displayCurrentValue = displayCurrentValue
        this.calculator = new Calculator()
        this.operationType = undefined
        this.CurrentValue = ''
        this.PreviousValue = ''
    }

    addNumber(number) {
        if(number === '.' && this.CurrentValue.includes('.')) return
        this.CurrentValue += number.toString()
        this.printValues()
    }

    delNumber() {
        this.CurrentValue = this.CurrentValue.toString().slice(0,-1)
        this.printValues()
    }

    delAll() {
        this.CurrentValue = ''
        this.PreviousValue = ''
        this.operationType = undefined
        this.printValues()
    }
    printValues() {
        this.displayCurrentValue.textContent = this.CurrentValue
        this.displayPreviousValue.textContent = this.PreviousValue
    }
}