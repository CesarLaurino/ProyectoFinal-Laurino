
const productos = [{
    id: 1,
    producto: "cafe",
    precio: 100,
    "img": "https://s.lamason.us/bonafide.com.ar/media/2022/05/06132456/Sensaciones-Intenso-250g-2-1-1-1-1-1-1-1.png",
    fechaDeVencimiento: [2030, 11, 10],
    descripcion: "Cafe Sensaciones Bonafide",
    categoria: "almacén",
    oferta: false
},{
    id: 2,
    producto: "fideos",
    "img": "https://d2r9epyceweg5n.cloudfront.net/stores/001/108/127/products/matarazzo-tallarinbyb1-a35a94d76fbbbe1e2515966747313575-1024-1024.png",
    precio: 350,
    fechaDeVencimiento: [2025, 10, 10],
    descripcion: "Fideos secos Matarazzo",
    categoria: "almacén",
    oferta: true
},{

    id: 3,
    producto: "acondicionador",
    "img": "https://www.sedal.com.ar/content/dam/unilever/sunsilk/argentina/pack_shot/7791293040226-2240605-png.png",
    precio: 540,
    fechaDeVencimiento: [2033, 11, 15],
    descripcion: "Acondicionador sedal carbon activado",
    categoria: "perfumeria",
    oferta: false
},{
    id: 4,
    producto: "shampoo",
    "img": "https://www.sedal.com.ar/content/dam/unilever/sunsilk/argentina/pack_shot/7791293040172-2278774-png.png",
    precio: 600,
    fechaDeVencimiento: [2033, 11, 17],
    descripcion: "Shampoo sedal carbon activado",
    categoria: "perfumeria",
    oferta: false
},{
    id: 5,
    producto: "pizzas",
    "img": "https://geant.vteximg.com.br/arquivos/ids/209890-1000-1000/256391.jpg?v=636446081692300000",
    precio: 700,
    fechaDeVencimiento: [2023, 02, 04],
    descripcion: "pizza de tomate sibarita",
    categoria: "congelados",
    oferta: true
},{
    id: 6,
    producto: "azucar",
    "img": "https://http2.mlstatic.com/D_NQ_NP_601141-MLA50784476026_072022-V.jpg",
    precio: 150,
    fechaDeVencimiento: [2025, 07, 22],
    descripcion: "azucar blanca ledezma",
    categoria: "almacén",
    oferta: false
},{
    id: 7,
    producto: "yerba",
    "img": "https://www.ofi-z.com/img/articulos/yerba_mate_amanda_1_kg_thumb1.jpg",
    precio: 200,
    fechaDeVencimiento: [2025, 07, 22],
    descripcion: "yerba amanda",
    categoria: "almacén",
    oferta: false
},{
    id: 8,
    producto: "colgate total 12",
    "img": "https://elbloquear.vtexassets.com/arquivos/ids/159757/dise_o_sin_t_tulo_-_2021-07-12t123401.png?v=637870979878200000",
    precio: 750,
    fechaDeVencimiento: [2025, 07, 22],
    descripcion: "Pasata dental colgate",
    categoria: "perfumeria",
    oferta: false
},{
    id: 9,
    producto: "enjuague total 12",
    "img": "https://farmacityar.vteximg.com.br/arquivos/ids/187465-1000-1000/210713_enjuague-bucal-colgate-total-12-antisarro-x-500-ml_imagen-1.jpg?v=637006118361470000",
    precio: 670,
    fechaDeVencimiento: [2025, 07, 22],
    descripcion: "Enjuague bulcal colgate",
    categoria: "perfumeria",
    oferta: false
},{
    id: 10,
    producto: "paty",
    "img": "https://www.casa-segal.com/wp-content/uploads/2020/04/hamburguesas-express-paty-por-4-u-69-gr-hamburguesas-alimentos-frescos-casa-segal-mendoza.png",
    precio: 1500,
    fechaDeVencimiento: [2024, 04, 07],
    descripcion: "hamburguesas paty express",
    categoria: "congelados",
    oferta: false
}
]



const formLogin = document.querySelector ("#login")
const inputUser = document.querySelector ("#input-user")
const inputPass = document.querySelector ("#input-pass")
const loginIncorrecto = document.querySelector ("#logint")
const contenedorForm = document.querySelector (".login-box")
const logout = document.querySelector ("#logout")
const botonModos = document.querySelector ("#claro-oscuro")
const body = document.querySelector (".modo-claro")
const contenedor = document.querySelector (".product")
const buscadorProductos = document.querySelector (".buscador")

/////////////////////////////////////////////////////////////////////////

function productosHtml ( array ) {
    array.forEach( ( elemento ) => {
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = 
        `
            <div class = "articulo">
                <div class = "contenedor-busqueda">
                    <div class = "container-img">
                        <img src=${elemento.img} alt=${productos.producto}>
                    </div>
                        <h1 class="titulo-producto">
                            ${elemento.producto}
                        </h1>
                </div>
            </div>
        `
        contenedor.appendChild(card)
    })
}

productosHtml(productos)

document.addEventListener("keyup", e=>{

    if (e.target.matches("#search")){

        if (e.key ==="Escape")e.target.value = ""

        document.querySelectorAll(".articulo").forEach(product =>{

            product.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?product.classList.remove("filtro")
            :product.classList.add("filtro")
        })
    }
})

/////////////////////////////////////////////////////////////////////////

botonModos.onclick = () => {
    body.classList.toggle("modo-oscuro")
    if (body.className === "modo-claro modo-oscuro"){
        botonModos.textContent = "Modo Claro"
    } else {
        botonModos.textContent = "Modo Oscuro"
    }
}

const imagen = document.getElementById("avatar");
if (body === "modo-oscuro") {
	imagen.src = "img/master_Ball_icon.png";
} else {
	imagen.src = "img/Poké_Ball_icon.svg.png";
}

/////////////////////////////////////////////////////////////////////////

const datosUsuario = {
    user: "cesar",
    password: "cesar11"
}

const subirAlLs = ( clave, valor ) => {
    localStorage.setItem(clave, JSON.stringify(valor))
}

const obtenerDelLs = ( clave ) => {
    return JSON.parse(localStorage.getItem(clave))
}

/////////////////////////////////////////////////////////////////////////

formLogin.onsubmit = ( event ) => {
    event.preventDefault()
    if ( inputUser.value === datosUsuario.user && inputPass.value === datosUsuario.password ) {
        subirAlLs("login", true)
        contenedorForm.style.display = "none"  
        logout.style.display = "block" 
        contenedor.style.display = "flex"
        buscadorProductos.style.display = "flex"
    } else {        
        loginIncorrecto.style.display = "block"
        inputPass.style.border = "2px solid red"
        inputUser.style.border = "2px solid red"
        buscadorProductos.style.display = "none"
        contenedorForm.reset();
    }

}

/////////////////////////////////////////////////////////////////////////

function validarLogin ( clave ) {
    if ( clave !== true ) {
        contenedorForm.style.display = "flex"
        logout.style.display = "none"     
    } else {
        contenedorForm.style.display = "none"
        logout.style.display = "block" 
    }
    
}

validarLogin(obtenerDelLs("login"))

/////////////////////////////////////////////////////////////////////////

logout.onclick = () => {
    localStorage.removeItem( "login" )
    validarLogin(obtenerDelLs("login"))
    formLogin.reset()
}

/////////////////////////////////////////////////////////////////////////

