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
                <div class="float-right p-5">
                    <p class="masthead-subheading font-weight-light mb-0">Version 1.0.0</p>
                </div>
                    <h1> salut les mecs </h1>
                    <a href="Calculator"> caluclator </a>
            </div>
            );
        }
    }
    
    export default Home;