
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

function blackMode() {
    var body = document.body;
    var links = document.getElementsByTagName('a');
    var enca = document.querySelector('.encabezado');
    var fondo = document.querySelector('.fondo');
    var bor = document.querySelectorAll('.der a');
    var caja = document.querySelectorAll('.product-container');

    for(var i = 0; i < links.length; i++) {
        links[i].classList.toggle("darkmode");
    }

    caja.forEach(function(element) {
        element.classList.toggle("darkmode");
    });

    body.classList.toggle("darkmode");
    enca.classList.toggle("darkmode");
    fondo.classList.toggle("darkmode");
    bor.classList.toggle("darkmode");
}

function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}
