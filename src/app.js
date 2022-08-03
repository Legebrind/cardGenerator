/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
let symbol = ["&hearts;", "&diams;", "&clubs;", "&spades;"];
function nuevaCarta() {
  let num = Math.floor(Math.random() * numeros.length);
  let sym = Math.floor(Math.random() * symbol.length);
  document.querySelectorAll(".number").forEach(element => {
    element.innerHTML = numeros[num];
  });
  document.querySelectorAll(".symbol").forEach(element => {
    element.innerHTML = symbol[sym];
  });
}

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  nuevaCarta();
};

document.querySelector("#nuevaCarta").addEventListener("click", nuevaCarta);

let myInterval;
document.querySelector("#inicio").addEventListener("click", function() {
  if (myInterval != null) {
    clearInterval(myInterval);
  }
  myInterval = setInterval(nuevaCarta, 5000);
});

document.querySelector("#parada").addEventListener("click", function() {
  clearInterval(myInterval);
  myInterval = null;
});

document.querySelector("#opTamano").addEventListener("change", function() {
  let carta = document.querySelector(".outline");
  switch (this.options[this.selectedIndex].value) {
    case "1":
      carta.style.width = "110px";
      carta.style.height = "168px";
      break;
    case "2":
      carta.style.width = "220px";
      carta.style.height = "336px";
      break;
    case "3":
      carta.style.width = "440px";
      carta.style.height = "672px";
      break;
  }
});
