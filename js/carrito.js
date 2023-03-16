setTimeout(() => {
    const buttonCarrito = document.getElementById('botonCarrito')
    const botonAgregarCarrito = document.getElementById('agregarCarrito')
    console.log(buttonCarrito)
    buttonCarrito.addEventListener("click", () => {
        desplegarCarrito()
    })
    if (botonAgregarCarrito != null) {
        botonAgregarCarrito.addEventListener("click", () => {
            agregarCarrito(parseInt(subpagina.innerText), true)
            Toastify({
                text: `Se agrego al carrito:  ${prod[subpagina.innerText].nombre}`,
                duration: 4000,
                destination: "",
                newWindow: true,
                close: true,
                gravity: "bottom",
                position: "right",
                stopOnFocus: true,
                style: {
                    background: "#BD7332",
                },
                onClick: function() { desplegarCarrito() }
            }).showToast();
        })
    }
}, 100)