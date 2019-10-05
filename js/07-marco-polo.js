for(var iterNum = 1; iterNum <= 100; iterNum++) {
    var printStr = "";
    console.log("Number : " + iterNum);
    if(iterNum % 3 == 0){
        printStr += "Marco! ";
    }
    if(iterNum % 5 == 0){
        printStr += "Polo!";
    }
    if(printStr == "")
        continue;
    else
        console.log(printStr);
}