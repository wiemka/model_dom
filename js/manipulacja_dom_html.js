'use strict';

var mainHeader = document.getElementById("main_header");
//przypisujemy nagłówek strony do zmiennej

var tresc = mainHeader.innerHTML; // pobieranie treści
console.log(tresc);

mainHeader.innerHTML = "Treść nagłówka"; //dodajemy treść do nagłówka usuwając to co w nim jest!!! nadpisuje

var tresc = mainHeader.innerHTML;
console.log(tresc);

var link = document.getElementsByClassName("link")[0]; //przypisujemy pierwszy link do zmiennej

console.log(link);

link.href = "http://akademia108.pl"; //nadpisujemy atrybut href w link

link.className = "nowa_klasa"; //nadpisujemy nazwę klasy w linku

link.style.color = "#11aa22"; //dodajemy styl linku
