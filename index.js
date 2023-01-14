

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
/////////////////////SPINNER///////////////////////////////
const spinner = document.querySelector (".wobbling-10")
/////////////////////PAGINACIÓN////////////////////////////
const paginacion = document.querySelector (".paginacion")
const anterior = document.querySelector ("#anterior")
const siguiente = document.querySelector ("#siguiente")

let offset = 1
let limit = 8


//////////////////////////LLamarlos desde api///////////////////////////

function fetchPokemon (id){
    fetch ( `https://pokeapi.co/api/v2/pokemon/${id}/` )
    .then (res => res.json())
    .then (data => {
        crearPokemons(data)})
        spinner.style.display = "none"
    }

    function fetchPokemons (offset, limit){
    spinner.style.display = "block"
    for (let i = 1; i <= offset + limit; i++){
        fetchPokemon(i);
    }
}
//////////////////////////Crear Card Pokemons///////////////////////////


function crearPokemons(pokemon){
    const card = document.createElement (`div`);
    card.classList.add (`pokemon-card`);

    const imgContenedor = document.createElement (`div`);
    imgContenedor.classList.add (`img-contenedor`);

    const imgPokemon = document.createElement (`img`);
    imgPokemon.src = pokemon.sprites.front_default

    imgContenedor.appendChild(imgPokemon);

    const numeroPokemon = document.createElement (`p`);
    numeroPokemon.classList.add = `numero-pokemon`;
    numeroPokemon.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

    const nombrePokemon = document.createElement (`p`);
    nombrePokemon.classList.add = `nombre-pokemon`;
    nombrePokemon.textContent = pokemon.name

    card.appendChild (imgContenedor);
    card.appendChild (numeroPokemon);
    card.appendChild (nombrePokemon);

    contenedorPokemon.appendChild (card);
}

function removeChildNodes (parent){
    while (parent.firstchild) {
        parent.removechild(parent.firstchild);
    }
}

fetchPokemons(offset, limit);

//////////////////////////Paginación////////////////////////////////////

anterior.addEventListener('click', () => {
    if (offset != 1){
        offset -= 9;
        removeChildNodes(contenedorPokemon)
        fetchPokemons (offset, limit);
    }
})

siguiente.addEventListener('click', () => {
    offset += 9;
    removeChildNodes(contenedorPokemon)
    fetchPokemons (offset, limit);
})

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

////////////////////////Modos////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////////

formLogin.onsubmit = ( event ) => {
    event.preventDefault()
    if ( inputUser.value === datosUsuario.user && inputPass.value === datosUsuario.password ) {
        subirAlLs("login", true)
        contenedorForm.style.display = "none" 
        logout.style.display = "block" 
        contenedorPokemon.style.display = "flex"
        buscadorPokemon.style.display = "block"
        paginacion.style.display = "flex"
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
