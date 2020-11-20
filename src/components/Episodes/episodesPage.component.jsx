import React from 'react'
import axios from 'axios'
import { ListGroup, Jumbotron, Container } from 'react-bootstrap'

export default class Episodes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            episodes: []
        }
    }
    componentDidMount() {
        axios.get('https://rickandmortyapi.com/api/episode/')
        .then(result => {
            this.setState({
                episodes: result.data.results
            })
        })
        .catch(err => console.error(err))
    }
    render() {
        return(
            <>
                    <Jumbotron>
                        <h2>Welcome to the Episodes Page</h2>
                    </Jumbotron>

                    <Container>
                        <ListGroup>
                            {this.state.episodes.map(episode => {
                                return <ListGroup.Item key={episode.id}>{episode.name}</ListGroup.Item>
                            })}
                        </ListGroup> 
                    </Container> 
                    
               </>
               
        )
    }
}