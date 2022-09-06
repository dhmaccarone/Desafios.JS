let compraTotal = 0
let productoSeleccionadoAdidas
let productoSeleccionadoNike



let marcaSeleccionada = parseInt(prompt('Que marca de zapatillas estas buscando?: 1.Adidas - 2.Nike'))
if (marcaSeleccionada === 1) {
    productoSeleccionadoAdidas = parseInt(prompt('Que modelo quieres?= 1.Pegasus39 - 2.Zoom Air'))
}
else if (marcaSeleccionada === 2) {
    productoSeleccionadoNike = parseInt(prompt('Que modelo quieres?= 1.Run Falcon - 2.Duramo9'))
}

let seguirComprando = true
let decision
let productos = []
let carrito = []

class Producto {
    constructor(marca, nombre, precio) {
        this.marca = marca
        this.nombre = nombre
        this.precio = precio
    }
}

const Pegasus39 = new Producto('Adidas', 'Pegasus39', 20000)
const ZoomAir = new Producto('Adidas', 'Zoom Air', 15000)
const RunFalcon = new Producto('Nike', 'Run Falcon', 30000)
const Duramo9 = new Producto('Nike', 'Duramo9', 18000)

productos.push(Pegasus39)
productos.push(ZoomAir)
productos.push(RunFalcon)
productos.push(Duramo9)


while (seguirComprando === true) {
    if (productoSeleccionadoAdidas === 1) {
        carrito.push(productos[0])
    } else if (productoSeleccionadoAdidas === 2) {
        carrito.push(productos[1])
    } else if (productoSeleccionadoNike === 1) {
        carrito.push(productos[2])
    } else if (productoSeleccionadoNike === 2) {
        carrito.push(productos[3])
    }

    decision = parseInt(prompt('Quieres seguir comprando? 1.Si - 2.No'))
    if (decision === 1) {
        marcaSeleccionada = parseInt(prompt('Que marca de zapatillas estas buscando?: 1.Adidas - 2.Nike'))
        if (marcaSeleccionada === 1) {
            productoSeleccionadoAdidas = parseInt(prompt('Que modelo quieres?= 1.Pegasus39 - 2.Zoom Air'))
        }
        else if (marcaSeleccionada === 2) {
            productoSeleccionadoNike = parseInt(prompt('Que modelo quieres?= 1.Run Falcon - 2.Duramo 9'))
        }

    }
    else if (decision === 2) {
        seguirComprando = false
    }

}

for(let i=0;i<carrito.length;i++){
    compraTotal = compraTotal + carrito[i].precio
}

alert('El valor total de tu compra es:' + " " + compraTotal)

// function calcularPrecioConDescuento(valor) {
//     let descuento = 0
//     if (valor > 20000) {
//         descuento = 10
//     } else if (valor > 25000) {
//         descuento = 15
//     }
//     let valorDescuento = valor * (descuento / 100)
//     valor = valor - valorDescuento
//     return valor
// }
// let valorConDescuento = calcularPrecioConDescuento(compraTotal)
// alert('El precio total con descuento es de:' + " " + valorConDescuento)
// alert('Gracias por tu compra!')

