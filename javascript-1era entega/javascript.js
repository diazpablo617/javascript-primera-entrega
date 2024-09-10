    alert ("¿Hola como estas? Mi nombre es Pablo, y sere tu asistente guia para que puedas realizar tu compra deseada")
    

    let nombre = prompt ("Por favor ingrese su nombre y appellido")
    while(null===nombre ) {
        nombre = prompt ("INGRESE UN NOMBRE")
    }

    let numeroDeCliente = prompt ("ingrese su numero de cliente")
    let procesadoNumeroDeCliente = parseInt(numeroDeCliente)
    while(isNaN(procesadoNumeroDeCliente)){
        numeroDeCliente = prompt (" INGRESE UN NUMERO CORRECTO")
        procesadoNumeroDeCliente = parseInt(numeroDeCliente)
    }


    const ubicacion = prompt ("Excelente " + nombre +" recuerde que hacemos envios a domicilio, si desea que le enviemos la compra por favor indique la ubicacion de su comercio, de lo contrario seleccione aceptar" )
    
    

const gaseosa = {
    unlitro: 500,
    doslitros: 1000,
    treslitros: 1500
};

function realizarCompra() {
    let eleccion = prompt("Elija la presentacion de la gaseosa ¡ATENCION: ESCRIBA LA OPCION CORRECTAMENTE SIN DEJAR ESPACIO!: unlitro, doslitros o treslitros");
    eleccion = eleccion.toLowerCase();

     // Verificar si la opción elegida está en el array
    if (gaseosa[eleccion] !== undefined) {
        let cantidad = prompt("¿Cuántas gaseosas de  "+eleccion+" deseas llevar?");
        cantidad = parseInt(cantidad);
        // Verificar si la cantidad es válida
        if (!isNaN(cantidad) && cantidad > 0) {
            const precio = gaseosa[eleccion];
            const costoTotal = precio * cantidad;
            // Informar al cliente del total y mostrar el carrito
            alert("El costo total por "+cantidad+" gaseosas de  "+eleccion+" es "+costoTotal+" pesos.");
        } else {
            alert("Por favor, ingresa una cantidad válida.");
        }
    } else {
        alert("Producto no válido. Por favor, elige entre unlitro, doslitros o treslitros.");
    }
}
function manejarCompras() {
    let continuar = true;

    while (continuar) {
        alert("Las opciones de gaseosas disponibles son:\n 1 litro: $500\n 2 litros: $1000\n 3 litros: $1500");
        realizarCompra();  

        const respuesta = prompt("¿Deseas hacer otra compra? (si/no)").toLowerCase();

        if (respuesta !== 'si' && respuesta !== 's') {
            continuar = false;
        }
    }

    alert("Gracias por su compra. ¡vuelva pronto!");
}


manejarCompras();



















