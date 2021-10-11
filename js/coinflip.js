var coinFlip = Math.random();
var choice = window.prompt("Would you like Heads or Tails? Type Heads for Heads and Tails for tails! ");
var result;

if (Math.random() > coinFlip) {

    result = "Heads";
} else {
  result = "Tails";
}

if (choice == "Tails") {
    if (result == "Tails") {
        window.document.write("The flip was tails and you chose tails...you win!");
    } else {
        window.document.write("The flip was tails but you chose heads...you lose!");
    }
}


if (choice == "Heads") {
    if (result == "Heads") {
        document.write("The flip was heads and you chose heads...you win!");
    } else {
        window.document.write("The flip was heads but you chose tails...you lose!");
    }
}

