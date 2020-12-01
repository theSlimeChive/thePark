import React from 'react'
import axios from 'axios'
import { ListGroup, Jumbotron, Container, Card, CardColumns } from 'react-bootstrap'
import './locations.scss'
import '../../baseStyles/base.scss'

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
                <Container fluid className="py-3">
                    <h3 className="page-title">Locations: </h3>
                    <CardColumns>
                        {this.state.locations.map(location => {
                            return (
                                <Card border="warning">
                                    <Card.Header>
                                        <Card.Title>{location.name}</Card.Title>
                                        <Card.Subtitle className="text-muted">{location.type}</Card.Subtitle>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="row text-center">
                                            <div className="col py-2">
                                                <Card.Text className="subtitled">Dimension:</Card.Text>
                                                <Card.Text>{location.dimension}</Card.Text>
                                            </div>
                                            <div className="col py-2">
                                                <Card.Text className="subtitled">Resident Count:</Card.Text>
                                                <Card.Text>{location.residents.length}</Card.Text>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            )
                        })}
                    </CardColumns>
                </Container>         
            </>    
        )
    }
}