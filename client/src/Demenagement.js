import React from 'react';
import Footer from './Footer.js';
import Retour from './Retour.js';

class Demenagement extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
				<Retour name="Déménagement"></Retour>
				<div class="col-xl-12 col-lg-12 mb-4">
					<form class="d-sm-inline form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
						<div class="input-group">
							<input type="text" class="form-control bg-light border-0 small" placeholder="Rechercher" aria-label="Rechercher"></input>
							<div class="input-group-append">
								<button class="btn btn-danger" type="button">
									<i class="fas fa-search fa-sm"></i>
								</button>
							</div>
						</div>
					</form>
				</div>
				<div class="col-lg-12 mb-4">
					<a href="/Page404">
						<div class="card bg-danger text-white shadow">
							<div class="card-body">
								Tâches administratives
								<div class="text-white-50 small">On vous accompagne pour vous facilier la vie avec la paperasse</div>
							</div>
						</div>
					</a>
				</div>
				<div class="col-xl-12 col-md-12 mb-4">
						<a href="/Page404">
							<div class="card border-left-danger shadow h-100 py-2">
								<div class="card-body">
									<div class="row no-gutters align-items-center">
										<div class="col mr-2">
											<div class="h5 mb-0 font-weight-bold text-gray-800">Tâches administratives</div>
										</div>
										<div class="col-auto">
											<i class="fas fa-signature fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</a>
					</div>
				<div class="col-lg-12 mb-4">
					<a href="/Page404">
						<div class="card bg-danger text-white shadow">
							<div class="card-body">
								Gestion des contrats
								<div class="text-white-50 small">Laissez-vous guider pour transférer ou souscrire à un contrat.</div>
							</div>
						</div>
					</a>
				</div>
				<div class="col-lg-12 mb-4">
					<a href="/Page404">
						<div class="card bg-danger text-white shadow">
							<div class="card-body">
								Tri de ses affaires
								<div class="text-white-50 small">Vous ne savez plus où donner de la tête ? Trier, donner, jeter ?</div>
							</div>
						</div>
					</a>
				</div>
				<div class="col-lg-12 mb-4">
					<a href="/Demenagement">
						<div class="card bg-danger text-white shadow">
							<div class="card-body">
								Faire ses cartons
								<div class="text-white-50 small">Vous ne savez plus où donner de la tête ?</div>
							</div>
						</div>
					</a>
				</div>
				<div class="col-lg-12 mb-4">
					<a href="/Page404">
						<div class="card bg-danger text-white shadow">
							<div class="card-body">
								Transport
								<div class="text-white-50 small">Vous ne savez plus où donner de la tête ?</div>
							</div>
						</div>
					</a>
				</div>
				<Footer></Footer>
			</div>
		);
	}
	
}
	
export default Demenagement;