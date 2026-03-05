// Typing animation

const text = ["Web Developer", "Python Programmer", "Frontend Developer"];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];

letter = currentText.slice(0, ++index);

document.querySelector(".typing").textContent = letter;

if(letter.length === currentText.length){

count++;
index = 0;

setTimeout(type,1000);

}else{

setTimeout(type,100);

}

}

type();



// DARK MODE

const toggle = document.getElementById("mode-toggle");

toggle.onclick = function(){

document.body.classList.toggle("dark");

}