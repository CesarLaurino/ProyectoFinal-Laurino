

/////////////////////LOGIN/////////////////////////////////
const formLogin = document.querySelector ("#login")
const inputUser = document.querySelector ("#input-user")
const inputPass = document.querySelector ("#input-pass")
const loginIncorrecto = document.querySelector ("#logint")
const contenedorForm = document.querySelector (".login-box")
const logout = document.querySelector (".logout")
/////////////////////BOTON MODOS///////////////////////////
const botonModos = document.querySelector ("#claro-oscuro")
const body = document.querySelector (".modo-claro")
/////////////////////BUSCADOR//////////////////////////////
const buscadorPokemon = document.querySelector (".buscador")
/////////////////////POKEMONS//////////////////////////////
const contenedorPokemon = document.querySelector (".contenedor-pokemon")
const arraypkm = []
const card = document.querySelector (".card")
/////////////////////SPINNER///////////////////////////////
const spinner = document.querySelector (".wobbling-10")
/////////////////////PAGINACIÓN////////////////////////////
const paginacion = document.querySelector (".paginacion")
const anterior = document.querySelector ("#anterior")
const siguiente = document.querySelector ("#siguiente")
const paginacion2 = document.querySelector (".paginacion2")
const anterior2 = document.querySelector ("#anterior2")
const siguiente2 = document.querySelector ("#siguiente2")

let offset = 1
let limit = 2

//////////////////////////Paginación////////////////////////////////////

function removeChildNodes (parent){
    while (parent.firstchild) {
        parent.removechild(parent.firstchild);
    }
}

anterior.addEventListener('click', () => {
    if (offset != 1)  {
        offset -= 50;
        removeChildNodes(contenedorPokemon)
        contenedorPokemon.innerHTML = "";
        fetchPokemons (offset, limit);
    }
})

siguiente.addEventListener('click', () => {
    offset += 50;
    removeChildNodes(contenedorPokemon)
    contenedorPokemon.innerHTML = "";
    fetchPokemons (offset, limit);
}) 

anterior2.addEventListener('click', () => {
    if (offset != 1)  {
        offset -= 50;
        removeChildNodes(contenedorPokemon)
        contenedorPokemon.innerHTML = "";
        fetchPokemons (offset, limit);
    }
})

siguiente2.addEventListener('click', () => {
    offset += 50;
    removeChildNodes(contenedorPokemon)
    contenedorPokemon.innerHTML = "";
    fetchPokemons (offset, limit);
}) 

function fetchPokemon (id){

    fetch ( `https://pokeapi.co/api/v2/pokemon/${id}/` )
    .then (res => res.json())
    .then (data =>{ 
        arraypkm.push (data);
        cardHtml(arraypkm)
        })
        spinner.style.display = "none"
    }

    function fetchPokemons (offset, limit){
    spinner.style.display = "block"
    for (let i = offset; i <= offset + limit; i++){
        fetchPokemon(i);
    }
}

        // <div class="card">
        //     <div class="container-img">
        //         <img src=${u.sprites.front_default} alt=${u.name}>
        //     </div>                
        //     <h2>
        //         ${u.name}
        //     </h2>
        //     <h2>
        //         ${u.id}
        //     </h2>
        //     <button id="boton-${u.id}" class="boton-card">
        //         Añadir al carrito
        //     </button>
        // </div>
//////////////////////////Crear Card Pokemons///////////////////////////

function cardHtml (data) {
    const cartapkm = data.reduce ((acc, u)=> {
        return acc + `
        <div class="carta">
            <div class="carta-frente" id="pokemon-${u.id}">
                <div class="info">
                    <div class="img-contenedor">
                        <img src=${u.sprites.front_default} alt=${u.name}>
                    </div>
                    <h2 class="numero">${u.id.toString().padStart(3, 0)}</h2>
                    <h2 class="nombre">${u.name}</h2>
                </div>
            </div>
            <button id="boton-${u.id}" class="boton-fav"></button>
            <div class="carta-atras">
                <div class="contenido">
                </div>
            </div>
        </div>
    `
    }, "")
    
    contenedorPokemon.innerHTML = cartapkm

    cartapkm.onclick = () => {
        Toastify({
            text: `Atrapaste un ${pokemon.name}`,
            duration: 1000,
            className: "info",
            close: true
        }).showToast ()}
    }
    



