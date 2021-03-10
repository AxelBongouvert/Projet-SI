import React from 'react';

class Loader extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                <div class="container">
                    <a class="navbar-brand js-scroll-trigger" href="#page-top">Tableau de bord</a>
                    <button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
            </nav>
            );
        }
    }
    
    export default Loader;