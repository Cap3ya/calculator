// Global Variables 
let display = document.getElementById('display')
let result = document.getElementById('result')
let operator = undefined

// CA button
function clearDisplay() {
    display.textContent = 0
}

function clearValues() {
    operand1 = 0
    operator = undefined
    result.textContent = 0
}
// Del button 
function removeValues () {
    myVar = display.textContent.toString().split('')
    myVar.pop()
    display.textContent = Number(myVar.join(''))
}

// % button 
function percentValues () {
    display.textContent = Number(display.textContent)/100
}

// . button 
function decimalValues () {
const splitDisplay = display.textContent.toString().split('')
        let hasDecimal = false
        for ( let e of splitDisplay ) {
            if ( e === "." ) {
                hasDecimal = true
            }
        }
        if ( hasDecimal === false ) {
            display.textContent += "."
        }
}

// 
function displayValues (num) {
    if (display.textContent === "0") {
        display.textContent = num
    } else {
        display.textContent += num
    
    }
}

function getOperator (value) {
    operator = value
}

// More than 9 digits ERROR  
function isNineDigits () {
    let countDigits = 0
    for (i of display.textContent) {
        if ( i.match(/[0-9A-Z]/) ) { //Digits AND Error message
            countDigits += 1
        }
    } if (countDigits > 8) {
        display.textContent = "TOO MUCH 4 ME"
        throw Error("Too many digits !");
    }
}

function operate () {
    if (result.textContent == 0) {
        result.textContent = display.textContent
    }

    if (display.textContent != 0 && result.textContent != 0) { 
        switch (operator) {
            case '+':
                result.textContent = ( Number(result.textContent) + Number(display.textContent) );
                break;
            case '-':
                result.textContent = ( Number(result.textContent) - Number(display.textContent) );
                break;
            case '*':
                result.textContent = ( Number(result.textContent) * Number(display.textContent) );
                break;
            case '/':
                result.textContent = ( Number(result.textContent) / Number(display.textContent) );
                break;
        }
    }
}

function roundValues () {
   result.textContent = Math.round(result.textContent*100)/100
}

const buttons = document.querySelectorAll('button')
for (let i=0; i < buttons.length; i++) {
    buttons[i].addEventListener(
        'click', () => {
        switch (buttons[i].getAttribute('class')) {
        case "clear":
            clearDisplay ()
            clearValues ()
            break
        case "delete":
            removeValues ()
            break
        case"percent":
            percentValues ()
            break
        case"decimal":
            decimalValues ()
            break
        case"equals":
            operate()
            roundValues()
            clearDisplay ()
            break
        case"operand":
            isNineDigits ()
            value = buttons[i].getAttribute('value')
            displayValues (value)
            break
        case"operator":
            operate()
            roundValues()
            value = buttons[i].getAttribute('value')
            getOperator(value)
            clearDisplay ()
            break
    }})}