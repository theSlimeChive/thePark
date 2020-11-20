import React from 'react'
import axios from 'axios'

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
               <ul>
                   {this.state.locations.map(episode => {
                       return <li key={episode.id}>{episode.name}</li>
                   })}
               </ul>
        )
    }
}