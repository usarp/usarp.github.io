import React from 'react';
import './styles.scss';

export default function SectionExamples() {

    return (

        <section id="examples">

            <div className="container">

                <div className="row">

                    <div className="col-12 col-md-4 mb-5">
                        <h1 className="fw-bold text-primary">EXEMPLOS EM USO</h1>

                        <p className="text-primary">
                            Exemplos do uso de cards da USARP para melhor entendimento de como aplicar ao seu contexto.
                        </p>

                    </div>

                    <div className="col-12 col-md">

                        <div className="box-examples p-3 p-md-4">

                            <div className="box-examples-content">

                                <p className="text-center">EXEMPLO</p>

                                {
                                    Array(6).fill().map(_ => {
                                        return (
                                            <div className="h-25 mb-5">
                                                <p> Passo </p>

                                                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non facilis ex modi nam nihil harum, officia quia corrupti in consequuntur neque aspernatur est ipsam dolor sint porro laborum pariatur? Tempora. </p>
                                            </div>
                                        )
                                    })
                                }

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    )

}