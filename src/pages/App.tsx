import React, { useState, useEffect } from 'react';

import Header from '../components/header';
import Grid from '../components/grid';
import { IPokemon } from '../types/IPokemon';
import style from './App.module.scss';

function App(){
	const [pokemons, setPokemon] = useState<IPokemon[] | []>([])
	
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
			const data = await response.json();
			
			data.results.map((teste:any) => fetchDataDetail(teste))	
		};
		const fetchDataDetail = async (pokemon: any) => {
			const response = await fetch(pokemon.url);
			const data = await response.json();

			setPokemon(
				pokemonAntigos => [
					...pokemonAntigos, 
					{
						id: data.id, 
						nome: data.name
					}
				]
			)	
		};

		fetchData()
	  }, []);

	return (
		<div className={style.App}>
			<Header/>
			<Grid pokemons={pokemons}/>
		</div>
	);
}

export default App;