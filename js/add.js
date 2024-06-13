function add(botonAgregar, here) {
    var windowNew = document.querySelector(".shadow");
    windowNew.style.display = "block";

    botonAgregar = botonAgregar.parentNode;

    var emergenteContainer = document.querySelector(".emergente");
    var addImgInput = emergenteContainer.querySelector(".addImg");
    var selectedImage = null;

    function handleImageChange(event) {
        var file = event.target.files[0];
        if (file) {
            selectedImage = URL.createObjectURL(file);
        } else {
            selectedImage = null;
        }
    }

    addImgInput.addEventListener('change', handleImageChange);

    var titleInput = emergenteContainer.querySelector(".title");
    var priceInput = emergenteContainer.querySelector(".price");
    var confirmButton = emergenteContainer.querySelector(".crear");

    confirmButton.removeEventListener('click', confirmButtonClickHandler);

    var addFunctionExecuted = false;

    here = here.parentNode.parentNode.parentNode;

    let containerNext = here.querySelectorAll('.product-container');
    let idNext = containerNext[containerNext.length - 2].id;
    let idParts = idNext.split('-');
    let idWindows = idParts[1];
    let idContainer = parseInt(idParts[2]) + 1;

    function confirmButtonClickHandler(event) {
        event.preventDefault();
        event.stopPropagation();

        if (!addFunctionExecuted) {
            var nuevoTitulo = escapeHTML(titleInput.value);
            var nuevoPrecio = escapeHTML(priceInput.value);

            var nuevoProductoContainer = createProductContainer(nuevoTitulo, nuevoPrecio, selectedImage, idContainer,idWindows);

            // Obtener el contenedor padre
            var contenedorPadre = botonAgregar.parentNode.parentNode;

            // Comprobar si hay algún product-container existente
            var ultimoProductContainer = contenedorPadre.querySelector('.product-container:last-of-type');

            if (ultimoProductContainer) {
                // Insertar antes del último product-container
                contenedorPadre.insertBefore(nuevoProductoContainer, ultimoProductContainer);
            } else {
                // Si no hay ningún product-container, añadir al final del contenedor padre
                contenedorPadre.appendChild(nuevoProductoContainer);
            }


            titleInput.value = '';
            priceInput.value = '';

            windowNew.style.display = "none";

            addFunctionExecuted = true;
        }
    }
    confirmButton.addEventListener('click', confirmButtonClickHandler);
}

function createProductContainer(titulo, precio, selectedImage, idContainer, idWindows) {
    var emergente = document.querySelector(".emergente");
    var productContainer = document.createElement('div');
        productContainer.setAttribute('id', 'box-'+idWindows+'-'+idContainer);

    let productStorage = document.createElement('div');
        productStorage.classList.add('product-storage');

    productStorage.textContent = "Existencia: 0";

    if (emergente.classList.contains('darkmode')) {
        productContainer.classList.add('product-container','darkmode');
    } else {
        productContainer.classList.add('product-container');
    }

    var productImage = document.createElement('img');
    if (selectedImage) {
        productImage.src = selectedImage;
    } else {
        productImage.src = 'img/default-product-image.png';
    }
    productImage.setAttribute('alt', titulo);
    productImage.classList.add('product-image');

    var productDetails = document.createElement('div');
    productDetails.classList.add('product-details');

    var productTitle = document.createElement('div');
    productTitle.classList.add('product-title');
    productTitle.textContent = titulo;

    var productPrice = document.createElement('div');
    productPrice.classList.add('product-price');
    productPrice.textContent = `Q.${precio}`;

    // Crear el primer elemento div con la clase "add"
    var firstDiv = document.createElement('div');
    firstDiv.classList.add('add');
    firstDiv.onclick = function() {
        set(this);
    };
    var imgAdd = document.createElement('img');
    imgAdd.src = 'img/Añadir.png';
    firstDiv.appendChild(imgAdd);

    // Crear el segundo elemento div con las clases "delete" y "add"
    var secondDiv = document.createElement('div');
    secondDiv.classList.add('delete', 'add');
    secondDiv.onclick = function() {
        Delete(this);
    };
    var imgDelete = document.createElement('img');
    imgDelete.src = 'img/delete.png';
    secondDiv.appendChild(imgDelete);

    productDetails.appendChild(productTitle);
    productDetails.appendChild(productPrice);
    
    productDetails.appendChild(firstDiv);
    productDetails.appendChild(secondDiv);

    productContainer.append(productStorage, productImage, productDetails);

    const productHTML = productContainer.innerHTML;
    localStorage.setItem(`product-${productContainer.id}`, productHTML);

    return productContainer;
}

function escapeHTML(input) {
    return input.replace(/[&<>"']/g, '');
}

function Exit(){
    var windowNew = document.querySelector(".shadow");
    var emergenteContainer = document.querySelector(".emergente");
    var titleInput = emergenteContainer.querySelector(".title");
    var priceInput = emergenteContainer.querySelector(".price");
    
    titleInput.value = '';
    priceInput.value = '';
    windowNew.style.display = "none";
}

function Img() {
    document.querySelector(".addImg").click();
}