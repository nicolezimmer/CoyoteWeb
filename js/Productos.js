//clase del objeto producto
class Producto {
    constructor(nombre, precio, cod, ingredientes, img, link) {
        this.nombre = nombre
        this.precio = precio
        this.cod = cod
        this.ingredientes = ingredientes
        this.img = img
        this.link = link
        this.cantidadEnCarrito = 1
    }
}
const prod = []
const cargarProductos = async() => {
    const response = await fetch("productos.json")
    const data = await response.json()
    for (let p of data) {
        //console.log(p.ingredientes)
        let prodNuevo = new Producto(p.nombre, p.precio, p.cod, p.ingredientes, p.img, p.link)
        prod.push(prodNuevo)
    }
}
cargarProductos()