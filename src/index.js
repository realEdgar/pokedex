
const load = (async () => {
    const getData = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    const listPokemon = await getData(`https://pokeapi.co/api/v2/pokemon-species/?offset=000&limit=898`);
    const container = document.getElementById('root');
    const datos = listPokemon.results;

    const createTemplate = (nombres, id) => {
        if(id >= 0 && id < 9 ){
            return (
                `
                <div class="container-data">
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${id + 1}.png" alt="${nombres.name}" />
                    <p>${id + 1}. ${nombres.name.toUpperCase()}</p>
                </div>
                `
            )
        }
        if(id >= 9 && id < 99 ){
            return (
                `
                <div class="container-data">
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${id + 1}.png" alt="${nombres.name}" />
                    <p>${id + 1}. ${nombres.name.toUpperCase()}</p>
                </div>
                `
            )
        }
        if(id >= 99 && id <= 898 ){
            return (
                `
                <div class="container-data">
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id + 1}.png" alt="${nombres.name}" />
                    <p>${id + 1}. ${nombres.name.toUpperCase()}</p>
                </div>
                `
            )
        }
    }

    datos.forEach((name, id) => {
        const HTMLString = createTemplate(name, id)
        const html = document.implementation.createHTMLDocument()
        html.body.innerHTML = HTMLString
        container.append(html.body.children[0])
    })

    
})()