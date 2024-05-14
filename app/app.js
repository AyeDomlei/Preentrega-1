// Declaración de productos como arrays constantes//

const productos = {
    Jeans: [
        { nombre: "Chupin", precio: 21000 },
        { nombre: "Recto", precio: 20000 },
        { nombre: "Oxford", precio: 23500 },
        { nombre: "Palazzo", precio: 20500 },
        { nombre: "Cargo", precio: 21500 }
    ],
    Abrigos: [
        { nombre: "Blazer", precio: 30000 },
        { nombre: "Cardigans", precio: 35000 },
        { nombre: "Sweaters", precio: 32000 },
        { nombre: "Camperas Dama", precio: 45000 },
        { nombre: "Camperas Juveniles", precio: 50000 }
    ],
    Remeras: [
        { nombre: "Musculosas", precio: 15000 },
        { nombre: "Chombas", precio: 25000 },
        { nombre: "Top", precio: 19000 },
        { nombre: "Camisas", precio: 29000 },
        { nombre: "Camisetas", precio: 21500 }
    ]
};

// Función para mostrar los productos de una categoría//
function mostrarProductos(categoria) {
    let listaProductos = "";
    categoria.forEach((producto, index) => {
        listaProductos += `${index + 1}. ${producto.nombre} - Precio: $${producto.precio}\n`;
    });
    return listaProductos;
}

// Función para interactuar con el usuario y seleccionar un producto//
function seleccionarProducto(categoria) {
    const seleccion = parseInt(prompt(`Elige un producto:\n\n${mostrarProductos(categoria)}`));
    if (isNaN(seleccion) || seleccion < 1 || seleccion > categoria.length) {
        alert("Por favor, elige una opción válida.");
        return null;
    }
    return categoria[seleccion - 1];
}

// Función para agregar productos al carrito y calcular el total//
function simularCompra() {
    const carrito = [];
    let total = 0;
    while (true) {
        const categoriaSeleccionada = parseInt(prompt("¿Qué categoría de productos deseas ver?\n\n[1] Jeans\n[2] Abrigos\n[3] Remeras\n[4] Finalizar compra"));
        if (categoriaSeleccionada === 4) {
            alert(`Gracias por tu compra. Total a pagar: $${total}`);
            break;
        }
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
    }
}

// Llamada a la función principal para simular la compra//
simularCompra();
