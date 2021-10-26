import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { getCardByKey } from '../../resources/Cards'
import './styles.scss'

export default function SectionCards() {

    const [firsthovered, setFirstHovered] = useState(false);
    const toggleFirstHover = () => { setFirstHovered(!firsthovered); toggleSecondHover() };

    const [secondHovered, setSecondHovered] = useState(true);
    const toggleSecondHover = () => {setSecondHovered(!secondHovered)};

    const [thirdHovered, setThirdHovered] = useState(false);
    const toggleThirdHover = () => { setThirdHovered(!thirdHovered); toggleSecondHover() };

    return (

        <section id="cards">

            <div className="container">
                
                <div className="row">
                
                    <div className="col-12">
                        <h1 className="fw-bold text-primary">CARTAS</h1>
                    </div>
                
                </div>

                <div className="row">
                    
                    <div className="col-12">

                        <div className="cards-examples d-flex justify-content-center align-items-center">

                            <div 
                                className={firsthovered ? 'card-example me-n2 hovered' : 'card-example me-n2'}
                                onMouseEnter={toggleFirstHover}
                                onMouseLeave={toggleFirstHover}>

                                <img className="img-fluid" src={getCardByKey('M1').img} alt={getCardByKey('M1').name} />

                            </div>

                            <div 
                                className={secondHovered ? 'card-example hovered' : 'card-example'}>

                                <img className="img-fluid" src={getCardByKey('M2').img} alt={getCardByKey('M2').name} />

                            </div>
                            
                            <div 
                                className={thirdHovered ? 'card-example ms-n2 hovered' : 'card-example ms-n2'}
                                onMouseEnter={toggleThirdHover}
                                onMouseLeave={toggleThirdHover}>

                                <img className="img-fluid" src={getCardByKey('M3').img} alt={getCardByKey('M3').name} />

                            </div>

                        </div>

                    </div>

                    <div className="col-12 text-center mt-2">

                        <button className="btn btn-outline-primary mx-2"> DOWNLOAD PDF </button>

                        <Link className="btn btn-primary mx-2 mt-2 mt-sm-0" to="/cartas"> CONFIRA </Link>

                    </div>

                </div>

            </div>

        </section>

    )

}