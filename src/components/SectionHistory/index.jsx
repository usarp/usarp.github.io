import React, { useEffect, useState } from 'react'
import "./styles.scss"

export default function SectionHistory() {

    const [timeline] = useState([
        {
            title: "Surgimento",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores beatae enim aut fugit facere vel reiciendis dolorum perferendis consequuntur, est laudantium quo dolore, pariatur asperiores delectus quaerat. Cumque, molestias adipisci."
        },
        {
            title: "Evolução",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores beatae enim aut fugit facere vel reiciendis dolorum perferendis consequuntur, est laudantium quo dolore, pariatur asperiores delectus quaerat. Cumque, molestias adipisci."
        },
        {
            title: "Onde Estamos",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores beatae enim aut fugit facere vel reiciendis dolorum perferendis consequuntur, est laudantium quo dolore, pariatur asperiores delectus quaerat. Cumque, molestias adipisci."
        }
    ])

    return (

        <section id="history">

            <div className="container">

                <div className="row">

                    <div className="col-12">
                        <h1 className="fw-bold text-primary"> HISTÓRIA </h1>
                    </div>

                    <div className="col-12 mt-3 timeline">

                        {
                            timeline.map((item, index) => {
                                
                                return (

                                    <div className="row timeline-item" key={index} >
                                        
                                        <div className="line"></div>

                                        <div className={index % 2 === 0 ? 'col col-md-6 ms-auto ps-5' : 'col col-md-6 text-md-end me-md-auto ps-5 ps-md-0 pe-md-5'} >

                                            <h6 className="text-uppercase mb-5 mt-2 mt-md-3" > {item.title} </h6>

                                            <p className="mb-5"> {item.text} </p>

                                        </div>

                                    </div>

                                )

                            })
                        }

                    </div>

                </div>

            </div>

        </section>

    )
}