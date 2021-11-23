let myStr = "dit is een variabele van het datatype string"; //dit is een variabele van het datatype string, waarom?   ___Omdat het een tekst is.___  vul je antwoord in op de lijn
let myInt = 3; //dit is een variabele van het datatype ___integer  waarom? ___ omdat het een getal is.__  vul je antwoorden in op de lijn

//Waarom staat er let voor de variabelen? ____ Omdat je de variabelen moet declareren.___  vul je antwoord in op de lijn

function getName(naam){ //In op welke regel in de HTML file wordt deze functie aangeroepen ______17________ vul je antwoord in op de lijn

    // vul in wat naam is: naam is de ___Parameter_______ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde ____________ de waarde noemen we een ___Argument______ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen

    alert(naam); //dit toont een ___Melding____ op het scherm met de tekst ____naam_____ deze tekst staan op regel ____17___ van de HTML vul je antwoord in op de lijn
}

function hideMe(){ //mag je de naam van de functie veranderen? _____nee______ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // wat gebeurd er in deze functie? ______Als je op de plaatjes klikt veranderd het steeds om en om._____________ en waar wordt deze in je HTML aangeroepen? ___22 t/m 26_________ vul je antwoorden in op de lijn
}

function show(){ //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML ___25________ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? ______Selecteerd de juiste id van een element._____________ vul je antwoord in op de lijn
    document.getElementById("show").style.display = "none";     
    // wat gebeurd er in deze functie? __________Als je op de plaatjes klikt veranderd het steeds om en om._________ vul je antwoord in op de lijn
}

function rekenen(getal){ //In op welke regel in de HTML file wordt deze functie aangeroepen ____32__________ en wanneer wordt deze aangeroepen _____als je op het button klikt._____ vul je antwoord in op de lijn

    let antwoord = myInt + getal; //waar komt de waarde van myInt vandaan ___regel 2, myInt=3___________ en waar komt de waarde van getal vandaan? _____HTML regel 32_______ vul je antwoord in op de lijn

    document.querySelector(".som").innerHTML = antwoord;  // wat doet querySelector? _____Selecteerd de juiste class______________  Wat is antwoord hier? vul je antwoorden in op de lijn
    
    //wat gebeurt er in deze functie? _________Berekent myInt + getal =____________ vul je antwoord in op de lijn

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? _________De uitkomst veranderd.____________ vul je antwoord in op de lijn
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt?
}

function setColor(element, kleur, size){ //In op welke regel in de HTML file wordt deze functie aangeroepen ______regel 38 en 44.________ vul je antwoord in op de lijn

    element.style.color = kleur; //waar komt de waarde van element vandaan _____HTML regel 38_________ en waar komt de waarde van kleur vandaan? ____'aqua'________ vul je antwoord in op de lijn
    element.style.fontSize = size; //waar komt de waarde van szie vandaan? _____HTML regel 44_______ vul je antwoord in op de lijn

    //wat gebeurt er in deze functie? _______verandert de tekstkleur/style/grootte.______________ vul je antwoord in op de lijn
}

getName(myStr);
// wat gebeurd er hierboven ____als je de pagina laad komt er een melding  bovenin het scherm met de tekst "dit is een variabele van het datatype strinhg"_______ en wanneer gebeurt dat ____als je op de site klikt of op de refresh knop.______ (tip ververs je pagina eens in je brouwser? vul je antwoord in op de lijn.
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? _________de tekst in de melding verandert__________ vul je antwoord in op de lijn.