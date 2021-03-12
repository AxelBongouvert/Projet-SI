import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

class CreationCarton extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header></Header>
                <div class="card shadow mb-2">
                    <div class="card-header py-2">
                        <h6 class="m-1 font-weight-bold text-primary">Ajouter un carton</h6>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-1 mb-2">
                                <a href="/CreationCarton">
                                    <div class="card bg-secondary text-white shadow">
                                        <div class="card-body">
                                            <i class="fas fa- fa-fw"></i><i class="fas fa-plus fa-fw"></i>
                                            <div class="text-white-50 small">Ajouter une photo</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-0 mb-2">
                                <a href="/">
                                    <div class="card bg-primary text-white shadow">
                                        <div class="card-body">
                                            <i class="fas fa-box fa-fw"></i>
                                            <div class="text-white-50 small">salle 1</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-0 mb-2">
                                <a href="Connexion">
                                    <div class="card bg-primary text-white shadow">
                                        <div class="card-body">
                                            <i class="fas fa-box fa-fw"></i>
                                            <div class="text-white-50 small">salle 2</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer></Footer>
            </div>
        );
    }
}

export default CreationCarton;