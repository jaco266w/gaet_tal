"use strict";
window.addEventListener("load", start);


let max = 100;
const gaet = document.querySelector("#gaet");
const knap = document.querySelector("#knap");
const antal = document.querySelector("#antal");
const feed = document.querySelector("#feed");
const reset = document.querySelector("#reset");
const won = document.querySelector("#won");

let antalTal;
let ranT;

reset.addEventListener("click", start);
knap.addEventListener("click", klik)

function start() {
    console.log("start");
    gaet.value = " "
    antalTal = 0;
    antal.textContent = antalTal
    feed.textContent = "Klar til dit Gæt"
    won.classList.add("gone");
    
    ranT = Math.floor(Math.random() * (max + 1));
    console.log(ranT);
}

function klik() {
    console.log("klik");
    let gaet2 = parseInt(gaet.value);
    if (gaet2 === ranT) {
        feed.textContent = "Yeah Boiiii!!! Du gættede Rigtigt"
        won.classList = " ";
        confetti ({
            particleCount: 2000,
            spread: 270,
            angle: 270,
            origin: {y: -0.1}
        })
    }
    else {
        antalTal ++;
        antal.textContent = antalTal
        hL();
    }
}

function hL (){
    if (gaet.value > ranT) {
        feed.textContent = "Du har gættet for højt";
    }
    else {
        feed.textContent = "Du har gættet for lavt";
    }

}




