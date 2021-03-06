import React from 'react';
import Session from './Session';

class Connexion extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = { pseudo: '', mdp: '' };
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}
	
	handleSubmit = (event) => {
		const { history } = this.props;
		const json = JSON.stringify({ pseudo: this.state.pseudo, mdp: this.state.mdp })
		fetch('http://localhost:5000/connexion', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, PATCH, OPTIONS'
			},
			body: json
		}).then(function (result) {
			return result.json();
		}).then(function (result) {
			if (result.connexion === true) {
				fetch('http://localhost:5000/demenagement/' + result.id, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						'Access-Control-Allow-Origin': '*',
						'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, PATCH, OPTIONS'
					}
				}).then(function (result) {
					return result.json();
				}).then(function (result) {
					Session.setIdDemenagement(result[0].id);
					Session.setIdLogementDepart(result[0].fk_id_logementDepart);
					Session.setIdLogementArrivee(result[0].fk_id_logementArrive);
				})
				Session.setConnecte(true);
				Session.setId(result.id);
				Session.setPseudo(json.pseudo);
				history.push('accueil');
			} else {
				alert('Identifians incorrects !')
			}
		})
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
											<div class="text-center">
												<h1 class="h4 text-gray-900 mb-4">Espace de connexion</h1>
											</div>
											<form class="user" onSubmit={this.handleSubmit}>
												<div class="form-group">
													<input type="text" class="form-control form-control-user" id="pseudo" name="pseudo" placeholder="Pseudo" onChange={this.handleInputChange}></input>
												</div>
												<div class="form-group">
													<input type="password" class="form-control form-control-user" id="mdp" name="mdp" placeholder="Mot de passe" onChange={this.handleInputChange}></input>
												</div>
												<div class="form-group">
													<div class="custom-control custom-checkbox small">
														<input type="checkbox" class="custom-control-input" id="souvenir" onChange={this.handleInputChange}></input>
														<label class="custom-control-label" for="souvenir">Se souvenir de moi</label>
													</div>
												</div>
												<hr/>
												<button class="btn btn-info btn-user btn-block" id="submit" type="submit">Connexion</button>
												<hr />
												<a href="Connexion" class="btn btn-danger btn-user btn-block">
													<i class="fab fa-google fa-fw"></i> Se connecter avec Google
												</a>
											</form>
											<hr/>
											<div class="text-center">
												<a class="small text-info" href="Connexion">Mot de passe oubli?? ?</a>
											</div>
											<div class="text-center">
												<a class="small text-info" href="Inscription">Cr??er un compte</a>
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
	
export default Connexion;