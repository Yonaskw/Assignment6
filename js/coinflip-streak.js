var coinFlip;


do{
    coinFlip = parseFloat(Math.floor(Math.random()));
    if(coinFlip == 0){
        window.document.write("Heads <br>");
        
    }
    else{
        window.document.write("Tails.. Game OVER!! <br>");
    }

} while (coinFlip != 1)