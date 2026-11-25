let menuBar = document.querySelector("#menuBar");
let nav = document.querySelector("nav");
let ul = document.querySelectorAll(".navigation");

menuBar.addEventListener("click", menu );

function menu(){
   
    nav.classList.toggle("menuEsconde");

}