import React from 'react';
import Footer from './Footer';
import Retour from './Retour.js';
import Session from './Session';

class Profil extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {infos: [], nom: '', prenom: '', email: '', mdp:'' };
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	componentDidMount() {
		const json = { pseudo: Session.getPseudo() };
		fetch('http://localhost:5000/client/' + Session.getId(), {
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
		});
	}
	
	handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit = (event) => {
		const json = { nom: this.state.nom, prenom: this.state.prenom, type: this.state.infos.type, email: this.state.email, mdp: this.state.mdp, id: this.state.infos.id};
       	fetch('http://localhost:5000/client', {
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
				<Retour name="Profil"></Retour>
				<div class="container h-100">
					<div class="row justify-content-center">
						<div class="col-xl-10 col-lg-12 col-md-9">
							<div class="card o-hidden border-0 shadow-lg">
								<div class="card-body p-0">
									<div class="row">
										<div class="col-lg-12">
											<div class="p-5">
												<div class="text-center">
													<h1 class="h4 text-gray-900 mb-4">{data.pseudo || ''}</h1>
												</div>
												<form class="user" onSubmit={this.handleSubmit}>
													<div class="form-group">
														<input type="text" class="form-control form-control-user" id="nom" name="nom" placeholder="Nom" defaultValue={data.nom || ''} onChange={this.handleInputChange}></input>
													</div>
													<div class="form-group">
														<input type="text" class="form-control form-control-user" id="prenom" name="prenom" placeholder="Prénom" defaultValue={data.prenom || ''} onChange={this.handleInputChange}></input>
													</div>
													<div class="form-group">
														<input type="email" class="form-control form-control-user" id="email" name="email" placeholder="Adresse email" defaultValue={data.email || ''} onChange={this.handleInputChange}></input>
													</div>
													<div class="form-group">
														<input type="password" class="form-control form-control-user" id="mdp" name="mdp" placeholder="Mot de passe" onChange={this.handleInputChange}></input>
													</div>
													<button class="btn btn-info btn-user btn-block" id="submit" type="submit">Confirmer</button>
												</form>
												<br />
												<div class="text-center">
													<a href="/Deconnexion" class="text-info">Se déconnecter</a>
												</div>
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

export default Profil;