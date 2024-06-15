let firstValue, secondValue = 0;
let operator = "";

function getSum (a,b) {
    return a+b;
}

function getDifference (a,b) {
    return a-b;
}

function getProduct (a,b) {
    return a*b;
}

function getDivision (a,b) {
    return a/b;
}

function operate (x,y,z) {
    firstValue = x;
    operator = y;
    secondValue = z;
    switch(operator) {
        case "+": 
            getSum(firstValue,secondValue); 
            break;
        case "-": 
            getDifference(firstValue,secondValue);
            break;
        case "*": 
            getProduct(firstValue,secondValue);
            break;
        case "/": 
            getDivision(firstValue,secondValue);     
    }

}