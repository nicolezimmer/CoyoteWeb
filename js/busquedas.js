let resultado
const inputFiltrado = document.getElementById('mayorOmenorA')
const parametros = [prod, carrito]
    //array con las funciones de las opciones que contiene el programa 
const arrayOpciones = [(aux) => {
        inputFiltrado.innerHTML = ``
        resultado = prod
    },
    (aux) => { resultado = ordenar(true, aux[0]) },
    (aux) => { resultado = ordenar(false, aux[0]) },
    (aux) => {
        inputFiltrado.innerHTML = `
        <input type="text" class="filtrados" id="inputFiltrado">
        `
        filtrarPrecios(true, aux[0])
    },
    (aux) => {
        inputFiltrado.innerHTML = `<input type="text" class="filtrados" id="inputFiltrado">`
        filtrarPrecios(false, aux[0])
    },
    (aux) => {
        inputFiltrado.innerHTML = `
                <input type="text" class="filtrados" id="inputFiltrado">
                `
        filtrarNombre(aux[0])

    }
]
const select = document.getElementById('select')
select.addEventListener('mouseup', function() {
    arrayOpciones[parseInt(select.options[select.selectedIndex].value)](parametros)
    listarProductos(resultado, menu, true)
})