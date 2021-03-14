import React from 'react';

class Inscription extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = { nom: '', prenom: '', email: '', adresse: '', mdp: '' };
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}
	
	handleSubmit = (event) => {
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
											<div class="text-center">
												<h1 class="h4 text-gray-900 mb-4">Espace d'inscription</h1>
											</div>
											<form class="user" onSubmit={this.handleSubmit}>
												<div class="form-group">
													<input type="text" class="form-control form-control-user" id="nom" placeholder="Nom" onChange={this.handleInputChange}></input>
												</div>
												<div class="form-group">
													<input type="text" class="form-control form-control-user" id="prenom" placeholder="Prénom" onChange={this.handleInputChange}></input>
												</div>
												<div class="form-group">
													<input type="text" class="form-control form-control-user" id="pseudo" placeholder="Nom de compte" onChange={this.handleInputChange}></input>
												</div>
												<div class="form-group">
													<input type="email" class="form-control form-control-user" id="email" placeholder="Adresse email" onChange={this.handleInputChange}></input>
												</div>
												<div class="form-group">
													<input type="password" class="form-control form-control-user" id="mdp" placeholder="Mot de passe" onChange={this.handleInputChange}></input>
												</div>
												<button class="btn btn-primary btn-user btn-block" id="submit" type="submit">Inscription</button>
											</form>
											<hr/>
											<div class="text-center">
												<a class="small" href="Connexion">Déjà un compte ?</a>
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