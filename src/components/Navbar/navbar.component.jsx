import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Navbar, Nav , Jumbotron, Container } from 'react-bootstrap'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: red;
`;
export default class NavbarComponent extends React.Component {
    
    
    render() {
        return (
            <Jumbotron bg='light'> 
                <Navbar expand='lg' fixed='top'>
                    <Container>
                        <Navbar.Brand>
                            <Link to='/'>the Park</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='main-nav' />
                        <Navbar.Collapse id='main-nav'>
                            <Nav className='ml-auto'>
                                <Nav.Link>
                                    <Link to='/characters'>Characters</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to='/locations'>Locations</Link>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar> 


                <Container className='py-5 text-center'>
                    <Title>
                        A COLLECTION 
                    </Title>
                </Container>
            </Jumbotron>
            
        )
    }
}