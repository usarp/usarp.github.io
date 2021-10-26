import React from 'react';
import '../SectionInicio/style.scss';
import {Image} from 'react-bootstrap';
import 'bootstrap';
import img from '../../assets/background/fundo.png';

export default function SectionInicio() {
    return (
        <div className ='fundo'>
            <Image src={img}/>
        </div>
    )
}