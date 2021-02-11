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

// IT- Nel caso la parola per i numeri divisibili per 5 e 3 fosse diversa, es. Pop, allora occorre un controllo in più.
// EN- If the word for the numbers multiple of 5 and 3 is different, ex. Pop, then you need one more control.
/*
function playGame2 () {
    var lista="<ul>";
    for (i=1; i<=100; i++) {
        lista += "<li>" + i + " ";
        if (i%5==0) { 
            if (i%3==0) { lista += "<span class='pop'>Pop</span>";}
                else { lista += "<span class='buzz'>FizzBuzz</span>"; }
        }
        if (i%3==0) { lista += "<span class='fizz'>Fizz</span>";}
        lista += "</li>";
    }
    lista += "</ul>";
    document.getElementById("fizzbuzzgame").innerHTML = lista;
}
*/