
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
    window.location.href = 'index.html';
}

function Delete(delete_Box) {
    // Obtener el contenedor padre del botón de eliminar
    var contenedor = delete_Box.closest('.product-container');
    // Eliminar el contenedor
    contenedor.remove();
}
