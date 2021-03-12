import React from 'react';
import Footer from './Footer.js';
import Retour from './Retour.js';

class Page404 extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Retour name="Page introuvable"></Retour>
                <div class="container-fluid">

                    <div class="text-center">
                        <div class="error mx-auto" data-text="404">404</div>
                        <p class="lead text-gray-800 mb-5">Page introuvable</p>
                        <p class="text-gray-500 mb-0">La page cherchée a déménagé avec DANA...</p>
                    </div>

                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Page404;