import React from 'react';

class Loader extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <header class="text-white text-center align-items-center row h-100">
                <div class="container">
                    <a href="/Connexion"><img class="masthead-avatar" src="/img/dana.png" alt="" /></a>
                </div>
            </header>
            );
        }
    }
    
    export default Loader;