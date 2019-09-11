var Small = prompt("Hoeveel small pizza's wilt u?");
var Medium = prompt("hoeveel medium pizza's wilt u?");
var Large = prompt("Hoeveel large pizza's wilt u?");

var getal = 3;
var getal = 5;
var getal = 7;

var prijss = (parseInt(Small)) * 3
var prijsm = (parseInt(Medium))* 5
var prijsl = (parseInt(Large)) * 7

document.write("Prijs Small Pizza- €"  + prijss);
document.write("<br/>")
document.write("Prijs Medium Pizza- €" + prijsm);
document.write("<br/>")
document.write("Prijs Large Pizza- €" + prijsl);
document.write("<br/>")
document.write("Totale Prijs- &euro;" + (prijss + prijsm + prijsl))