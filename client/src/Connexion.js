import React from 'react';

class Connexion extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = { email: '', mdp: '' };
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}
	
	handleSubmit = (event) => {
		const { history } = this.props;
		history.push('/Accueil');
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
													<input type="email" class="form-control form-control-user" id="email" placeholder="Adresse email" onChange={this.handleInputChange}></input>
												</div>
												<div class="form-group">
													<input type="password" class="form-control form-control-user" id="mdp" placeholder="Mot de passe" onChange={this.handleInputChange}></input>
												</div>
												<div class="form-group">
													<div class="custom-control custom-checkbox small">
														<input type="checkbox" class="custom-control-input" id="souvenir" onChange={this.handleInputChange}></input>
														<label class="custom-control-label" for="souvenir">Se souvenir de moi</label>
													</div>
												</div>
												<button class="btn btn-primary btn-user btn-block" id="submit" type="submit">Connexion</button>
												<hr />
												<a href="Connexion" class="btn btn-google btn-user btn-block">
													<i class="fab fa-google fa-fw"></i> Se connecter avec Google
												</a>
											</form>
											<hr/>
											<div class="text-center">
												<a class="small" href="Connexion">Mot de passe oublié ?</a>
											</div>
											<div class="text-center">
												<a class="small" href="Inscription">Créer un compte</a>
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