

// /////////////////////LOGIN/////////////////////////////////
// const formLogin = document.querySelector ("#login")
// const inputUser = document.querySelector ("#input-user")
// const inputPass = document.querySelector ("#input-pass")
// const loginIncorrecto = document.querySelector ("#logint")
// const contenedorForm = document.querySelector (".login-box")
// const logout = document.querySelector (".logout")
// /////////////////////BOTON MODOS///////////////////////////
// const botonModos = document.querySelector ("#claro-oscuro")
// const body = document.querySelector (".modo-claro")
// /////////////////////BUSCADOR//////////////////////////////
// const buscadorPokemon = document.querySelector (".buscador")
// /////////////////////POKEMONS//////////////////////////////
// const contenedorPokemon =  document.querySelector (".contenedor-pokemon")
// const botonFavorito = document.querySelectorAll (".boton-fav")
// const arraypkm = []
// /////////////////////SPINNER///////////////////////////////
// const spinner = document.querySelector (".wobbling-10")
// /////////////////////PAGINACIÓN////////////////////////////
// const paginacion = document.querySelector (".paginacion")
// const anterior = document.querySelector ("#anterior")
// const siguiente = document.querySelector ("#siguiente")
// // const paginacion2 = document.querySelector (".paginacion2")
// // const anterior2 = document.querySelector ("#anterior2")
// // const siguiente2 = document.querySelector ("#siguiente2")

// let offset = 1
// let limit = 2

// //////////////////////////Paginación////////////////////////////////////

// function removeChildNodes (parent){
//     while (parent.firstChild) {
//         parent.removechild(parent.firstChild);
//     }
// }


// anterior.addEventListener('click', () => {
//     if (offset != 1)  {
//         offset -= 3;
//         removeChildNodes(contenedorPokemon);
//         contenedorPokemon.innerHTML = "";
//         fetchPokemons (offset, limit);
//     }
// })

// siguiente.addEventListener('click', () => {
//     offset += 3;
//     removeChildNodes(contenedorPokemon);
//     contenedorPokemon.innerHTML = "";
//     fetchPokemons (offset, limit);
// }) 

// // anterior2.addEventListener('click', () => {
// //     if (offset != 1)  {
// //         offset -= 50;
// //         removeChildNodes(contenedorPokemon)
// //         contenedorPokemon.innerHTML = "";
// //         fetchPokemons (offset, limit);
// //     }
// // })

// // siguiente2.addEventListener('click', () => {
// //     offset += 50;
// //     removeChildNodes(contenedorPokemon)
// //     contenedorPokemon.innerHTML = "";
// //     fetchPokemons (offset, limit);
// // }) 

// //////////////////////////Crear Card Pokemons///////////////////////////

// function cardHtml (data) {
//     const cartapkm = data.reduce ((acc, u)=> {
//         return acc + `
//         <div class="carta" id="pokemon-${u.id}">
//             <div class="carta-frente">
//                 <div class="info">
//                     <div class="img-contenedor">
//                         <img src=${u.sprites.front_default} alt=${u.name}>
//                     </div>
//                     <h2 class="numero">${u.id.toString().padStart(3, 0)}</h2>
//                     <h2 class="nombre">${u.name}</h2>
//                     <button id="boton-${u.id}" class="boton-fav"></button>
//                 </div>
//             </div>
//             <div class="carta-atras">
//                 <div class="contenido">
//                 </div>
//             </div>
//         </div>
//     `

//     }, "")

//     contenedorPokemon.innerHTML = cartapkm

//     botonFavorito.onclick = () => {
//         Toastify({
//             text: `Atrapaste un ${u.name}`,
//             duration: 1000,
//             className: "info",
//             close: true
//         }).showToast ()}
// }

// function moverAlCarrito (){

//     botonFavorito.forEach (u => {
//         u.onclick = () => {
//             console.log (u.id)
//         }
//     })
// }
// moverAlCarrito()

// //////////////////////////LLamarlos desde api///////////////////////////

// function fetchPokemon (id){

//     fetch ( `https://pokeapi.co/api/v2/pokemon/${id}/` )
//     .then (res => res.json())
//     .then (data =>{ 
//         arraypkm.push (data);
//         cardHtml(arraypkm)
//         })
//         spinner.style.display = "none"
//     }

//     function fetchPokemons (offset, limit){
//     spinner.style.display = "flex"
//     for (let i = offset; i <= offset + limit; i++){
//         fetchPokemon(i);
//     }
// }

// fetchPokemons(offset, limit);


// //////////////////////////Buscador//////////////////////////////////////

// document.addEventListener("keyup", e => {

//     if (e.target.matches ("#search")){

