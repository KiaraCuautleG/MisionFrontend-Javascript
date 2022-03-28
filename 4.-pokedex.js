/*PROGRAMACIÓN ASINCRONA */


/*La API Fetch proporciona una interfaz JavaScript para acceder y manipular 
partes del canal HTTP, tales como peticiones y respuestas. También provee un método 
global fetch() (en-US) que proporciona una forma fácil y lógica de obtener recursos de 
forma asíncrona por la red. */


/*
El objeto Promise devuelto desde fetch() no será rechazado con un estado de error HTTP incluso si la respuesta es un error HTTP 404 o 500. En cambio, este se resolverá normalmente (con un estado ok configurado a false), y  este solo sera rechazado ante un fallo de red o si algo impidió completar la solicitud.
Por defecto, fetch no enviará ni recibirá cookies del servidor, resultando en peticiones no autenticadas si el sitio permite mantentener una sesión de usuario (para mandar cookies, credentials de la opción init deberan ser configuradas).
*/

/*fetch forma de hacer peticiones a una api */
/*La consulta a un servidor es asincrona se ejecuta en paralelo */
/*Las promesas se usan para que espere al momento recibir la petición del servidor */
const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

    /*Se consulta la api de la url */
    fetch(url).then((res) => {
        /*Al primer then regresa datos sobre el estatus de la petición del servidor 
        Todavia es una promesa */
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pikachu.jpg")
        }
        else {
            return res.json();
        }
        /*La data de la respuesta */
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let type= data.types[0].type.name;
            let name = data.forms[0].name;
            let id = data.id;
            let height = data.height;
            let pokeWeight=data.weight;
            let stats = data.stats;
            let hp = data.stats[0].base_stat; 
            let attact = data.stats[1].base_stat;
            let defense = data.stats[2].base_stat;
            let special_attack = data.stats[3].base_stat;
            let special_defense = data.stats[4].base_stat;
            let speed = data.stats[5].base_stat;

            console.log("Tipo:" + type);
            console.log("Nombre: " + name);
            console.log("ID: " + id);
            console.log("Altura: " + height);
            console.log("HP: " + hp);
            console.log("Ataque: " + attact);
            console.log("Defensa: " + defense);
            console.log("Ataque especial: " + special_attack);
            console.log("Defensa especial: " + special_defense);
            console.log("Velocidad: " + speed);

            pokemonName(name); 
            pokemoData(type, id);
            pokeStats(hp, attact, defense, special_attack, special_defense, speed);
            pokeWeightHeight(pokeWeight, height);
            pokeImage(pokeImg);
            console.log(pokeImg);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
const pokemonName = (name) => {
    let pokeName = name;
    document.getElementById("namePoke").innerHTML = pokeName; 
}
const pokemoData = (type, id) => {
    let pokeType = type;
    let pokeID = id;
    document.getElementById("type").innerHTML = pokeType;
    document.getElementById("id").innerHTML = pokeID;
}
const pokeStats = (hp, attact, defense, special_attack, special_defense, speed) => {
    document.getElementById("hp").innerHTML = hp; 
    document.getElementById("at").innerHTML = attact; 
    document.getElementById("df").innerHTML = defense; 
    document.getElementById("atE").innerHTML = special_attack; 
    document.getElementById("dfE").innerHTML = special_defense;
    document.getElementById("velocidad").innerHTML = speed;
}
const pokeWeightHeight = (weight, height) =>{
    let pokemonWeight = weight/1000;
    let pokemonHeight = height/10;
    document.getElementById("wight").innerHTML = pokemonWeight; 
    document.getElementById("height").innerHTML = pokemonHeight; 
}


