import React from 'react';
import Session from './Session.js';
import Footer from './Footer.js';
import Retour from './Retour.js';

class CreationSalle extends React.Component {
    constructor(props) {
		super(props);
        this.state = {
            nom: '',
            couleur: '',
            superficie: '',
            fk_id_logement: Session.getIdLogementDepart()
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
    }
    
    handleSubmit = (event) => {
        const json = [{
			nom: this.state.nom,
			couleur: this.state.couleur,
			superficie: this.state.superficie,
			fk_id_logement: this.state.fk_id_logement
        }];
        fetch('http://localhost:5000/salle', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, PATCH, OPTIONS'
            },
            body: JSON.stringify(json)
        });
        const { history } = this.props;
		history.push('/GestionCartons');
		event.preventDefault();
    };

    render() {
        return (
            <div>
                <Retour name="Création d'une salle"></Retour>
                    <div class="container h-100">
                        <div class="row justify-content-center">
                            <div class="col-xl-10 col-lg-12 col-md-9">
                                <div class="card o-hidden border-0 shadow-lg">
                                    <div class="card-body p-0">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="p-5">
                                                    <div class="text-center">
                                                        <h1 class="h4 text-gray-900 mb-4">Création d'une salle</h1>
                                                    </div>
                                                    <form class="user" onSubmit={this.handleSubmit}>
                                                        <div class="form-group">
                                                            <input type="text" class="form-control form-control-user" id="nom" name="nom" placeholder="Nom" onChange={this.handleInputChange}></input>
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="text" class="form-control form-control-user" id="couleur" name="couleur" placeholder="Couleur" onChange={this.handleInputChange}></input>
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="text" class="form-control form-control-user" id="superficie" name="superficie" placeholder="Superficie"  onChange={this.handleInputChange}></input>
                                                        </div>
                                                        <button class="btn btn-info btn-user btn-block" id="submit" type="submit">Confirmer</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default CreationSalle;