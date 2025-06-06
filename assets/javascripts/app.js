// Variables para almacenar el precio base de cada producto y el total
const productPrices = {
    product1: 20.00,  // Precio base del Producto 1
    // Puedes agregar más productos aquí con su precio
};

// Función que actualiza la cantidad de un producto y calcula el total

function updateQuantity(productId, change) {
    // Obtenemos el elemento de cantidad y total del producto
    const quantityElement = document.getElementById(`${productId}-quantity`);
    const totalElement = document.getElementById(`${productId}-total`);
    let currentQuantity = parseInt(quantityElement.textContent);

    // Modificamos la cantidad, asegurándonos de no permitir cantidades negativas
    currentQuantity += change;
    if (currentQuantity < 1) {
        currentQuantity = 1; // Siempre al menos 1 producto
    }

    // Actualizamos el contenido en la página
    quantityElement.textContent = currentQuantity;

    // Calculamos el nuevo total para este producto
    const productTotal = currentQuantity * productPrices[productId];
    totalElement.textContent = productTotal.toFixed(2);

    // Actualizamos el total general
    updateTotal();
}

// Función que calcula y actualiza el total de todos los productos
function updateTotal() {
    let total = 0;

    // Calculamos el total de cada producto
    const product1Quantity = parseInt(document.getElementById('product1-quantity').textContent);
    total += product1Quantity * productPrices.product1;

    // Actualizamos el total en la página
    document.getElementById('total-amount').textContent = total.toFixed(2);
}
