import React from 'react';

export default class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <div>
                    <h1>the Park.</h1>
                </div>
                <li>Characters</li>
                <li>Episodes</li>
                <li>Locations</li>
            </nav>
        )
    }
}