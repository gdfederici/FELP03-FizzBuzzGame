/*
// IT- V. 1.0
// EN- V. 1.0
function playGame () {
    var lista="<ul>";
    for (i=1; i<=100; i++) {
        lista += "<li>" + i + " ";
        if (i%3==0) { lista += "<span class='fizz'>Fizz</span>";}
        if (i%5==0) { lista += "<span class='buzz'>Buzz</span>";}
        lista += "</li>";
    }
    lista += "</ul>";
    document.getElementById("fizzbuzzgame").innerHTML = lista;
}
*/

// IT- V. 2.0, approccio funzionale
// EN- V. 2.0, functional approach
var allNumbers = [];
var endGame="";

function createGame(howMany) {
    for (i=1; i<=howMany; i++) { allNumbers.push(i); }
}
function isFizz(num) {
    if (num%3 == 0) { return "<span class='fizz'>Fizz</span>"; }
    else { return "";}
}
function isBuzz(num) {
    if (num%5 == 0) { return "<span class='buzz'>Buzz</span>"; }
    else { return "";}
}
function myCheck(value) {
    endGame += value + " " + isFizz(value) + isBuzz(value) + "<br>"; 
}
function letsSee() {
    allNumbers.forEach(myCheck);
    document.getElementById("fizzbuzzgame").innerHTML = endGame;
}
function playGame() {
    createGame(100);
    letsSee();
}