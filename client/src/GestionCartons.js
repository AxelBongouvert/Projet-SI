import React from 'react';
import Retour from './Retour.js';
import Footer from './Footer.js';

class GestionCartons extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            salle: [],
        }
    }

    
        json = {
            salle: [
                {
                    "id": 1,
                    "nom": "cuisine",
                    "couleur": "rouge",
                    "superficie": 13,
                    "fk_id_logement": 1,
                }
                ,
                {
                    "id": 2,
                    "nom": "salon",
                    "couleur": "bleu",
                    "superficie": 24,
                    "fk_id_logement": 1,
                }
            ]
        };

    render() {
        return (
            <div>
                <Retour name="Gestion cartons"></Retour>
                    <div class="card shadow mb-2">
                        <div class="card-header py-2">
                            <h6 class="m-1 font-weight-bold text-primary">Mes cartons</h6>
                        </div>
                        <div class="card-body">
                        <div class="row">
                            <div class="col-lg-1 mb-2">
                                <a href="/CreationCarton">
                                    <div class="card bg-primary text-white shadow">
                                        <div class="card-body">
                                            <i class="fas fa-box-open fa-fw"></i><i class="fas fa-plus fa-fw"></i>
                                            <div class="text-white-50 small">Ajouter un carton</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            {this.json.salle.map(result => {
                                return (
                                    <div class="col-lg-0 mb-2">
                                        <a href="/">
                                            <div class="card bg-primary text-white shadow">
                                                <div class="card-body">
                                                    <i class="fas fa-box fa-fw"></i>
                                                    <div class="text-white-50 small">{result.nom}</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                )
                            })}
                        </div>
                        </div>
                    </div>

                <Footer></Footer>
            </div>
        );
    }
}

export default GestionCartons;