import React from 'react';
import Footer from './Footer';
import Retour from './Retour.js';
import Session from './Session';

class Arrivee extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			infos: [],
			adresse: '',
			typeLogement: '',
			etage: '',
			description: '',
			id: ''
		};
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	componentDidMount() {
		fetch('http://localhost:5000/logementArrive/' + Session.getIdDemenagement(), {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, PATCH, OPTIONS'
			}
		}).then(function (response) {
			return response.json();
		}).then(res => {
			this.setState({ infos: res[0] })
			this.state.adresse = this.state.infos.adresse;
			this.state.typeLogement = this.state.infos.typeLogement;
			this.state.etage = this.state.infos.etage;
			this.state.description = this.state.infos.description;
			this.state.id = this.state.infos.id;
		});
	}
	
	handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit = (event) => {
		const json = {
			adresse: this.state.adresse,
			typeLogement: this.state.typeLogement,
			etage: this.state.etage,
			description: this.state.description,
			id: this.state.id
		};
       	fetch('http://localhost:5000/logement', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, PATCH, OPTIONS'
			},
			body: JSON.stringify(json)
        })
		event.preventDefault();
		window.location.reload();
	}

	render() {
		var data = this.state.infos
		return (
			<div>
				<Retour name="Logement d'arrivée"></Retour>
				<div class="container h-100">
					<div class="row justify-content-center">
						<div class="col-xl-10 col-lg-12 col-md-9">
							<div class="card o-hidden border-0 shadow-lg">
								<div class="card-body p-0">
									<div class="row">
										<div class="col-lg-12">
											<div class="p-5">
												<div class="text-center">
													<h1 class="h4 text-gray-900 mb-4">Logement d'arrivée</h1>
												</div>
												<form class="user" onSubmit={this.handleSubmit}>
													<div class="form-group">
														<input type="text" class="form-control form-control-user" id="adresse" name="adresse" placeholder="Adresse postale" defaultValue={data.adresse || ''} onChange={this.handleInputChange}></input>
													</div>
													<div class="form-group">
														<input type="text" class="form-control form-control-user" id="typeLogement" name="typeLogement" placeholder="Type de logement" defaultValue={data.typeLogement || ''} onChange={this.handleInputChange}></input>
													</div>
													<div class="form-group">
														<input type="text" class="form-control form-control-user" id="etage" name="etage" placeholder="Etage" defaultValue={data.etage || ''} onChange={this.handleInputChange}></input>
													</div>
													<div class="form-group">
														<input type="text" class="form-control form-control-user" id="description" name="description" placeholder="Description" defaultValue={data.description || ''} onChange={this.handleInputChange}></input>
													</div>
													<button class="btn btn-info btn-user btn-block" id="submit" type="submit">Modifier</button>
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

export default Arrivee;