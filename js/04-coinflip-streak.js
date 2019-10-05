var coinFlip;
const HEAD = 0;
const TAIL = 1;

do {
    coinFlip = Math.floor(Math.random() * Math.floor(2));
    if(coinFlip === HEAD) {
        console.log("Heads");
    }
    else {
        console.log("Tails");
    }
} while(coinFlip !== TAIL);

