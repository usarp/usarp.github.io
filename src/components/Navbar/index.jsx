import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import 'bootstrap';
import './navbar.scss'

export default function Home() {
    
    return (
        <div className="container position-relative">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow mt-4">
                
                <div className="container-fluid">
                
                    <Link className="navbar-brand logo" to="/"> USARP </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse itens" id="navbar">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/#overview"> Visão Geral </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/#history"> História </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/#cards"> Cards </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/#examples"> Como adotar o USARP? </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/#team"> Time </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/#partners"> Parceiros </Link>
                            </li>
                        </ul>
                    
                    </div>

                </div>
            </nav>
        </div>
    )
}