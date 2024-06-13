function opnA() {
    let ventanaA = document.querySelector('#ventana-A');
    ventanaA.style.display = "block";
    ventanaP.style.display = "none";
}

function opnB() {
    let ventanaB = document.querySelector('#ventana-B');
    ventanaB.style.display = "block";
    ventanaP.style.display = "none";
}

function opnC() {
    let ventanaC = document.querySelector('#ventana-C');
    ventanaC.style.display = "block";
    ventanaP.style.display = "none";
}

function toggleMenu() {
    let menu = document.querySelector('.menu');
    menu.classList.toggle('menu-open');
}

function Inicio() {
    window.location.href = 'index.html';
}

function Delete(delete_Box) {
    let contenedor = delete_Box.closest('.product-container');
    let windowContainer = contenedor.id.split('-')[1];

    let idDelete = contenedor.id;

    contenedor.remove();

    let productContainers = document.querySelectorAll(`#ventana-${windowContainer} .product-container:not(.new)`);

    productContainers.forEach((container, index) => {
        let nuevoId = `box-${windowContainer}-${index + 1}`;
        container.id = nuevoId;
    });

    newLocal(productContainers, idDelete);
}