import React, { useEffect, useState } from 'react';
import './styles.scss';
import { getAllCards, getCardByKey } from '../../resources/cards'

export default function CardsList(props) {

    const [cards] = useState(getAllCards());

    const [selected, setSelected] = useState(null);

    function selectCard(card, e = null) {
        if (e) {
            e.stopPropagation()
        }
        
        props.onSelectedCard(card);
        setSelected(card.id)
    }
    
    let initialCard = getCardByKey('M1')

    useEffect(() => {
        selectCard(initialCard)
    }, [initialCard]);

    return (

        <div className="cards-list">

            <ul className="ps-0 d-none d-lg-block">

                {
                    cards.map(card => {
                        return (
                            <li className={selected === card.id ? 'active' : ''} 
                                key={card.id} 
                                onClick={ (e) => selectCard(card, e) } > 
                            
                                {card.name} 

                            </li>
                        )
                    })
                }

            </ul>

            <select 
                className="form-select d-lg-none"
                onChange={(e) => selectCard(cards.filter(c => c.id === e.target.value)[0], e)} >
                {
                    cards.map(card => {
                        return (
                            <option selected={selected === card.id ? 'selected' : ''}
                                key={card.id}
                                value={card.id} >

                                {card.name}

                            </option>
                        )
                    })
                }
            </select>

        </div>

    )   

} 