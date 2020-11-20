import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'


export default class NavbarComponent extends React.Component {
    render() {
        return (
            <Navbar bg='light' expand='lg'>
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
                            <Link to='/episodes'>Episodes</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/locations'>Locations</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/credits'>Credit</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> 
        )
    }
}