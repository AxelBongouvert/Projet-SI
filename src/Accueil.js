import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

class Accueil extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <Header></Header>
                <div class="row">
                    <div class="col-xl-4 col-lg-5">
                        <div class="card shadow mb-4">
                            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 class="m-0 font-weight-bold text-primary">Mes déménagements</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 mb-4">
                    <a href="/Demenagement">
                        <div class="card bg-primary text-white shadow">
                            <div class="card-body">
                                Mon déménagement
                                <div class="text-white-50 small">18 Mai 2021 - 21 Mai 2021</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="row">
                    <div class="col-xl-4 col-lg-5">
                        <div class="card shadow mb-4">
                            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 class="m-0 font-weight-bold text-danger">Leurs déménagements</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 mb-4">
                     <a href="/Accueil">
                        <div class="card bg-danger text-white shadow">
                            <div class="card-body">
                                Déménagement Jean-philippe
                                <div class="text-white-50 small">27 Mai 1987 - 2 Décembre 2022</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-6 mb-4">
                     <a href="/Accueil">
                        <div class="card bg-danger text-white shadow">
                            <div class="card-body">
                                Déménagement Nadia
                                <div class="text-white-50 small">12 Mars 2021 - 1 Juin 2021</div>
                            </div>
                        </div>
                    </a>
                </div>
                <Footer></Footer>
            </div>
            );
        }
    }
    
    export default Accueil;