//         if (e.key ==="Escape")e.target.value = ""

//         document.querySelectorAll(".carta-frente").forEach(fetchPokemons =>{

//             fetchPokemons.textContent.toLowerCase().includes(e.target.value.toLowerCase())
//             ?fetchPokemons.classList.remove("filtro")
//             :fetchPokemons.classList.add("filtro")
//         })
//     }
// })



// ////////////////////////////Modos///////////////////////////////////////

// botonModos.onclick = () => {
//     const cambioImagen = document.getElementById("avatar");
//     body.classList.toggle("modo-oscuro")
//     if (body.className === "modo-claro modo-oscuro"){
//         botonModos.textContent = "Modo Claro"
//         cambioImagen.src = "img/master_Ball_icon-LOGIN.jpg";
//     } else {
//         botonModos.textContent = "Modo Oscuro"
//         cambioImagen.src = "img/Poké_Ball_icon-LOGIN.jpg";
//     }
// }

// /////////////////////////////////////////////////////////////////////////

// const datosUsuario = {
//     user: "cesar",
//     password: "cesar11"
// }

// const subirAlLs = ( clave, valor ) => {
//     localStorage.setItem(clave, JSON.stringify(valor))
// }

// const obtenerDelLs = ( clave ) => {
//     return JSON.parse(localStorage.getItem(clave))
// }

// ///////////////////////Evento Post-Login////////////////////////////////

// formLogin.onsubmit = ( event ) => {
//     event.preventDefault()
//     if ( inputUser.value === datosUsuario.user && inputPass.value === datosUsuario.password ) {
//         subirAlLs("login", true)
//         swal("Login correcto","¡Bienvenido a CoderDex Js!")
//         contenedorForm.style.display = "none" 
//         logout.style.display = "block" 
//         contenedorPokemon.style.display = "flex"
//         buscadorPokemon.style.display = "block"
//         paginacion.style.display = "flex"
//         // paginacion2.style.display = "flex"
//     } else {        
//         loginIncorrecto.style.display = "block"
//         inputPass.style.border = "2px solid red"
//         inputUser.style.border = "2px solid red"
//         buscadorPokemon.style.display = "none"
//         formLogin.reset();
//     }

// }

// /////////////////////////////////////////////////////////////////////////

// function validarLogin ( clave ) {
//     if ( clave !== true ) {
//         contenedorForm.style.display = "flex"
//         logout.style.display = "none"     
//     } else {
//         contenedorForm.style.display = "none"
//         logout.style.display = "block" 
//     }
    
// }

// validarLogin(obtenerDelLs("login"))

// /////////////////////////////////////////////////////////////////////////

// logout.onclick = () => {
//     localStorage.removeItem( "login" )
//     validarLogin(obtenerDelLs("login"))
//     formLogin.reset()
//     location.reload()
// }

// /////////////////////////////////////////////////////////////////////////


/////////////////////LOGIN/////////////////////////////////
const formLogin = document.querySelector("#login")
const inputUser = document.querySelector("#input-user")
const inputPass = document.querySelector("#input-pass")
const loginIncorrecto = document.querySelector("#logint")
const contenedorForm = document.querySelector(".login-box")
const logout = document.querySelector(".logout")
/////////////////////BOTON MODOS///////////////////////////
const botonModos = document.querySelector("#claro-oscuro")
const body = document.querySelector(".modo-claro")
const listaFav = document.querySelector(".lista-favoritos")
/////////////////////BUSCADOR//////////////////////////////
const buscadorPokemon = document.querySelector(".buscador")
/////////////////////POKEMONS//////////////////////////////
const contenedorPokemon = document.querySelector(".contenedor-pokemon")
const arraypkm = []
const card = document.querySelector(".card")
/////////////////////SPINNER///////////////////////////////
const spinner = document.querySelector(".wobbling-10")
/////////////////////PAGINACIÓN////////////////////////////
const paginacion = document.querySelector(".paginacion")
const anterior = document.querySelector("#anterior")
const siguiente = document.querySelector("#siguiente")
const paginacion2 = document.querySelector (".paginacion2")
const anterior2 = document.querySelector ("#anterior2")
const siguiente2 = document.querySelector ("#siguiente2")

let offset = 1
let limit = 150

//////////////////////////Paginación////////////////////////////////////

anterior.addEventListener("click", () => {
    if (offset != 1) {
        offset -= 151;
        removeChildNodes(contenedorPokemon);
        fetchPokemons(offset, limit);
    }
});

siguiente.addEventListener("click", () => {
    offset += 151;
    removeChildNodes(contenedorPokemon);
    fetchPokemons(offset, limit);
});

