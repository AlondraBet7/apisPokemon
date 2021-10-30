console.log("Dale like al video y suscríbete ")



// // Para ejecutar primero el html y luego el js

document.addEventListener("DOMContentLoaded", () => {

    const random = (getRandomInt(1, 152));

    // // llamamos fetchData
    fetchData(random)
});

// // Para agregar el Math.random para hacer los numeros aleatorios  y cargar pokemones

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

// // Constante que se usa normalmente 

// // async, porque necesitamos que espere

// //  Se lee intente hacer try y sino falla, es decir, catch

// //  el await y async le dice espera que tenemos una solicitud cuando tengas esa info pasa a la siguiente linea.


const fetchData = async (id) => {
    try {
        //         // Hace el consumo en fetch
        console.log (id);

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        //         // para transformarlo a JSON
        const data = await res.json();

        console.log(data);



        //         // Creamos el obejto con el que vamos a reemplazar la información ya existente

        const pokemon = {
            img: data.sprites.other.dream_world.front_default,
            nombre: data.name,
            hp: data.stats[0].base_stat,
            experiencia: data.base_experience,
            ataque: data.stats[1].base_stat,
            especial: data.stats[3].base_stat,
            defensa: data.stats[2].base_stat,
        }

   //         // Voy a pintar el template una vez que tengamos la solicitud anterior/// Que se pintara con la data que viene de la solicitud

   pintarCard(pokemon);

    } catch (error) {
        console.log(error)
    }
   
};

// // Para manipular la plantilla del template

const pintarCard = (pokemon) =>{

// // console.log(pokemon)

// // Donde va a ir nuestro template
const flex = document.querySelector(".flex")

// // Capturamos nuestro template
const template = document.querySelector("#template-card").content

// // Ahora no es necesario pero normalmente se duplica en templat anterior/ lo hacemos para manipularlo 
const clone = template.cloneNode(true)

// // Entre las buenas practicas está hacer un fragment
const fragment = document.createDocumentFragment()

// // Para cambiar la imagen utilizamos el clon del template 

// // Aqui agregamos el objeto que creamos anteriormente
clone.querySelector(".cardBodyImg").setAttribute("src", pokemon.img)

// // Ahora vamos a cambiar el h1 entonces primero lo clonamos

// // Aqui agregamos el objeto que creamos anteriormente

clone.querySelector(".cardBodyTitle").innerHTML = ` ${pokemon.nombre}
 <span>${pokemon.hp} hp</span>`

// // Como vamos a otro elemento lo clonamos

clone.querySelector(".cardBodyText").textContent = pokemon.experiencia + " Exp"

clone.querySelectorAll(".styleData")[0].textContent = pokemon.ataque + " k"

clone.querySelectorAll(".styleData")[1].textContent = pokemon.especial + " k"

clone.querySelectorAll(".styleData")[2].textContent = pokemon.defensa + " k"


// //En el framento guarde el pedazo de codigo de arriba 
fragment.appendChild(clone)

// // Una vez que lo tenemos en el fragment lo pasamos al flex 

flex.appendChild(fragment)

}