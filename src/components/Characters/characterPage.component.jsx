import React from 'react'
import axios from 'axios'

import { ListGroup, Jumbotron, Container } from 'react-bootstrap'

export default class Characters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: []
        }
    }
    componentDidMount() {
        axios.get('https://rickandmortyapi.com/api/character/')
        .then(result => {
            this.setState({
                characters: result.data.results
            })
        })
        .catch(err => console.error(err))
    }
    render() {
        return(
               <>
                    <Jumbotron>
                        <h2>Welcome to the Characters Page</h2>
                    </Jumbotron>

                    <Container>
                        <ListGroup>
                            {this.state.characters.map(character => {
                                return <ListGroup.Item key={character.id}>{character.name}</ListGroup.Item>
                            })}
                        </ListGroup> 
                    </Container> 
                    
               </>
        )
    }
}