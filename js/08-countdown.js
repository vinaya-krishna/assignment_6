var counter
counter = window.prompt("Enter a number");

counter = parseInt(counter, 10);

while(counter >= 0) {
    window.document.write("Counter : "+ counter+"<br>");
    window.alert("Counter : "+ counter);
    counter--;
}