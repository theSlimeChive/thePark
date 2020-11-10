import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar.component';

const axios = require('axios');


export default class Main extends React.Component {
    constructor(props) {
        super(props)
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
            console.log(this.state.characters)
        })
        .catch(err => console.error(err))
    }

    render() {
        return (
            <div>
                <Navbar />
                <p>Rick and Morty App - the Park</p>
                
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));