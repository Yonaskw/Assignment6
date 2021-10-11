var coinflip;

for(let i = 0; i < 10; i++){
    coinflip = parseFloat(Math.floor(Math.random() * 2));
    if(coinflip == 1){
        window.document.write("Tails <br>");
        
    }
    else{
        window.document.write("Heads <br>");
    }
}