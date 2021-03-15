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
					<a href="Taches">
						<div class="card bg-danger text-white shadow">
							<div class="card-body d-flex flex-column justify-content-center text-center">
								<img class="img mx-auto w-25" src="img/man.png" />
								<h4 class="font-weight-bold pt-3 pb-3">Tâches<br />administratives</h4>
								<h5 class="text-white-50">On vous accompagne pour vous facilier la vie avec la paperasse.</h5>
							</div>
						</div>
					</a>
				</div>
				<div class="col-lg-12 mb-4">
					<a href="Contrats">
						<div class="card bg-danger text-white shadow">
							<div class="card-body d-flex flex-column justify-content-center text-center">
								<img class="img mx-auto w-25" src="img/woman.png" />
								<h4 class="font-weight-bold pt-3 pb-3">Gestion<br />des contrats</h4>
								<h5 class="text-white-50">Laissez-vous guider pour transférer ou souscrire à un contrat.</h5>
							</div>
						</div>
					</a>
				</div>
				<div class="col-lg-12 mb-4">
					<a href="Affaires">
						<div class="card bg-danger text-white shadow">
							<div class="card-body d-flex flex-column justify-content-center text-center">
								<img class="img mx-auto w-25" src="img/man.png" />
								<h4 class="font-weight-bold pt-3 pb-3">Tri de<br />ses affaires</h4>
								<h5 class="text-white-50">Vous ne savez plus où donner de la tête ? Trier, donner, jeter ?</h5>
							</div>
						</div>
					</a>
				</div>
				<div class="col-lg-12 mb-4">
					<a href="GestionCartons">
						<div class="card bg-danger text-white shadow">
							<div class="card-body d-flex flex-column justify-content-center text-center">
								<img class="img mx-auto w-25" src="img/woman.png" />
								<h4 class="font-weight-bold pt-3 pb-3">Faire<br />ses cartons</h4>
								<h5 class="text-white-50">Vous ne savez plus où donner de la tête ?</h5>
							</div>
						</div>
					</a>
				</div>
				<div class="col-lg-12 mb-4">
					<a href="Transport">
						<div class="card bg-danger text-white shadow">
							<div class="card-body d-flex flex-column justify-content-center text-center">
								<img class="img mx-auto w-25" src="img/man.png" />
								<h4 class="font-weight-bold pt-3 pb-3">Transport</h4>
								<h5 class="text-white-50">Vous ne savez plus où donner de la tête ?</h5>
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