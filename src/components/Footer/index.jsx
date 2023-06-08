import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import './styles.scss'
import ufc from '../../assets/img/logos/ufc-logo-horizontal.png'
import funcap from '../../assets/img/logos/funcap.png'
import { FiMapPin } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

export default function Footer() {

    return (

        <footer className="bg-primary text-white">

            <div className='container'>

                <div className="row align-items-stretch">

                    <div className="col-12 col-md mb-5 mb-md-0 d-flex flex-column align-items-md-center"> 

                        <a className='logo-funcap mb-4 mt-1' href="https://www.funcap.ce.gov.br" target="_blank">
                            <img className="w-100" src={funcap} alt="logo FUNCAP" />
                        </a>

                        <a className='logo-ufc' href="https://www.ufc.br" target="_blank" >
                            <img className="w-100" src={ufc} alt="logo UFC" />
                        </a>

                    </div>

                    <div className="col-12 col-md mb-5 mb-md-0 d-flex flex-column">

                        <h3 class="mb-4"> Menu </h3>

                        <Link className='mb-2 text-reset text-decoration-none' to="/#overview"> Visão Geral </Link>
                        <Link className='mb-2 text-reset text-decoration-none' to="/#history"> História </Link>
                        <Link className='mb-2 text-reset text-decoration-none' to="/cartas"> Cartas </Link>
                        <Link className='mb-2 text-reset text-decoration-none' to="/#examples"> Como adotar o USARP? </Link>
                        <Link className='mb-2 text-reset text-decoration-none' to="/materiais"> Materiais </Link>
                        <Link className='mb-2 text-reset text-decoration-none' to="/#team"> Time </Link>
                        <Link className='text-reset text-decoration-none' to="/#partners"> Parceiros </Link>

                    </div>

                    <div className="col-12 col-md d-flex flex-column">

                        <h3 class="mb-4">Contato</h3>

                        <a className='mb-3 text-reset text-decoration-none' href="https://goo.gl/maps/sJzhxn9cAhrRM8Wq8" target="_blank">
                            <FiMapPin/> <span>Rua Felipe Santiago, 411 - Cidade Universitária, Russas - CE, 62900-000</span> 
                        </a>

                        <a className='mb-3 text-reset text-decoration-none' href="tel:(88) 3411-6023">
                            <FiPhone  /> (88) 3411-6023
                        </a>
                        
                        <a className='text-reset text-decoration-none' href="mailto:beatriz.marques@ufc.br">
                            <FiMail /> beatriz.marques@ufc.br
                        </a>

                    </div>

                </div>

            </div>

            <hr className='m-0' />

            <div className='text-center py-4'> 
                 <p className='fs-6 mb-0'>Copyright © {new Date().getFullYear()} USARP </p>
            </div>

        </footer>

    )

}