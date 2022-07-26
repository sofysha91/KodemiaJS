let inputNumber = document.querySelector(".input_text");
let btnSearch = document.querySelector(".search-button");
let pokemonArr = [];

//Get Pokemons from URL
 const getDataFromURL = (url) =>{
    let aPokemon = [];    
    const myRequest = new XMLHttpRequest();
    
    myRequest.onload = (data) => {        
        if (data.target.readyState === 4)   {
            if (
                data.target.status >= 200 ||
                data.target.status <= 399 
                ){                
                aPokemon = JSON.parse(data.target.responseText);
            }
            else if (data.target.status === 400){
                console.log('sucedio un error');
            }
        }
    } 
    myRequest.open("GET", url, false);     
    myRequest.send();

    return aPokemon;
 };



btnSearch.addEventListener("click", (e) => {
    
    let number = parseInt(inputNumber.value);
    if(!Number.isNaN(number)){
        pokemonArr = getDataFromURL("https://pokeapi.co/api/v2/pokemon?limit="+number+"&offset=0");
        document.querySelector("#list_result").innerHTML = generatePokemonCard(pokemonArr);
    }
    else{
        document.querySelector("#list_result").innerHTML = `<div class="alert alert-danger" role="alert">
        Ocurrio un error, ingrese un numero valido
      </div>`;
    }
    
});

const generatePokemonProfile = (arrPokemon) => {
    let pokemonProfile = arrPokemon.results.map((pokemon) => {
        //get pokemon data
        let data = getDataFromURL(pokemon.url);       
        //spread  operator
        return {...pokemon, ...data.sprites}
    });
    return pokemonProfile;
}

const generatePokemonCard = (arrPokemon) => {
    let pokemonList = generatePokemonProfile(arrPokemon);
    console.log(pokemonList);
    let pokemonCard = pokemonList.reduce((acc, {name, front_default}) => {
        /* destructuring
        const {name, photo} = pokemon;*/
        acc += `
        <div class="col-3">
            <div class="card">
                <img src="${front_default}" class="card-img-top" alt="${name}">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                </div>
            </div>
        </div>
        `;
        return acc;
    }, '');
    return pokemonCard;
}

