/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.getElementById("add1").value);
    let addNumber2 = Number(document.getElementById("add2").value);

    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2
}

const subtractNumbers = function() {
    let subNumber1 = document.getElementById("subtract1").value;
    let subNumber2 = document.getElementById("subtract2").value;

    document.querySelector("#difference").value = subtract(subNumber1, subNumber2)
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let multiNumber1 = document.getElementById("factor1").value;
    let multiNumber2 = document.getElementById("factor2").value;
    
    document.querySelector("#product").value = multiply(multiNumber1, multiNumber2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers)

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

function divideNumbers() {
    let divNumber1 = document.getElementById("dividend").value;
    let divNumber2 = document.getElementById("divisor").value;
    
    document.querySelector("#quotient").value = divide(divNumber1, divNumber2);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers)

/* Decision Structure */
function getTotal() {
    let subtotal = document.getElementById("subtotal").value;

    if (document.getElementById("member").checked) {
        subtotal *= 0.8
    }

    let total = Math.round(subtotal * 100) / 100;
    document.getElementById("total").textContent = `$ ${total}`;
    
}
document.querySelector("#getTotal").addEventListener("click", getTotal)

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById("array").textContent = numbers;

/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numbers.filter(number => number % 2 != 0);

/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbers.filter(number => number % 2 == 0);

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numbers.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
const multipliedTwo = numbers.map( number => number * 2);
document.querySelector("#multiplied").innerHTML = multipliedTwo;

/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML = multipliedTwo.reduce((sum, number) => sum + number);