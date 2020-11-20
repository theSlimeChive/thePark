import React from 'react'
import axios from 'axios'
import { ListGroup, Jumbotron, Container } from 'react-bootstrap'

export default class Locations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: []
        }
    }
    componentDidMount() {
        axios.get('https://rickandmortyapi.com/api/location/')
        .then(result => {
            this.setState({
                locations: result.data.results
            })
        })
        .catch(err => console.error(err))
    }
    render() {
        return(

            <>
                    <Jumbotron>
                        <h2>Welcome to the Locations Page</h2>
                    </Jumbotron>

                    <Container>
                        <ListGroup>
                            {this.state.locations.map(location => {
                                return <ListGroup.Item key={location.id}>{location.name}</ListGroup.Item>
                            })}
                        </ListGroup> 
                    </Container> 
                    
            </>
               
        )
    }
}