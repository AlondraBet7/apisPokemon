console.log("Dale like al video y suscríbete ")


document.addEventListener("DOMContentLoaded", () => {

    const random = (getRandomInt(1, 152));

    fetchData(random)
});


const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}


const fetchData = async (id) => {
    try {
       
        console.log (id);

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);


        const data = await res.json();

        console.log(data);

        const pokemon = {
            img: data.sprites.other.dream_world.front_default,
            nombre: data.name,
            hp: data.stats[0].base_stat,
            experiencia: data.base_experience,
            ataque: data.stats[1].base_stat,
            especial: data.stats[3].base_stat,
            defensa: data.stats[2].base_stat,
        }

   pintarCard(pokemon);

    } catch (error) {
        console.log(error)
    }
   
};


const pintarCard = (pokemon) =>{

const flex = document.querySelector(".flex")


const template = document.querySelector("#template-card").content


const clone = template.cloneNode(true)


const fragment = document.createDocumentFragment()

clone.querySelector(".cardBodyImg").setAttribute("src", pokemon.img)


clone.querySelector(".cardBodyTitle").innerHTML = ` ${pokemon.nombre}
 <span>${pokemon.hp} hp</span>`


clone.querySelector(".cardBodyText").textContent = pokemon.experiencia + " Exp"

clone.querySelectorAll(".styleData")[0].textContent = pokemon.ataque + " k"

clone.querySelectorAll(".styleData")[1].textContent = pokemon.especial + " k"

clone.querySelectorAll(".styleData")[2].textContent = pokemon.defensa + " k"


fragment.appendChild(clone)


flex.appendChild(fragment)

}