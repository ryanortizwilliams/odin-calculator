// TODO: add listeners to each button 
// Create add number function

let num_1 = 0;
let num_2 = 0;
let operator = "";


function toDisplay(numButton) {
    num_2 = num_1
    num_1 = numButton;
}

function chooseOperator(operatorButton) {
    operator = operatorButton
}

//DOM elements

//display number
let displayNumber = document.getElementById('current-number');


//numbers
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9")

//operators
let plus = document.getElementById("plus");
plus.addEventListener('click', chooseOperator.bind(null, 'plus'));



// operator functions 
function add(numOne, numTwo) {
    numOne += numTwo;
    toDisplay(numOne)
}

function minus(numOne, numTwo) {
    numOne -= numTwo;
    toDisplay(numOne)
}


function evaluate() {
    switch(operator){
        case 'plus' : 
        add(num_1, num_2);
        break;
    }
}