//guardo en variables las seccioenes que se repiten muchas veces en el html
pantallaDeCarga()
const navHeader = `
<nav>
<img src="/img/logos/logo1.png" alt="logo" id="logo">
<samp id="botonesNav">
    <a href="https://www.instagram.com/coyote.nqn/">
        <button class="button lol">
            <img class="icono" src="/img/iconos/photo_camera_FILL0_wght400_GRAD0_opsz48.png" alt=""> 

        </button>
    </a>

    <a href="https://api.whatsapp.com/send?phone=2995231111&text=Haga%20su%20pedido%20aqui.">
        <button class="button lol">
            <img class="icono" src="/img/iconos/phone_enabled_FILL0_wght400_GRAD0_opsz48.png" alt="">

        </button>
    </a>
    <a href="#">

    <button class="button lol" id="botonCarrito">
    <img class="icono" src="/img/iconos/shopping_cart_FILL0_wght400_GRAD0_opsz48.png" alt="">

    </button>
    </a>
</samp>
</nav>
`

const sectionTres = `
        <section id="tres">
        <article>
            <h2 class="titulosTres">¿Quienes somos?</h2>
        </article>
        <article class="descripcion">
            <p>Somos una empresa de comida rapida que se encarga de mejorar tanto sus menus como su atencion al publico, empezamos de a poco con un carro hasta ahora que ya nos extendemos dentro de plottier y dentro de neuquen, teniendo asi 1 carro en
                neuquen en el rio limay y un bar en la calle brown 185, asi tambien contamos con 2 carros de comida en plottier, 1 situado en la entrada de plottier enfrente de la estacion de colectivos y otro enfrente de la ypf (tambien en la entrada)</p>
        </article>
        <article>
            <h2 class="titulosTres">¿Donde estamos?</h2>
        </article>
        <article id="direcciones">
            <ul>
                <li class="direcciones">
                    <a href="https://maps.app.goo.gl/EQ7XYpJKuz79w4jG6" class="direcciones">
                        <p class="direcciones">Food park coyote santa fe sur esquina lugones plottier</p>
                    </a>
                </li>
                <li class="direcciones">
                    <a href="https://www.google.com/maps/place/Coyote+Food+Truck/@-38.9561883,-68.2230562,17z/data=!4m9!1m2!2m1!1scoyote+plottier!3m5!1s0x960bcd242974ddd3:0x853accfce382cbe!8m2!3d-38.9561883!4d-68.2186788!15sCg9jb3lvdGUgcGxvdHRpZXJaESIPY295b3RlIHBsb3R0aWVykgEKcmVzdGF1cmFudA"
                        class="direcciones">
                        <p class="direcciones">Rivadavia 440 entrada de plottier</p>
                    </a>
                </li>
                <li class="direcciones">
                    <a href="https://www.google.com/maps/place/Paseo+de+la+Costa/@-38.9561673,-68.2909076,12z/data=!4m9!1m2!2m1!1sisla+132+neuquen!3m5!1s0x960a32203113e6c7:0x1ec9e5b4b83d4aa7!8m2!3d-38.9792572!4d-68.0535842!15sChBpc2xhIDEzMiBuZXVxdWVuWhIiEGlzbGEgMTMyIG5ldXF1ZW6SAQRwYXJrmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU5KYldSNlJXVm5FQUU"
                        class="direcciones">
                        <p class="direcciones">Isla 132 neuquen paseo de la costa</p>
                    </a>
                </li>
            </ul>
        </article>
        </section>`
InavHeader.innerHTML = navHeader
IsectionTres.innerHTML = sectionTres
menu.innerHTML = `
<div class="gif">
<img id="gif" src="img/gifs/coyote corriendo.gif" alt="">
<h4>Cargando productos . . .</h4>
</div>
`
setTimeout(() => {
    listarProductos(prod, menu, true)
}, 100)
const botonCarrito = document.getElementById('botonCarrito')