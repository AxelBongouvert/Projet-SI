import React from 'react';
import Menu from './Menu.js';

class Accueil extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <Menu></Menu>
            </div>
            );
        }
    }
    
    export default Accueil;