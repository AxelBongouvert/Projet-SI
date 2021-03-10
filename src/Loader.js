import React from 'react';

class Loader extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <header class="masthead text-white text-center h-100">
                <div class="container d-flex align-items-center flex-column">
                    <a href="/Choix"><img class="masthead-avatar" src="assets/img/dana.png" alt="" /></a>
                </div>
            </header>
            );
        }
    }
    
    export default Loader;