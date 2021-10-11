var firstint;
var secint;
var again = "y";


do{
    firstint = parseFloat(window.prompt("Please enter first number:"));
    secint = parseFloat(window.prompt("Please enter second number:"));

    if(firstint > secint){
        window.document.write(firstint + " is bigger");
    }
    else if (firstint < secint){
        window.document.write(secint + " is bigger");
    }
    else {
        window.document.write("They are equal");
    }
    
    again = window.prompt("Repeat entries? Y or N?");
} while (again === "y");