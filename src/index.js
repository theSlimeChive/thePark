import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar.component';

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <p>This is the App area</p>
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));