//////////////////////////LLamarlos desde api///////////////////////////



// function crearPokemons(pokemon){
    // const flipCard = document.createElement (`div`);
    // flipCard.classList.add ("flip-card");

    // const contenedorCard = document.createElement (`div`);
    // contenedorCard.classList.add ("contenedor-card");

    // flipCard.appendChild (contenedorCard);

    // const card = document.createElement (`div`);
    // card.classList.add (`pokemon-card`);

    // const imgContenedor = document.createElement (`div`);
    // imgContenedor.classList.add (`img-contenedor`);

    // const imgPokemon = document.createElement (`img`);
    // imgPokemon.src = pokemon.sprites.front_default

    // imgContenedor.appendChild (imgPokemon);

    // const contenedorNumNom = document.createElement (`div`);
    // contenedorNumNom.classList.add (`contenedor-num-nom`);

    // const numeroPokemon = document.createElement (`p`);
    // numeroPokemon.classList.add (`numero-pokemon`);
    // numeroPokemon.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

    // const nombrePokemon = document.createElement (`p`);
    // nombrePokemon.classList.add (`nombre-pokemon`);
    // nombrePokemon.textContent = pokemon.name

    // contenedorNumNom.appendChild (nombrePokemon);
    // contenedorNumNom.appendChild (numeroPokemon);

    // const contenedorBotonFav = document.createElement (`div`);
    // contenedorBotonFav.classList.add  (`contenedor-botonfav`);
    
    // const botonFavorito = document.createElement (`button`);
    // botonFavorito.classList.add  (`boton-favorito`);

    // contenedorBotonFav.appendChild (botonFavorito);

    // card.appendChild (imgContenedor);
    // card.appendChild (contenedorNumNom);
    // card.appendChild (contenedorBotonFav);

    // const voltearCard = document.createElement (`div`);
    // voltearCard.classList.add (`espalda-card`)

    // const descripcion = document.createElement (`div`)
    // descripcion.classList.add (`descripcion-pokemon`)

    // contenedorPokemon.appendChild (descripcion)

    // contenedorCard.appendChild (card);
    // contenedorCard.appendChild (voltearCard);
    // contenedorPokemon.appendChild (flipCard);


    // botonFavorito.onclick = () => {
    //     Toastify({
    //         text: `Atrapaste un ${pokemon.name}`,
    //         duration: 1000,
    //         className: "info",
    //         close: true
    //     }).showToast ()}


fetchPokemons(offset, limit);


//////////////////////////Buscador//////////////////////////////////////

document.addEventListener("keyup", e => {

    if (e.target.matches ("#search")){

        if (e.key ==="Escape")e.target.value = ""

        document.querySelectorAll(".pokemon-card").forEach(fetchPokemons =>{

            fetchPokemons.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?fetchPokemons.classList.remove("filtro")
            :fetchPokemons.classList.add("filtro")
        })
    }
})



////////////////////////////Modos///////////////////////////////////////

botonModos.onclick = () => {
    const cambioImagen = document.getElementById("avatar");
    body.classList.toggle("modo-oscuro")
    if (body.className === "modo-claro modo-oscuro"){
        botonModos.textContent = "Modo Claro"
        cambioImagen.src = "img/master_Ball_icon-LOGIN.jpg";
    } else {
        botonModos.textContent = "Modo Oscuro"
        cambioImagen.src = "img/Poké_Ball_icon-LOGIN.jpg";
    }
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

///////////////////////Evento Post-Login////////////////////////////////

formLogin.onsubmit = ( event ) => {
    event.preventDefault()
    if ( inputUser.value === datosUsuario.user && inputPass.value === datosUsuario.password ) {
        subirAlLs("login", true)
        swal("Login correcto","¡Bienvenido a CoderDex Js!")
        contenedorForm.style.display = "none" 
        logout.style.display = "block" 
        contenedorPokemon.style.display = "flex"
        buscadorPokemon.style.display = "block"
        paginacion.style.display = "flex"
        paginacion2.style.display = "flex"
    } else {        
        loginIncorrecto.style.display = "block"
        inputPass.style.border = "2px solid red"
        inputUser.style.border = "2px solid red"
        buscadorPokemon.style.display = "none"
        
        formLogin.reset();
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
    location.reload()
}

/////////////////////////////////////////////////////////////////////////
