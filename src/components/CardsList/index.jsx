import React, { useEffect, useState } from 'react';
import './styles.scss';
import { getAllCards, getCardByKey } from '../../resources/Cards'

export default function CardsList(props) {

    const [cards] = useState(getAllCards());

    const [selected, setSelected] = useState(null);

    function select_card(card, e = null) {
        if (e) {
            e.stopPropagation()
        }
        
        props.onSelectedCard(card);
        setSelected(card.id)
    }
    
    let initialCard = getCardByKey('M1')

    useEffect(() => {
        select_card(initialCard)
    }, [initialCard]);

    return (

        <div className="cards-list">

            <ul className="ps-0 d-none d-lg-block">

                {
                    cards.map(card => {
                        return (
                            <li className={selected === card.id ? 'active' : ''} 
                                key={card.id} 
                                onClick={ (e) => select_card(card, e) } > 
                            
                                {card.name} 

                                {card.options && card.options.length > 1 && 
                                    <ul className="options">
                                        {
                                            card.options.map(option => {
                                                return ( 
                                                    <li className={selected === option.id ? 'active' : ''} 
                                                        key={option.id} 
                                                        onClick={ (e) => select_card(option, e) } > 
                                                    
                                                        {option.name} 

                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                }

                            </li>
                        )
                    })
                }

            </ul>

            <select 
                class="form-select d-lg-none"
                onChange={(e) => select_card(cards.filter(c => c.id === e.target.value)[0], e)} >
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