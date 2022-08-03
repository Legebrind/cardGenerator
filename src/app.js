/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
let symbol = ["&hearts;", "&diams;", "&clubs;", "&spades;"];

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let num = Math.floor(Math.random() * numeros.length);
  let sym = Math.floor(Math.random() * symbol.length);
  document.querySelectorAll(".number").forEach(element => {
    element.innerHTML = numeros[num];
  });
  document.querySelectorAll(".symbol").forEach(element => {
    element.innerHTML = symbol[sym];
  });
};
