import React, { useState, useEffect } from 'react';
import CardsList from '../../components/CardsList/';
import Footer from '../../components/Footer/';

import './styles.scss';

export default function Cards() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [card, setCard] = useState({
        id: '',
        name: '',
        img: ''
    });

    const [cardOptions] = useState([
        {id: 'mechanism', name: 'Mecanismo'},
        {id: 'requirements', name: 'Requisitos'},
        {id: 'prototyping', name: 'Prototipação'},
    ])

    const [selectedOption, setSelectedOption] = useState('mechanism');

    function showCards() {

        if (selectedOption === 'mechanism') {
            return (
                <div className="col col-md-6 col-lg-4 col-xxl-3">
                    <img className="w-100" src={card.img} alt={card.name} />
                </div>
            )
        } else if (card[selectedOption]) {
            return (
                card[selectedOption].map(c => {
                    return (
                        <div className="col-12 col-md-6 col-lg-4 col-xxl-3 mb-3">
                            <img className="w-100" src={c.img} alt={card.name} />
                        </div>
                    )
                })
            )
        }

    }

    return (

        <main id="cards-page">

            <div className="container mb-5">

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
                        
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            
                            <div className="btn-group flex-wrap card-options mb-3">

                                {
                                    cardOptions.map(option => {

                                        return (
                                            <button
                                                className={selectedOption == option.id ? "btn btn-sm btn-outline-primary active" : "btn btn-sm btn-outline-primary"}
                                                key={option.id}
                                                onClick={() => setSelectedOption(option.id)}>
                                                {option.name}
                                            </button>
                                        )

                                    })
                                }

                            </div>

                            <div className="row justify-content-center">
                                
                                {showCards()}

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <Footer/>

        </main>

    )

}