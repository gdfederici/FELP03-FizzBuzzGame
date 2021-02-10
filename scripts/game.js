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