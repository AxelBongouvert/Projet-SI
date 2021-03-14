import React from 'react';
import Footer from './Footer';
import Retour from './Retour.js';

class Profil extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
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
													<h1 class="h4 text-gray-900 mb-4">[Nom utilisateur]</h1>
												</div>
												<div class="text-center">
													<a href="/Deconnexion" class="text-info">Se déconnecter</a>
												</div>
												<br/>
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
														<input type="passsword" class="form-control form-control-user" id="mdp" placeholder="Mot de passe" onChange={this.handleInputChange}></input>
													</div>
													<button class="btn btn-danger btn-user btn-block" id="submit" type="submit">Confirmer</button>
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

export default Profil;