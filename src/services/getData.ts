import axios from "axios";
import { IPokemon } from "../types/IPokemon";

export const getData = async () => {
    const arr:IPokemon[] = []
    const allPokemons = await fetchData("https://pokeapi.co/api/v2/pokemon?limit=10")

    const pokemonsDetalhados = await Promise.all(allPokemons.results.map(async (
        pokemon: { 
            name: string, 
            url: string 
        }
    ) => {
        const pokeInfo = await fetchData(pokemon.url)
        return {id: pokeInfo.id, nome: pokeInfo.name}
    })
    )

  
    return pokemonsDetalhados
};

const fetchData = async (url: string) => {
    const response = await axios(url);

    return response.data
}