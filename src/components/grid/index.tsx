import React from "react";
import { IPokemon } from "../../types/IPokemon";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import style from './Grid.module.scss';

interface Props {
    pokemons: IPokemon[]
}

export default function Grid({pokemons}: Props){
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'id', width: 250 },
        { field: 'nome', headerName: 'nome', width: 250 }
    ]; 
    
    return(
        <div className={style.GridContainer}>
            <DataGrid 
                className={style.Grid}
                columns={columns} 
                rows={pokemons} 
            />
        </div>
        
    )
} 