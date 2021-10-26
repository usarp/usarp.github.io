import React from 'react';
import 'bootstrap';
import './navbar.scss'
import {Nav , Navbar} from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';



export default function Home() {
    
    return (
            <Navbar bg="navColor" className="teste shadow position-absolute mt-4" variant="dark" expand="lg" >
                <Navbar.Brand className="logo" href="#">
                    USARP
                </Navbar.Brand>

                <NavbarToggle/>
                <NavbarCollapse className="title">

                <Nav className="itens">
                    <Nav.Link href="visaoGeral">Visão Geral</Nav.Link>
                    <Nav.Link href="visaoGeral">História</Nav.Link>
                    <Nav.Link href="visaoGeral">Cards</Nav.Link>
                    <Nav.Link href="visaoGeral">Exemplos em uso</Nav.Link>
                    <Nav.Link href="visaoGeral">Time</Nav.Link>
                </Nav>

                </NavbarCollapse>
            </Navbar>

    )
}