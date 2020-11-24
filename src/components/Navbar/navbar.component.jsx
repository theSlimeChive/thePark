import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Navbar, Nav , Jumbotron, Container } from 'react-bootstrap'
import styled, { ThemeProvider } from 'styled-components';
import './_fonts.scss'

const theme = {
    _bar: '#39971C',
    font: 'Roboto'
}
const Title = styled.h1`
    color: ${theme._bar};
    font-family: ${theme.font};
`;

const StyledJumbo = styled(Jumbotron)`
    background-color: white;
`;

const StyledLink = styled(Link)`
    color: black;
    
    
`;

const StyledBrand = styled(Navbar.Brand)`
    font-weight: 700;
`;


export default class NavbarComponent extends React.Component {
    
    render() {
        return (
                <StyledJumbo> 
                    <Navbar expand='lg' bg="white" fixed='top'>
                        <Container>
                            <StyledBrand>
                                <StyledLink to='/'>the Park</StyledLink>
                            </StyledBrand>
                            <Navbar.Toggle aria-controls='main-nav' />
                            <Navbar.Collapse id='main-nav'>
                                <Nav className='ml-auto'>
                                    <Nav.Link>
                                        <StyledLink to='/characters'>Characters</StyledLink>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <StyledLink to='/locations'>Locations</StyledLink>
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <Container className='py-5 text-center'>
                        <Title>
                            A COLLECTION OF RICK AND MORTY 
                        </Title>
                    </Container>
                </StyledJumbo>
        )
    }
}