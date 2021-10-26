import React, { useState } from 'react';
import CardsList from '../../components/CardsList/';

import './styles.scss';

export default function Cards() {

    const [card, setCard] = useState({
        id: '',
        name: '',
        img: ''
    });

    return (
        
        <div id="cards-page" className="container pt-5">

            <div className="row pt-5">

                <div className="col-12">

                    <h1 className="text-primary fw-bold"> CARDS </h1>

                </div>

            </div>

            <div className="row mt-3">

                <div className="col-12 col-lg-3 mb-4 mb-lg-0">

                    <CardsList onSelectedCard={(card) => setCard(card)} />

                </div>

                <div className="col">
                    
                    <div className="d-flex justify-content-center justify-content-lg-end">

                        <div className="card-img">
                            <img src={card.img} alt={card.name} />
                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}