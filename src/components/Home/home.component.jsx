import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap'

export default class Home extends React.PureComponent{
    render() {
        return (
            <>
                <Jumbotron>
                    <h1>Welcome to Home Splash Page</h1>
                </Jumbotron>
                <Container>
                    <h2>Content to come!</h2>
                </Container>
            </>
        )
    }
}