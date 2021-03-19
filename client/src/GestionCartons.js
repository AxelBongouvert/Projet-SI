import React from 'react';
import Retour from './Retour.js';
import Footer from './Footer.js';
import Session from './Session.js';

class GestionCartons extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            salle: [],
        }
    }

    handleSalleClicked(id) {
        const { history } = this.props;
        Session.setIdSalle(id);
        history.push('MaSalle');
    }

    componentDidMount() {
        var url = 'http://localhost:5000/salle/2';//+ Session.getIdLogementDepart()
        fetch(url)
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                this.setState({
                    salle: result
                });
            })
            .catch((error) => {
                console.error(error);
            })
    }

    render() {
        return (
            <div>
                <Retour name="Gestion des cartons"></Retour>
                <div class="card shadow mb-2">
                    <div class="card-header py-2">
                        <h6 class="m-1 font-weight-bold text-primary">Mes cartons</h6>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-0 mb-2">
                                <a href="/CreationCarton">
                                    <div class="card bg-danger text-white shadow">
                                        <div class="card-body">
                                            <i class="fas fa-box-open fa-fw"></i><i class="fas fa-plus fa-fw"></i>
                                            <div class="text-white-50 small">Ajouter un carton</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="row">
                            {this.state.salle.map(result => {
                                return (
                                    <div class="col-lg-0 mb-2" onClick={e => this.handleSalleClicked(result.id)}>
                                        <div class="card bg-danger text-white shadow">
                                            <div class="card-body">
                                                <i class="fas fa-box fa-fw"></i>
                                                <div class="text-white-50 small">{result.nom}</div>
                                            </div>
                                        </div>
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