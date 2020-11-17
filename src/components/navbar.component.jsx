import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'

export default class Navbar extends React.Component {
    render() {
        return (
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Characters</Link>
                        </li>
                        <li>
                            <Link to='/locations'>Locations</Link>
                        </li>
                        <li>
                            <Link to='episodes'>Episodes</Link>
                        </li>
                    </ul>
                </nav>

        )
    }
}