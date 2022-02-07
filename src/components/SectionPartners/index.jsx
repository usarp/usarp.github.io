import React from 'react'
import funcap from '../../assets/img/logos/funcap.png'
import ufc from '../../assets/img/logos/ufc-logo-vertical.png'
import './styles.scss'

export default function SectionPartners() {

    return (

        <section id="partners">

            <div className="container">

                <h1 className="fw-bold mb-3 text-primary"> PARCEIROS </h1>

                <div className="row justify-content-center pt-5">

                    <div className="col-12 col-sm-6 col-md-4 col-lg-5 mb-5 mb-sm-0 d-flex">
                        <a className='partner-logo' href="https://www.funcap.ce.gov.br" target="_blank">
                            <img src={funcap} alt="logo FUNCAP" />
                        </a>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-5 d-flex">
                        <a className="partner-logo" href="https://www.ufc.br" target="_blank" >
                            <img src={ufc}  alt="logo UFC" />
                        </a>
                    </div>

                </div>

            </div>

        </section>

    )

}