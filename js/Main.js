
function opnA() {
    ventanaA.style.display = "block";
    ventanaP.style.display = "none";
}

function opnB() {
    ventanaB.style.display = "block";
    ventanaP.style.display = "none";
}

function opnC() {
    ventanaC.style.display = "block";
    ventanaP.style.display = "none";
}

function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('menu-open');
}

function Inicio() {
    location.reload();
}