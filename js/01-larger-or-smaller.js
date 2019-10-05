
var numberOne;
var numberTwo;

numberOne = window.prompt("Enter a number");
numberTwo = window.prompt("Enter another number");

numberOne = parseInt(numberOne, 10);
numberTwo = parseInt(numberTwo, 10);

if(!isNaN(numberOne) && !isNaN(numberTwo)) {
    if(numberOne > numberTwo) {
        window.document.write(numberOne + " is Greater");
    }
    else if(numberOne < numberTwo) {
        window.document.write(numberTwo + " is Greater");
    }
    else {
        window.document.write(numberOne + " and " + numberTwo + " are Equal");
    }
}
else{
    window.alert("Invalid Entry");
}
