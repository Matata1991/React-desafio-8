import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";



const Nabvar = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="secondary" >
            <Link exact to='/' >
            <Navbar.Brand>             
                    <img
                    alt="img"
                    src="/humildad.svg"
                    width="30"
                    height="40"
                    />
                    La Humildad
            </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
                <Link exact to='/' >
                    <Nav> Home </Nav>
                </Link>
                <Link exact to='/categoria/tortas'>
                    <Nav> Tortas </Nav>
                </Link>
                <Link exact to='/categoria/sandwiches' >
                    <Nav> Sandwiches </Nav>
                </Link>
                <Link exact to='/contacto' >
                    <Nav> Contacto </Nav>
                </Link>
                <Link exact to='/carrito'>
                    <Nav> 
                        <img src="/carrito.svg" alt="Logo" width="30" height="40"/> 
                    </Nav>
                </Link>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}

export default Nabvar
