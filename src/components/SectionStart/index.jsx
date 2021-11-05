import React from 'react';
import './style.scss';
import 'bootstrap';
import img from '../../assets/background/fundo.png';

export default function SectionInicio() {
    return (
        <div className ='fundo'>
            <img src={img}/>
        </div>
    )
}