import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarComponent from './components/navbar.component';
import Characters from './components/Characters/characterPage.component'
import Episodes from './components/Episodes/episodesPage.component'
import Locations from './components/Locations/locationsPage.component'
import Home from './components/Home/home.component'
import { Navbar } from 'react-bootstrap';

const axios = require('axios');


export default class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    componentDidMount() {
        
    }

    

    render() {
        return (
            <Router>
                <NavbarComponent />

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/characters">
                        <Characters />
                    </Route>
                    <Route path="/episodes">
                        <Episodes />
                    </Route>
                    <Route path="/locations">
                        <Locations />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));