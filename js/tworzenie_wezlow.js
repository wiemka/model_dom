'use strict';

var istniejacyWezel = document.getElementById("parFirst").children[3];

console.log(istniejacyWezel);

var newElement = document.createElement("p"); //stwórz nowy element p

var newElementContent = document.createTextNode("To jest nowy paragraf dodany w JS") // stwórz tekst w nowym elemencie p

newElement.appendChild(newElementContent); //dodaj tekst do elementu p

istniejacyWezel.appendChild(newElement); //wstawia do html'a

console.log(newElement);

istniejacyWezel.removeChild(newElement);


