'use strict';

var pierwszyDiv = document.getElementById("parFirst");
console.log(pierwszyDiv);


console.log(pierwszyDiv.parentNode);
console.log(pierwszyDiv.parentElement);

console.log(document.documentElement.parentNode); /*uwzglednia wszystkie znaczniki*/
console.log(document.documentElement.parentElement);/*uwzględnia tylko obrębie html'a*/

console.log("&&&&");

console.log(pierwszyDiv.childNodes);
console.log(pierwszyDiv.childNodes[3]);
console.log(pierwszyDiv.lastChild);
console.log(pierwszyDiv.firstChild);

console.log("&&&&");
var pierwszyChild = pierwszyDiv.childNodes[0];
console.log(pierwszyChild);
console.log(pierwszyChild.nextSibling);

console.log("&&&&");
console.log(pierwszyDiv.nodeType);