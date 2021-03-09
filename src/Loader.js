import React from 'react';

class Loader extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <a href="/Accueil">
                <header class="masthead text-white text-center">
                    <div class="container d-flex align-items-center flex-column">
                        <img class="masthead-avatar mb-5" src="assets/img/dana.png" alt="" />
                    </div>
                </header>
            </a>
            );
        }
    }
    
    export default Loader;