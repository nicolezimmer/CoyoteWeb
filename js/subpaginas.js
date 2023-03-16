const subpagina = document.getElementById('id')


setTimeout(() => {
    let varIng = variableParaElInnerHTMLConIngredientes(prod[subpagina.innerText])

    let listaIngredientes = listarIngredientes(prod[subpagina.innerText])
    let htmlSubpaginas = `
    <p id="id" hidden="true">0</p>
    <div class="gif" id="pantallaCarga">
        <img id="gif" src="img/gifs/coyote corriendo.gif" alt="">
        <div id="gifCarga" class="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
    <div class="n" id="h">       
        <header>
            ${navHeader}
        </header>

        <article id="titulo">
            <h2>${prod[subpagina.innerText].nombre} $${prod[subpagina.innerText].precio}</h2>
        </article>

        <section id="producto">
            <article>
                <img src="${prod[subpagina.innerText].img}" alt="lomo" class="img">
            </article>

            <article class="ingredientes">
                <div>
                    <h2>Ingredientes:</h2>
                    ${varIng}
                </div>
            </article>
        </section>
        <article class="ingredientes2">
            <div>
                <h2>Ingredientes:</h2>
                ${listaIngredientes}
            </div>
        </article>

        <button class="button" id="agregarCarrito"> Agregar al carrito</button> 
        <img src="img/extras/E-3.jpg" alt="imagen cabecera" class="imgh">
        ${sectionTres}
    </div>    
        `


    fondo.innerHTML = htmlSubpaginas

}, 100)
document.body.classList.add("h")