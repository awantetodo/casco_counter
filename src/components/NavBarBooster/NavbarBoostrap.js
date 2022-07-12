import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavbarBoostrap() {
    return (
        <Navbar bg="light" expand="lg" >
            <Container>
                <Link to={`/`}>
                    <img
                        alt=""
                        src={require('../Assets/Img/Sin título.png')}
                        width="60"
                        height="auto"
                        className="d-inline-block align-top me-2 rounded shadow bg-white rounded"
                    />{' '}
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" >
                        <Nav.Link as={Link} to='/'>IRU VERMÚ</Nav.Link>
                        <Nav.Link as={Link} to='/categoria/UNO'>Categoria 1</Nav.Link>
                        <Nav.Link as={Link} to='/categoria/DOS'>Categoria 2</Nav.Link>
                        <Nav.Link as={Link} to='/categoria/TRES'>Categoria 3</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Link to={'/Carrito'}>
                    <img
                        alt=""
                        src={require('../Assets/Img/cartImg.png')}
                        width="30"
                        height="auto"
                        className="d-inline-block align-text-bottom me-2 rounded"
                    />{' '}
                </Link>
            </Container>
        </Navbar>
    );
}

export default NavbarBoostrap;