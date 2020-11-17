import React from 'react'
import axios from 'axios'

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
               <ul>
                   {this.state.episodes.map(episode => {
                       return <li key={episode.id}>{episode.name}</li>
                   })}
               </ul>
        )
    }
}