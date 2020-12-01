import React from 'react'
import axios from 'axios'

import { ListGroup, Jumbotron, Container, Card, CardColumns } from 'react-bootstrap'
import './characters.scss'

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
                    <Container fluid>
                        <h3 className="page-title py-2">Characters:</h3>
                        <CardColumns>
                        {this.state.characters.map(character => {
                            return (
                                <Card>
                                    <div className="row no-gutters">
                                        <div className="col-lg ">
                                            <img src={character.image} alt={character.name} className="rounded img-fluid w-100" id="characterImg"/>
                                        </div>
                                        <div className="col-lg">
                                            <Card.Body>
                                                <Card.Title>{character.name}</Card.Title>
                                                <Card.Subtitle>Status: {character.status}</Card.Subtitle>
                                                <Card.Text>Location: {character.location.name}</Card.Text>
                                                <Card.Text># of Episodes: {character.episode.length}</Card.Text>
                                            </Card.Body>
                                        </div>
                                        
                                    </div>
        
                                    
                                </Card>
                            )
                        })}
                        </CardColumns>
                    </Container> 
                    
               </>
        )
    }
}