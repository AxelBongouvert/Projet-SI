/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Retour from './Retour.js';
import Footer from './Footer.js';
import Session from './Session.js';

class MaSalle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cartons: [],
        }
    }
    handleCartonClicked(id) {
        const { history } = this.props;
        Session.setIdCarton(id)
        history.push('MonCarton');
    }

    componentDidMount() {
        var url = 'http://localhost:5000/cartonParSalle/' + Session.getIdSalle();
        fetch(url)
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                this.setState({
                    cartons: result
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
                        <h6 class="m-1 font-weight-bold text-primary">Ma salle</h6>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            {this.state.cartons.map(result => {
                                return (
                                    <div class="col-lg-0 mb-2" onClick={e => this.handleCartonClicked(result.id)}>
                                        <div class="card bg-danger text-white shadow">
                                            <div class="card-body">
                                                <img src="data:image/jpeg;base64,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" alt="oups on dirait que l'image de votre carton a déménagée toute seule"></img>
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
export default MaSalle;