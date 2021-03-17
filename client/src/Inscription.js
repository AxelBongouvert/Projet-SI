import React from 'react';
import Session from './Session';

class Inscription extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			nom: '',
			prenom: '',
			pseudo: '',
			email: '',
			mdp: '',
			dateFin: '',
			dateDebut: '',
			adresse1: '',
			adresse2: ''
		};
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}
	
	handleSubmit = (event) => {
		var stateAdresse1 = this.state.adresse1;
		var stateAdresse2 = this.state.adresse2;
		var stateDateDebut = this.state.dateDebut;
		var stateDateFin = this.state.dateFin;
		const json1 = [{
			nom: this.state.nom,
			prenom: this.state.prenom,
			type: 'client',
			email: this.state.email,
			pseudo: this.state.pseudo,
			mdp: this.state.mdp
		}];
		fetch('http://localhost:5000/client', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, PATCH, OPTIONS'
			},
			body: JSON.stringify(json1)
		}).then(function (res1) {
			return res1.json();
		}).then(res2 => {
			const json2 = [{
				adresse: stateAdresse1,
				typeLogement: 0,
				etage: 0,
				description: 'Logement actuel'
			},{
				adresse: stateAdresse2,
				typeLogement: 0,
				etage: 0,
				description: 'Nouveau logement'
			}];
			fetch('http://localhost:5000/logement', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, PATCH, OPTIONS'
			},
			body: JSON.stringify(json2)
		}).then(function (res3) {
			return res3.json();
		}).then(function (res4) {
			const json3 = [{
			dateDebut: stateDateDebut,
			dateFin: stateDateFin,
			mdpSuivi: 1234,
			description: "Mon déménagement",
			fk_id_logementDepart: res4.id[0],
			fk_id_logementArrive: res4.id[1],
			fk_id_client: res2.id[0]
		}];
		fetch('http://localhost:5000/demenagement', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, PATCH, OPTIONS'
			},
			body: JSON.stringify(json3)
		})
		})
		});
		const { history } = this.props;
		history.push('/Connexion');
		event.preventDefault();
	}
	
	render() {
		return (
			<div class="container h-100">
				<div class="row justify-content-center">
					<div class="col-xl-10 col-lg-12 col-md-9">
						<div class="card o-hidden border-0 shadow-lg my-5">
							<div class="card-body p-0">
								<div class="row">
									<div class="col-lg-12">
										<div class="p-5">
											<form class="user" onSubmit={this.handleSubmit}>
												<div class="text-center">
													<h1 class="h5 text-gray-900 mb-4">Informations du compte</h1>
												</div>
												<div class="form-group">
													<input type="text" class="form-control form-control-user" id="nom" name="nom" placeholder="Nom" onChange={this.handleInputChange}></input>
												</div>
												<div class="form-group">
													<input type="text" class="form-control form-control-user" id="prenom" name="prenom" placeholder="Prénom" onChange={this.handleInputChange}></input>
												</div>
												<div class="form-group">
													<input type="email" class="form-control form-control-user" id="email" name="email" placeholder="Adresse email" onChange={this.handleInputChange}></input>
												</div>
												<div class="form-group">
													<input type="text" class="form-control form-control-user" id="pseudo" name="pseudo" placeholder="Nom de compte" onChange={this.handleInputChange}></input>
												</div>
												<div class="form-group">
													<input type="password" class="form-control form-control-user" id="mdp" name="mdp" placeholder="Mot de passe" onChange={this.handleInputChange}></input>
												</div>
												<hr />
												<div class="text-center">
													<h1 class="h5 text-gray-900 mb-4">Déménagement</h1>
												</div>
												<p class="text-center">Date de début</p>
												<div class="form-group">
													<input type="date" class="form-control form-control-user" id="dateDebut" name="dateDebut" placeholder="Date de début" onChange={this.handleInputChange}></input>
												</div>
												<p class="text-center">Date de fin</p>
												<div class="form-group">
													<input type="date" class="form-control form-control-user" id="dateFin" name="dateFin" placeholder="Date de fin" onChange={this.handleInputChange}></input>
												</div>
												<div class="form-group">
													<input type="text" class="form-control form-control-user" id="adresse1" name="adresse1" placeholder="Adresse logemenent actuel" onChange={this.handleInputChange}></input>
												</div>
												<div class="form-group">
													<input type="text" class="form-control form-control-user" id="adresse2" name="adresse2" placeholder="Adresse nouveau logement" onChange={this.handleInputChange}></input>
												</div>
												<hr />
												<button class="btn btn-info btn-user btn-block" id="submit" type="submit">Inscription</button>
												<hr/>
											</form>
											<div class="text-center">
												<a class="small text-info" href="Connexion">Déjà un compte ?</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
	
}
	
export default Inscription;