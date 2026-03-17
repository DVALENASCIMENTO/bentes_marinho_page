function iniciarSite(){

document.getElementById("popup").style.display = "none";

document.getElementById("conteudo").style.display = "block";

}



function toggleMenu(){

let menu = document.getElementById("menu");
let hamburger = document.getElementById("hamburger");

if(menu.style.display === "flex"){

menu.style.display = "none";
hamburger.classList.remove("active");

}else{

menu.style.display = "flex";
hamburger.classList.add("active");

}

}