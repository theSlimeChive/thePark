import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Navbar, Nav , Jumbotron, Container } from 'react-bootstrap'
import styled, { ThemeProvider } from 'styled-components';
import './navbar.scss';
import './navbar'



export default class NavbarComponent extends React.Component {
    
    render() {
        return (
            <Jumbotron> 
                <Navbar expand='lg'  fixed='top' id="scrollable">
                    <Container>
                        <Navbar.Brand id="nav-title">
                            <Link to='/'>the Park</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='main-nav' />
                        <Navbar.Collapse id='main-nav'>
                            <Nav className='ml-auto nav-justified'>
                                <Nav.Link id="n-item">
                                    <Link to='/'>Characters</Link>
                                </Nav.Link>
                                <Nav.Link id="n-item">
                                    <Link to='/locations'>Locations</Link>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Container className='py-5 text-center'>
                    <h2 className="display-4" id="hero-text">A COLLECTION OF RICK AND MORTY</h2>
                    <p>Browse to see some quick facts and stats from R&M!</p>
                </Container>
            </Jumbotron>
        )
    }
}