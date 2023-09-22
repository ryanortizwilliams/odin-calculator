// TODO: add listeners to each button 
// Create add number function

let firstNumber = "";
let secondNumber = "";
let operator = "";
let displayNum = "";
let operatorButtonPressed = false;

function toDisplay(numButton) {
    if (displayNum === ""){
        displayNum = numButton;
    } else {
        displayNum += numButton;
    }
   
    //get current display
    let displayNumber = document.getElementById('current-number');
    let newDisplayNumber = document.createElement("h1");
    // replace with new display
    newDisplayNumber.setAttribute('id', 'current-number');
    newDisplayNumber.textContent = `${displayNum}`;
    displayNumber.replaceWith(newDisplayNumber);
    // place displayNum into correct number position
    if (operatorButtonPressed) {
        secondNumber = displayNum;
    } else {
        firstNumber = displayNum;
    }

    //when equal button is pressed it should set operator button pressed to false so the asnwer goes to first number
}

function chooseOperator(operatorButton) {
    operator = operatorButton
    // following number should be second number
    operatorButtonPressed = true;

    //reset displayNum so the next button press will start a new number
    displayNum = "";
}

function evaluate() {
    //number strings as Numbers
    num1 = Number(firstNumber);
    num2 = Number(secondNumber);
    switch(operator){
        case 'add' : 
        num1 += num2;
        // put in firstNumber 
        break;
    }
    operatorButtonPressed = false;
    displayNum = "";
    toDisplay(String(num1));
}

//DOM elements
//numbers
const zero = document.getElementById("0");
zero.addEventListener('click', toDisplay.bind(null, "0"));

const one = document.getElementById("1");
one.addEventListener('click', toDisplay.bind(null, "1"));

const two = document.getElementById("2");
two.addEventListener('click', toDisplay.bind(null, "2"));

const three = document.getElementById("3");
three.addEventListener('click', toDisplay.bind(null, "3"));

const four = document.getElementById("4");
four.addEventListener('click', toDisplay.bind(null, "4"));

const five = document.getElementById("5");
five.addEventListener('click', toDisplay.bind(null, "5"));

const six = document.getElementById("6");
six.addEventListener('click', toDisplay.bind(null, "6"));

const seven = document.getElementById("7");
seven.addEventListener('click', toDisplay.bind(null, "7"));

const eight = document.getElementById("8");
eight.addEventListener('click', toDisplay.bind(null, "8"));

const nine = document.getElementById("9");
nine.addEventListener('click', toDisplay.bind(null, "9"));

//operators
let plus = document.getElementById("plus");
plus.addEventListener('click', chooseOperator.bind(null, 'add'));

let equal = document.getElementById("equal");
equal.addEventListener('click', evaluate);



// TODO: get plus working properly