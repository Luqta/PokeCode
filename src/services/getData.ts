import axios from "axios";
import { IPokemon } from "../types/IPokemon";

export const getData = async () => {
    let arr:IPokemon[] = []
    const allPokemons = await fetchData("https://pokeapi.co/api/v2/pokemon?limit=5")

    const teste = allPokemons.results.map(
        async (
            pokemon: { 
                name: string, 
                url: string 
            }
        ) => {
            const pokeInfo = await fetchData(pokemon.url)
            return {id: pokeInfo.id, nome: pokeInfo.name}
        }
    )
    
    console.log(teste)
    console.log(arr)

    return arr
};

const fetchData = async (url: string) => {
    const response = await axios(url);

    return response.data
}