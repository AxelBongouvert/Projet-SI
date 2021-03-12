import React from 'react';
import Retour from './Retour.js';
import Footer from './Footer.js';

class Contrats extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
				<Retour name="Gestion des contrats"></Retour>
					<div class="col-xl-12 col-md-12 mb-4">
						<a href="/Page404">
							<div class="card border-left-danger shadow h-100 py-2">
								<div class="card-body">
									<div class="row no-gutters align-items-center">
										<div class="col mr-2">
											<div class="h5 mb-0 font-weight-bold text-gray-800">Transférer ou souscrire à un abonnement internet</div>
										</div>
										<div class="col-auto">
											<i class="fas fa-wifi fa-2x text-gray-300"></i>
										</div>
									</div>
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
											<div class="h5 mb-0 font-weight-bold text-gray-800">Transférer ou souscrire à une assurance habitation</div>
										</div>
										<div class="col-auto">
											<i class="fas fa-home fa-2x text-gray-300"></i>
										</div>
									</div>
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
											<div class="h5 mb-0 font-weight-bold text-gray-800">Résilier et / ou ouvrir ses contrats d'énergie</div>
										</div>
										<div class="col-auto">
											<i class="fas fa-battery-three-quarters fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</a>
					</div>
				<Footer></Footer>
			</div>
		);
	}
	
}
	
export default Contrats;