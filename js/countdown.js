var usernum;
var printnum;

usernum = parseFloat(window.prompt("Please enter first number:"));

while (usernum > 0){
    printnum = usernum - 1;
    window.document.write(usernum);
    window.document.write("<br>");
    usernum = usernum - 1;
}