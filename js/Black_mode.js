function blackMode() {
    var body = document.body;
    var links = document.getElementsByTagName('a');
    var enca = document.querySelector('.encabezado');
    var emergente = document.querySelector(".emergente");
    var bor = document.querySelectorAll('.der a');
    var caja = document.querySelectorAll('.product-container');

    var menu = document.querySelectorAll('.menu');
    var btn_menu = document.querySelectorAll('.toggle-menu-btn');

    for(var i = 0; i < links.length; i++) {
        links[i].classList.toggle("darkmode");
    }

    caja.forEach(function(element) {
        element.classList.toggle("darkmode");
    });

    menu.forEach(function(element) {
        element.classList.toggle("darkmode");
    });

    btn_menu.forEach(function(element) {
        element.classList.toggle("darkmode");
    });

    body.classList.toggle("darkmode");
    emergente.classList.toggle("darkmode");
    enca.classList.toggle("darkmode");
    bor.classList.toggle("darkmode");
}