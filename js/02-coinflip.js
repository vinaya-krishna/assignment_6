
const CERTAIN_NUMBER = 50;
const HEAD = "head";
const TAIL = "tail";

var cointFlip = Math.floor(Math.random()*100);
var choice = window.prompt("Heads or Tails?");
choice = choice.toLowerCase();

var result = (cointFlip < CERTAIN_NUMBER) ? HEAD : TAIL;

if( result == HEAD && choice == HEAD ) {
    window.alert("The flip was heads and you chose heads...you win!");
}
else if( result == HEAD && choice == TAIL ) {
    window.alert("The flip was heads but you chose tails...you lose!")   
}
else if( result == TAIL && choice == HEAD ) {
    window.alert("The flip was tails but you chose heads...you lose!");
}
else if(result == TAIL && choice == TAIL) {
    window.alert("The flip was tails and you chose tails...you win!");
}
else{
    window.alert("Something wrong");
}