anterior2.addEventListener("click", () => {
    if (offset != 1) {
        offset -= 151;
        removeChildNodes(contenedorPokemon);
        fetchPokemons(offset, limit);
    }
});

siguiente2.addEventListener("click", () => {
    offset += 151;
    removeChildNodes(contenedorPokemon);
    fetchPokemons(offset, limit);
});



//////////////////////////Crear Card Pokemons///////////////////////////

function crearPokemon(pokemon) {
    const carta = document.createElement("div");
    carta.classList.add("carta");

    const cardContainer = document.createElement("div");
    cardContainer.classList.add("carta-frente");

    carta.appendChild(cardContainer);

    const card = document.createElement("div");
    card.classList.add("info");

    const spriteContainer = document.createElement("div");
    spriteContainer.classList.add("img-contenedor");

    const sprite = document.createElement("img");
    sprite.src = pokemon.sprites.front_default;

    spriteContainer.appendChild(sprite);

    const number = document.createElement("p");
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = pokemon.name;


    const boton = document.createElement("button");
    boton.classList.add("boton-fav")
    boton.classList.add("boton-capturado")
    boton.setAttribute("id", `boton-${pokemon.id}`)


    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);
    card.appendChild(boton);

    cardContainer.appendChild(card);
    contenedorPokemon.appendChild(carta);

        boton.onclick = () => {
            boton.classList.toggle("boton-fav")
            if (boton.className === "boton-capturado"){ 
                arraypkm.push(pokemon);
                Toastify({
                    text: `Atrapaste un ${pokemon.name}`,
                    duration: 1000,
                    className: "info",
                    close: true
                }).showToast()}
            else {
                arraypkm.filter((u) => 
                    u !== pokemon)
                Toastify({
                    text: `Soltaste un ${pokemon.name}`,
                    duration: 1000,
                    className: "info",
                    close: true
                }).showToast()
            }
            console.log(arraypkm)
        }
}


//////////////////////////LLamarlos desde api///////////////////////////

function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
        crearPokemon(data);
        spinner.style.display = "none";
    });
}

function fetchPokemons(offset, limit) {
    spinner.style.display = "block"
    for (let i = offset; i <= offset + limit; i++) {
        fetchPokemon(i);
    }
}

//////////////////////////Buscador//////////////////////////////////////

document.addEventListener("keyup", e => {

    if (e.target.matches("#search")) {
        if (e.key === "Escape") e.target.value = ""
        document.querySelectorAll(".carta-frente").forEach(fetchPokemons => {
            fetchPokemons.textContent.toLowerCase().includes(e.target.value.toLowerCase()) ?
                fetchPokemons.classList.remove("filtro") :
                fetchPokemons.classList.add("filtro")
        })
    }
})

////////////////////////////Modos///////////////////////////////////////

botonModos.onclick = () => {
    const cambioImagen = document.getElementById("avatar");
    body.classList.toggle("modo-oscuro")
    if (body.className === "modo-claro modo-oscuro") {
        cambioImagen.src = "img/master_Ball_icon-LOGIN.jpg";
    } else {
        cambioImagen.src = "img/Poké_Ball_icon-LOGIN.jpg";
    }
}

/////////////////////////////////////////////////////////////////////////

const datosUsuario = {
    user: "cesar",
    password: "cesar11"
}

const subirAlLs = (clave, valor) => {
    localStorage.setItem(clave, JSON.stringify(valor))
}

const obtenerDelLs = (clave) => {
    return JSON.parse(localStorage.getItem(clave))
}

///////////////////////Evento Post-Login////////////////////////////////

formLogin.onsubmit = (event) => {
    event.preventDefault()
    if (inputUser.value === datosUsuario.user && inputPass.value === datosUsuario.password) {
        subirAlLs("login", true)
        swal("Login correcto", "¡Bienvenido a CoderDex Js!")
        contenedorForm.style.display = "none"
        logout.style.display = "block"
        contenedorPokemon.style.display = "flex"
        buscadorPokemon.style.display = "block"
        paginacion.style.display = "flex"
        paginacion2.style.display = "flex"
        listaFav.style.display = "flex"
    } else {
        loginIncorrecto.style.display = "block"
        inputPass.style.border = "2px solid red"
        inputUser.style.border = "2px solid red"
        buscadorPokemon.style.display = "none"
        formLogin.reset();
    }

}

/////////////////////////////////////////////////////////////////////////

function validarLogin(clave) {
    if (clave !== true) {
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
    localStorage.removeItem("login")
    validarLogin(obtenerDelLs("login"))
    formLogin.reset()
    location.reload()
}

/////////////////////////////////////////////////////////////////////////
function removeChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
fetchPokemons(offset, limit);