// shopping-cart.js

// Crear una clase para el carrito de compras
class ShoppingCart {
    constructor() {
        this.cartItems = []; // Array para almacenar los productos agregados
    }

    // Método para agregar un producto al carrito
    addToCart(product) {
        this.cartItems.push(product);
        console.log(`Producto "${product.product-title}" agregado al carrito.`);
    }

    // Método para mostrar los productos en el carrito
    displayCart() {
        console.log("Productos en el carrito:");
        this.cartItems.forEach((product, index) => {
            console.log(`${index + 1}. ${product.name} - Precio: $${product.price}`);
        });
    }
}

// Ejemplo de uso
const myCart = new ShoppingCart();

// Agregar productos al carrito
myCart.addToCart({ name: "Camiseta", price: 25 });
myCart.addToCart({ name: "Zapatos", price: 50 });
myCart.addToCart({ name: "Pantalones", price: 40 });

// Mostrar los productos en el carrito
myCart.displayCart();