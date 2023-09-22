// TODO: add listeners to each button 
// Create add number function

let num_1 = 0;
let num_2 = 0;
let operator = "";


function toDisplay(numButton) {
    num_2 = num_1
    num_1 = numButton;
    let displayNumber = document.getElementById('current-number');
    let newDisplayNumber = document.createElement("h1");
    newDisplayNumber.setAttribute('id', 'current-number');
    newDisplayNumber.textContent = `${num_1}`;
    displayNumber.replaceWith(newDisplayNumber);
}

function chooseOperator(operatorButton) {
    operator = operatorButton
}

//DOM elements
//numbers
const zero = document.getElementById("0");
zero.addEventListener('click', toDisplay.bind(null, 1));
const one = document.getElementById("1");
one.addEventListener('click', toDisplay.bind(null, 1));

const two = document.getElementById("2");
two.addEventListener('click', toDisplay.bind(null, 2));

const three = document.getElementById("3");
three.addEventListener('click', toDisplay.bind(null, 3));

const four = document.getElementById("4");
four.addEventListener('click', toDisplay.bind(null, 4));

const five = document.getElementById("5");
five.addEventListener('click', toDisplay.bind(null, 5));

const six = document.getElementById("6");
six.addEventListener('click', toDisplay.bind(null, 6));

const seven = document.getElementById("7");
seven.addEventListener('click', toDisplay.bind(null, 7));

const eight = document.getElementById("8");
eight.addEventListener('click', toDisplay.bind(null, 8));

const nine = document.getElementById("9");
nine.addEventListener('click', toDisplay.bind(null, 9));

//operators
let plus = document.getElementById("plus");
plus.addEventListener('click', chooseOperator.bind(null, 'plus'));

let equal = document.getElementById("equal");
plus.addEventListener('click', evaluate());


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