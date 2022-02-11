import React, { useState, useEffect } from 'react';

import Header from '../components/header';
import Grid from '../components/grid';
import { IPokemon } from '../types/IPokemon';
import style from './App.module.scss';

import { getData } from '../services/getData';

function App(){
	return (
		<div className={style.App}>
			<Header/>
			<Grid/>
		</div>
	);
}

export default App;