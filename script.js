let menuBar = document.querySelector("#menuBar");
let nav = document.querySelector("nav");
let ul = document.querySelectorAll(".navigation");

menuBar.addEventListener("click", menu );

function menu(){
   
    if(nav.style.display === "none"){
        nav.style.display = "block";
        ul[0].style.display = "block";
        ul[1].style.display = "block";
    } else {
        nav.style.display = "none"; 
        ul[0].style.display = "none";
        ul[1].style.display = "none";
    }
}