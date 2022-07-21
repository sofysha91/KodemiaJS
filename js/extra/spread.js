
const generatePokemonProfile = (arrPokemon) => {
    let pokemonProfile = arrPokemon.map((pokemon) => {
        //spread  operator
        return {...pokemon, ...sprites[pokemon.name]}
    });
    return pokemonProfile;
}


const generatePokemonCard = (arrPokemon) => {
    let pokemonList = generatePokemonProfile(arrPokemon);

    let pokemonCard = pokemonList.reduce((acc, {name, photo}) => {
        /* destructuring
        const {name, photo} = pokemon;*/
        acc += `
        <div class="col-3">
            <div class="card">
                <img src="${photo}" class="card-img-top" alt="...">
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

document.querySelector(".row").innerHTML = generatePokemonCard(pokemons);