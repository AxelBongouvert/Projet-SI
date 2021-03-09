import React from 'react';

class Home extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <div>
                    <a href="/Accueil">
                        <header class="masthead text-white text-center">
                            <div class="container d-flex align-items-center flex-column">
                                <img class="masthead-avatar mb-5" src="assets/img/dana.png" alt="" />
                            </div>
                        </header>
                    </a>
                </div>
            </div>
            );
        }
    }
    
    export default Home;