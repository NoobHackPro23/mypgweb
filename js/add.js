function add(botonAgregar) {
    var windowNew = document.querySelector(".shadow");
    windowNew.style.display = "block";

    botonAgregar = botonAgregar.parentNode;

    // Selecciona el contenedor con la clase "emergente"
    var emergenteContainer = document.querySelector(".emergente");

    // Obtener el input de tipo file para la imagen del producto
    var addImgInput = emergenteContainer.querySelector(".addImg");

    // Variable para almacenar la imagen seleccionada por el usuario
    var selectedImage = null;

    // Función para manejar el cambio en la selección de imagen
    function handleImageChange(event) {
        var file = event.target.files[0]; // Obtener el archivo de imagen seleccionado
        if (file) {
            // Crear una URL para la imagen seleccionada y asignarla a la variable selectedImage
            selectedImage = URL.createObjectURL(file);
        } else {
            // Si no se selecciona ningún archivo, establecer selectedImage en null
            selectedImage = null;
        }
    }

    // Agregar evento de cambio al input de tipo file para manejar la selección de imagen
    addImgInput.addEventListener('change', handleImageChange);

    // Obtener input para el título del producto
    var titleInput = emergenteContainer.querySelector(".title");

    // Obtener input para el precio del producto
    var priceInput = emergenteContainer.querySelector(".price");

    // Obtener el botón de confirmar
    var confirmButton = emergenteContainer.querySelector(".crear");

    // Eliminar el evento de clic anterior si existe
    confirmButton.removeEventListener('click', confirmButtonClickHandler);

   // Variable de estado para controlar si la función add ya se ha ejecutado
    var addFunctionExecuted = false;

    // Definir la función para manejar el evento de clic en el botón de confirmar
    function confirmButtonClickHandler(event) {
        event.preventDefault(); // Evita que el formulario se envíe

        // Detener la propagación del evento para evitar llamadas duplicadas a la función add
        event.stopPropagation();

        // Verificar si la función add ya se ha ejecutado
        if (!addFunctionExecuted) {
            var nuevoTitulo = titleInput.value;
            var nuevoPrecio = priceInput.value;

            // Crear un contenedor de producto con los detalles ingresados por el usuario
            var nuevoProductoContainer = createProductContainer(nuevoTitulo, nuevoPrecio, selectedImage);

            // Agregar el contenedor de producto al DOM después del contenedor padre original
            botonAgregar.parentNode.parentNode.insertBefore(nuevoProductoContainer, botonAgregar.parentNode);

            // Limpiar los inputs después de crear cada contenedor
            titleInput.value = '';
            priceInput.value = '';

            // Ocultar la ventana emergente
            windowNew.style.display = "none";

            // Marcar que la función add se ha ejecutado
            addFunctionExecuted = true;
        }
    }

    // Agregar evento de click al botón de confirmar
    confirmButton.addEventListener('click', confirmButtonClickHandler);
}

// Función para crear un contenedor de producto con los detalles dados
function createProductContainer(titulo, precio, selectedImage) {
    var emergente = document.querySelector(".emergente");
    var productContainer = document.createElement('div');

    if (emergente.classList.contains('darkmode')) {
        productContainer.classList.add('product-container','darkmode');
    } else {
        productContainer.classList.add('product-container');
    }

    var productImage = document.createElement('img');
    if (selectedImage) {
        productImage.src = selectedImage; // Asignar la imagen seleccionada como fuente de la imagen
    } else {
        productImage.src = 'img/default-product-image.png'; // Usar una imagen predeterminada si no se ha seleccionado ninguna
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
        add(this);
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

    productContainer.appendChild(productImage);
    productContainer.appendChild(productDetails);

    return productContainer;
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