import React, {useEffect, useState} from "react";
import { IPokemon } from "../../types/IPokemon";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import style from './Grid.module.scss';

import { getData } from '../../services/getData';

/**
 * Componente de grid
 * @returns Renderização da grid com todos pokémon que provém da requisição da API
 */
export default function Grid(){
    const [pokemons, setPokemon] = useState<IPokemon[] | []>([])
    /**
     * Configurações da grid a ser renderizada
     * field: identificador interno;
     * headerName: como estará o nome na grid;
     * width: largura inicial dessa coluna
     */
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'N° na pokedéx', width: 250 },
        { field: 'nome', headerName: 'nome', width: 250 }
    ]; 

    /**
     * Utilizada para primeira renderização da grid, trazendo os primeiros 151 pokémons
     */
	useEffect(
        () => {
		    getData()
                .then(pokemon => {
                    setPokemon(pokemon)
                })
	    }, 
        []
    ) 
    
    return(
        <div className={style.gridContainer}>
            <DataGrid 
                className={style.grid}
                columns={columns} 
                rows={pokemons} 
            />
        </div>
        
    )
} 