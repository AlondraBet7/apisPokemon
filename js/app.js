console.log("Dale like al video y suscríbete ")



// Para ejecutar primero el html y luego el js

document.addEventListener("DOMContentLoaded", () =>{

const random = (getRandomInt (1, 151));

// llamamos fetchData
fetchData(random)
})

// Para agregar el Math.random para hacer los numeros aleatorios  y cargar pokemones

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

// Constante que se usa normalmente 

// async, porque necesitamos que espere

//  Se lee intente hacer try y sino falla, es decir, catch

//  el await y async le dice espera que tenemos una solicitud cuando tengas esa info pasa a la siguiente linea.


const fetchData = async (id) => {
    try{
        const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`)

        // para transformarlo a JSON
        const data = await res.json()

        // Voy a pintar el template una vez que tengamos la solicitud anterior/// Que se pintara con la data que viene de la solicitud

        pintarCard(data)
    } catch (error){
        console.log(error)
    }
}

// Para manipular la plantilla del template

const pintarCard = (pokemon) =>{
console.log(pokemon)

// Donde va a ir nuestro template
const flex = document.querySelector(".flex")

// Capturamos nuestro template
const template = document.querySelector("#template-card").content
 
// Ahora no es necesario pero normalmente se duplica en templat anterior/ lo hacemos para manipularlo 
const clone = template.cloneNode (true)

// Entre las buenas practicas está hacer un fragment
const fragment = document.createDocumentFragment()

// Para cambiar la imagen utilizamos el clon del template 
clone.querySelector(".cardBodyImg").setAttribute("src", pokemon.sprites.other.dream_world.front_default)

//En el framento guarde el pedazo de codigo de arriba 
fragment.appendChild(clone)

// Una vez que lo tenemos en el fragment lo pasamos al flex 

flex.appendChild(fragment)

}