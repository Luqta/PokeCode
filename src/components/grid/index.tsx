import React, {useEffect, useState} from "react";
import { IPokemon } from "../../types/IPokemon";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import style from './Grid.module.scss';

import { getData } from '../../services/getData';

export default function Grid(){
    const [pokemons, setPokemon] = useState<IPokemon[] | []>([])
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'id', width: 250 },
        { field: 'nome', headerName: 'nome', width: 250 }
    ]; 

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