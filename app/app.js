// app/app.js

// Función para mostrar los productos de una categoría
function mostrarProductos(categoria) {
    let listaProductos = "";
    categoria.forEach((producto, index) => {
        listaProductos += `${index + 1}. ${producto.nombre} - Precio: $${producto.precio}\n`;
    });
    return listaProductos;
}

// Función para interactuar con el usuario y seleccionar un producto
function seleccionarProducto(categoria) {
    const seleccion = parseInt(prompt(`Elige un producto:\n\n${mostrarProductos(categoria)}`));
    if (isNaN(seleccion) || seleccion < 1 || seleccion > categoria.length) {
        alert("Por favor, elige una opción válida.");
        return null;
    }
    return categoria[seleccion - 1];
}

// Función para ver productos actuales en el carrito
function verCarrito(carrito) {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
    } else {
        let contenidoCarrito = "Productos en el carrito:\n\n";
        carrito.forEach((item, index) => {
            contenidoCarrito += `${index + 1}. ${item.nombre} - Cantidad: ${item.cantidad} - Subtotal: $${item.subtotal}\n`;
        });
        alert(contenidoCarrito);
    }
}

// Función para agregar productos al carrito y calcular el total
function simularCompra() {
    const carrito = [];
    let total = 0;
    while (true) {
        const categoriaSeleccionada = parseInt(prompt("¿Qué categoría de productos deseas ver?\n\n[1] Jeans\n[2] Abrigos\n[3] Remeras\n[4] Ver carrito\n[5] Finalizar compra"));
        if (categoriaSeleccionada === 5) {
            if (carrito.length === 0) {
                alert("El carrito está vacío. No hay productos para finalizar la compra.");
            } else {
                let productosFinales = "Productos en tu compra final:\n\n";
                carrito.forEach(item => {
                    productosFinales += `${item.nombre} - Cantidad: ${item.cantidad} - Subtotal: $${item.subtotal}\n`;
                });
                alert(`${productosFinales}\nTotal a pagar: $${total}`);
            }
            break;
        } else if (categoriaSeleccionada === 4) {
            verCarrito(carrito);
        } else if (categoriaSeleccionada >= 1 && categoriaSeleccionada <= 3) {
            const categoria = productos[Object.keys(productos)[categoriaSeleccionada - 1]];
            const productoSeleccionado = seleccionarProducto(categoria);
            if (productoSeleccionado) {
                const cantidad = parseInt(prompt(`Ingrese la cantidad de ${productoSeleccionado.nombre} que deseas agregar al carrito:`));
                if (!isNaN(cantidad) && cantidad > 0) {
                    const subtotal = cantidad * productoSeleccionado.precio;
                    carrito.push({ nombre: productoSeleccionado.nombre, cantidad, subtotal });
                    total += subtotal;
                    alert(`Se han agregado ${cantidad} ${productoSeleccionado.nombre} al carrito.`);
                } else {
                    alert("Por favor, ingresa una cantidad válida.");
                }
            }
        } else {
            alert("Por favor, elige una opción válida.");
        }
    }
}
