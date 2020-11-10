import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar.component';
import portalIcon from './public/images/pixlr-bg-result.png';
import characterIcon from './public/images/characters-icon.png';
import doggo from './public/images/dog-fial.png';

export default class Main extends React.Component {
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