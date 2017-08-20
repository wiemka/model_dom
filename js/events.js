' use strict';

function klikHeader() {
    console.log("Kliknęłaś w header");
    //alert("Klink"); //dodaje alert w sensie wyskakującego okienka
}

function alarm(event) {
    event.preventDefault(); //zapobiegamy domyślnej akcji
    console.log("Kliknięto w link");
    console.log(event.type);
}

var secondLink = document.getElementsByTagName("a")[1];

secondLink.onclick = alarm;

document.getElementById("title_header").onclick = klikHeader; //wywołaj funkcję na elemencie o id "title_header"

var paragraf = document.getElementsByTagName("p")[0];

paragraf.addEventListener("click", klikHeader);

//document.getElementsByTagName("p")[0].addEventListener("click", klikHeader); //skrócona wersja


