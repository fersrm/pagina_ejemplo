const hambur= document.getElementById("MenuHambur");
const body = document.getElementById("body");
const Menu = document.getElementById("MenuMobile");
const Header = document.getElementById("header");


hambur.onclick = function(){
    body.classList.toggle("activo");
    Menu.classList.toggle("activo");
    hambur.classList.toggle("activo");
    Header.classList.toggle("activo");
}