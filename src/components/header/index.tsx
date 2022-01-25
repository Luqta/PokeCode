import React from "react";
import style from './Header.module.scss';
const logo = require('../../assets/Pokemon-Logo.png');

export default function Header(){
    return(
        <div className={style.Header}>
            <img 
                src={logo} 
                alt="logo" 
            />
        </div>
    )
}