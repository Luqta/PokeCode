import axios from "axios";
import { IPokemon } from "../types/IPokemon";
/**
 * 
 * @returns Informações que serão usadas no setState, ou seja, todos os pokemons a serem renderizados
 */
export const getData = async () => {
    const allPokemons = await fetchData("https://pokeapi.co/api/v2/pokemon?limit=151")

    const detailedPokemon = await Promise.all(
        allPokemons.results.map(
            async(
                pokemon: { 
                    name: string, 
                    url: string 
                }
            ) => {
                const pokeInfo = await fetchData(pokemon.url)
                return {id: pokeInfo.id, nome: pokeInfo.name}
            }
        )
    )

    return detailedPokemon
};
/**
 * Função responsável por fazer a requisição na api PokeApi
 * @param url URL em que será feita a consulta para fazer a consulta
 * @returns A resposta da requisição da API
 */
const fetchData = async (url: string) => {
    const response = await axios(url);

    return response.data
}