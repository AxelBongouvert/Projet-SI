import React from 'react';

class Header extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                <div class="container">
                    <a class="navbar-brand js-scroll-trigger" href="#page-top">Tableau de bord</a>
                </div>
            </nav>
            );
        }
    }
    
    export default Header;