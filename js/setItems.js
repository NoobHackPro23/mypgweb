function local() {
    let ventanas = ['A', 'B', 'C'];

    ventanas.forEach(ventana => {
        let productContainerParent = document.querySelector(`#ventana-${ventana}`);
        let productContainers = productContainerParent.querySelectorAll('.product-container');

        let index2 = 0;
        while (index2 == productContainers.length) {
            let eliminated = localStorage.getItem(`delete-${id}`);
                if (!eliminated){console.log(product.id);
                }else{
                    let product = document.querySelector(eliminated);
                        product.remove();
                        console.log(product.id);
                }
            index2++;
        };

        // Recupera y añade nuevos productos al final
        let index = productContainers.length;
        while (true) {
            let id = `box-${ventana}-${index}`;
            const storedProductHTML = localStorage.getItem(`product-${id}`);

            if (!storedProductHTML) break;

            let newProductContainer = document.createElement('div');
            newProductContainer.id = id;
            newProductContainer.className = 'product-container';
            newProductContainer.innerHTML = storedProductHTML;

            productContainerParent.insertBefore(newProductContainer, productContainerParent.lastElementChild);
            assignEventListeners(newProductContainer);

            // Actualiza la existencia del nuevo producto
            let storedValue = localStorage.getItem(`existencia-${id}`);
            if (storedValue !== null) {
                let productStorage = newProductContainer.querySelector('.product-storage');
                productStorage.textContent = "Existencia: " + storedValue;
            }

            index++;
        }

        // Actualiza las existencias de los productos existentes
        productContainers.forEach(container => {
            let id = container.id;
            let storedValue = localStorage.getItem(`existencia-${id}`);
            
            if (storedValue !== null) {
                let productStorage = container.querySelector('.product-storage');
                productStorage.textContent = "Existencia: " + storedValue;
            };
        });
    });
};

function newLocal(containers, idDelete) {

    localStorage.clear();

    let elemento = document.getElementById(idDelete);
    if (elemento && elemento.classList.contains('default')) {
        localStorage.setItem(`delete-${idDelete}`, idDelete);
        console.log(elemento.id);
    }

    containers.forEach(contenedor => {
        let productStorage = contenedor.querySelector('.product-storage');
        let existencia = parseInt(productStorage.textContent.split(': ')[1]);

        localStorage.setItem(`product-${contenedor.id}`, contenedor.innerHTML);
        localStorage.setItem(`existencia-${contenedor.id}`, existencia);
    });
}

document.addEventListener('DOMContentLoaded', local);



function assignEventListeners(container) {
    const firstDiv = container.querySelector('.add:not(.delete)');
    if (firstDiv) {
        firstDiv.onclick = function() {
            set(this);
        };
    }

    const secondDiv = container.querySelector('.delete.add');
    if (secondDiv) {
        secondDiv.onclick = function() {
            Delete(this);
        };
    }
}

// document.addEventListener('DOMContentLoaded', function () {
//     localStorage.clear();
// });


function set(button) {
    let container = button.closest('.product-container');
    let productStorage = container.querySelector('.product-storage');
    let existencia = parseInt(productStorage.textContent.split(': ')[1]);

    existencia++;    
    productStorage.textContent = "Existencia: " + existencia;

    let id = container.id;
    localStorage.setItem(`existencia-${id}`, existencia);
}
