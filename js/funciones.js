//todas las funciones//

//funciones de las pantallas de carga
function pantallaDeCarga() {
    window.onload = function() {
        //el setTimeout lo uso para simular la espera que no se da al cargar la pagina de manera local
        setTimeout(() => {
            $("#pantallaCarga").fadeOut()
            $("body").removeClass("h")
            $("#h").removeClass("n")
        }, 500)
    }
}
//funciones para los listados de productos

function variableParaElInnerHTMLConIngredientes(producto) {
    let varIng = ""
    for (const ingrediente of producto.ingredientes) {
        varIng += `<p>${ingrediente}</p>`
    }
    return varIng
}

function listarIngredientes(producto) {
    let varIng = ""
    for (const ingrediente of producto.ingredientes) {
        varIng += `${ingrediente}, `
    }
    varIng = varIng.substring(0, varIng.length - 2)
    return varIng
}


function listarProductos(paraListar, listarEn, tipo) {
    if (listarEn != null) {
        if (tipo) {
            listarEn.innerHTML = ""
            for (const i in paraListar) {
                const varIng = variableParaElInnerHTMLConIngredientes(paraListar[i])
                const cardMenu = `<article class="menu">
                    <a href="${paraListar[i].link}">
                        <figure>
                            <div id="capa">
                                <h2 class="ingredientes">Ingredientes:</h2>
                                ${varIng}
                            </div>
                            <img src="${paraListar[i].img}" alt="${paraListar[i].nombre}" class="img">
                            <button class="tipo"> <samp><h4>${paraListar[i].nombre} $${paraListar[i].precio}</h4></samp></button>
                        </figure>
                    </a>
                </article>`
                listarEn.innerHTML += cardMenu

            }
            if (listarEn.innerHTML == "") {
                listarEn.innerHTML = `<h1>No se huelen resultados . . .</h1>`

            }


        } else {
            let listado = ""
            let total = 0
            for (const i in paraListar) {
                const cardCarrito = `<article class="menu">
                <figure>

                    <img src="${paraListar[i].img}" alt="${paraListar[i].nombre}" class="img">
                    <samp class=" itemCarrito">
                        <h2>${paraListar[i].nombre} ( ${paraListar[i].cantidadEnCarrito} )</h2>
                        <div>
                            <button id="sumar${paraListar[i].cod}" class="${paraListar[i].cod} sumar">+</button>
                            <button id="restar${paraListar[i].cod}" class="${paraListar[i].cod} restar">-</button>
                        </div> 
                    </samp>  
                </figure>
            </article>`
                total += parseInt(paraListar[i].precio) * parseInt(paraListar[i].cantidadEnCarrito)
                listado += cardCarrito
            }
            if (listado == "") {
                listado = `
                <h3>No hay nada en el carrito . . .</h3>`

            }
            listado += `<h1>Total : $ ${total}</h4>`
            return listado
        }

    }
}

//funciones para las busquedas 

function ordenar(bool, p) {
    inputFiltrado.innerHTML = ``

    const productos = p.slice(0, p.length)
    let resultado;
    (bool) ? resultado = productos.sort((a, b) => a.precio - b.precio): resultado = productos.sort((a, b) => b.precio - a.precio)
    return resultado
}

function filtrarPrecios(bool, productos) {
    const inputFiltrado = document.getElementById('inputFiltrado')
    let busqueda
    let rta;
    inputFiltrado.addEventListener('keyup', function() {
        busqueda = inputFiltrado.value;
        (bool) ? rta = productos.filter((producto) => producto.precio > busqueda): rta = productos.filter((producto) => producto.precio < busqueda)
        listarProductos(rta, menu, true)
    })

}

function filtrarNombre(productos) {
    const inputFiltrado = document.getElementById('inputFiltrado')
    let busqueda
    let rta;
    inputFiltrado.addEventListener('keyup', function() {
        busqueda = inputFiltrado.value;
        rta = productos.filter((producto) => producto.nombre.toLowerCase().includes(busqueda.toLowerCase()))
        listarProductos(rta, menu, true)
    })

}

//funciones del carrito 

function agregarCarrito(op, bool) {

    const carritoEnLS = JSON.parse(localStorage.getItem('carrito'))

    if (carritoEnLS) {
        carrito = carritoEnLS
    }
    let repite
    let i
    for (i = 0; i < carrito.length; i++) {
        if (prod[op].cod == carrito[i].cod) {
            repite = true
            break;
        } else {

            repite = false
        }
    }
    if (repite) {
        (bool) ? carrito[i].cantidadEnCarrito++: carrito[i].cantidadEnCarrito--;
        localStorage.setItem('carrito', JSON.stringify(carrito))

    } else {
        carrito.push(prod[op])
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }
    if (carrito[i].cantidadEnCarrito <= 0) {

        (carrito[0] == carrito[i]) ? carrito.shift(): carrito.splice((i), (i))
        localStorage.setItem('carrito', JSON.stringify(carrito))

    }

}

function sumarOrestar() {
    const botonesSumar = document.getElementsByClassName('sumar')
    const botonesRestar = document.getElementsByClassName('restar')
    for (let i = 0; i < botonesSumar.length; i++) {
        botonesSumar[i].addEventListener('click', () => {
            agregarCarrito(parseInt(botonesSumar[i].className), true)
            desplegarCarrito()
            desplegarCarrito()

        })
        botonesRestar[i].addEventListener("click", () => {
            agregarCarrito(parseInt(botonesRestar[i].className), false)
            desplegarCarrito()
            desplegarCarrito()

        })
    }
}

function borrarCarrito() {

    const carritoVacio = []
    localStorage.setItem('carrito', JSON.stringify(carritoVacio))
}

function desplegarCarrito() {

    const carritoEnLS = JSON.parse(localStorage.getItem('carrito'))
    const listaCarrito = listarProductos(carritoEnLS, false, false)
    Swal.fire({
        title: 'Carrito:',
        html: `<div>${listaCarrito}</div>`,
        showDenyButton: true,
        showCancelButton: true,
        cancelButtonText: 'Seguir viendo el menu',
        confirmButtonText: 'Pagar carrito',
        denyButtonText: `Vaciar carrito`,
        confirmButtonColor: "#8cbd32",
        denyButtonColor: "#bd3232",
        cancelButtonColor: "#a0a0a0",
        background: "#18130d",
    }).then((result) => {
        if (result.isConfirmed) {
            borrarCarrito()
            Swal.fire({
                icon: 'success',
                title: 'Su pedido a sido realizado, en breve estara listo : )',
                html: `<img src="img/gifs/looney-tunes-hungry.gif" alt="">`,

                showConfirmButton: true,
                confirmButtonColor: "#BD7332",
                background: "#18130d"
            })
        } else if (result.isDenied) {
            borrarCarrito()
            Swal.fire({
                icon: 'warning',
                title: 'Se vacio el carrito!',
                html: `<img src="img/gifs/coyote-1.gif" alt="">`,

                showConfirmButton: true,
                confirmButtonColor: "#BD7332",
                background: "#18130d",
                timer: 2000
            })
        }
    })
    sumarOrestar()
}