import React from 'react'
import axios from 'axios'

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
               <ul>
                   {this.state.characters.map(character => {
                       return <li key={character.id}>{character.name}</li>
                   })}
               </ul>
        )
    }
}