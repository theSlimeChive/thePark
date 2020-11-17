import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

import Navbar from './components/navbar.component';
import Characters from './components/Characters/characterPage.component'
import Episodes from './components/Episodes/episodesPage.component'
import Locations from './components/Locations/locationsPage.component'

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
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Characters</Link>
                        </li>
                        <li>
                            <Link to='/episodes'>Episodes</Link>
                        </li>
                        <li>
                            <Link to='/locations'>Locations</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path="/">
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