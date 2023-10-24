// IL CAFFÈ
let tazzeVendute = prompt("Quante tazze di caffè hai venduto oggi?");
let prezzoPerTazza = prompt("Qual è il prezzo di una tazza di caffè?");

let guadagniGiornalieri = tazzeVendute * prezzoPerTazza;

alert("Hai guadagnato €" + guadagniGiornalieri + " oggi");



// IL CALCOLATORE DI ETÀ
let annoDiNascita = prompt("Inserisci il tuo anno di nascita:");
let annoCorrente = 2023;


let eta = annoCorrente - annoDiNascita;


alert("La tua età è " + eta + " anni");



// IL CONVERTITORE DI TEMPERATURA
let temperaturaFahrenheit = prompt("Inserisci una temperatura in gradi Fahrenheit:");

let temperaturaCelsius = (temperaturaFahrenheit - 32) * 5/9;


alert("La temperatura in gradi Celsius è " + temperaturaCelsius + "°C.");



// MEDIA VOTI 3 STUDENTI
let votoStudente1 = prompt("Inserisci il voto del primo studente:");
let votoStudente2 = prompt("Inserisci il voto del secondo studente:");
let votoStudente3 = prompt("Inserisci il voto del terzo studente:");

let media = (votoStudente1 + votoStudente2 + votoStudente3) / 3;

alert("La media dei voti è: " + media);



// TOTALE CONTO
let totaleConto = prompt("Inserisci il totale del conto:");
let percentualeMancia = prompt("Inserisci la percentuale di mancia desiderata:");

let totaleMancia = totaleConto * percentualeMancia / 100;

alert("Il totale del conto con la mancia è: €" + totaleConto + " +" + " €" + totaleMancia);



// CHIEDERE ETÀ
let eta = prompt("Inserisci la tua età:");

if (eta < "13") {
    alert("Puoi vedere solo film con classificazione PG");
} else if(eta >= "13" && eta < "17") {
    alert("Puoi vedere film con classificazione PG e PG-13");
} else {
    alert("Puoi vedere tutti i film");
}



// CALCOLATORE SCONTI
let prezzoOriginale = prompt("Inserisci il prezzo originale dell'articolo:");
let percentualeSconto = prompt("Inserisci la percentuale di sconto:");

let sconto = (prezzoOriginale * percentualeSconto) / 100;

let prezzoFinale = prezzoOriginale - sconto;


if (percentualeSconto > 50) {
    alert("Ottimo affare! Il prezzo finale è: €" + prezzoFinale + " con uno sconto di €" + sconto);
} else {
    alert("Il prezzo finale è: €" + prezzoFinale + " con uno sconto di €" + sconto);
}



// CALCOLATORE BMI
let peso = prompt("Inserisci il tuo peso (in chilogrammi):");

let altezza = prompt("Inserisci la tua altezza (in metri):");

let bmi = peso / (altezza * altezza);


if (bmi < 18.5) {
    alert("Sei sottopeso");
} else if (bmi >= 18.5 && bmi <= 24.9) {
    alert("Hai un peso normale");
} else {
    alert("Sei sovrappeso");
}



// ANNO BISESTILE
let anno = prompt("Inserisci un anno:");

if ((anno % 4 === 0 && anno % 100 !== 0) || anno % 400 === 0) {
    alert("L'anno " + anno + " è un anno bisestile.");
} else {
    alert("L'anno " + anno + " non è un anno bisestile.");
}



// ASSEGNATORE VOTI
let punteggio = prompt("Inserisci il tuo punteggio del test:");

let voto;
if (punteggio >= 90) {
    voto = '10';
} else if (punteggio >= 80) {
    voto = '8';
} else if (punteggio >= 70) {
    voto = '7';
} else if (punteggio >= 60) {
    voto = '6';
} else {
    voto = '5';
}


alert("Il tuo voto è: " + voto);