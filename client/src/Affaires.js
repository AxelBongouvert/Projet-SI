import React from 'react';
import Retour from './Retour.js';
import Footer from './Footer.js';

class Affaires extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
				<Retour name="Tri de ses affaires"></Retour>
					<div class="col-xl-12 col-md-12 mb-4">
						<a href="Affaires">
							<div class="card border-left-danger shadow h-100 py-2">
								<div class="card-body">
									<div class="row no-gutters align-items-center">
										<div class="col mr-2">
											<div class="h5 mb-0 font-weight-bold text-gray-800">Trier grâce à notre outil d'aide à la décision</div>
										</div>
										<div class="col-auto">
											<i class="fas fa-boxes fa-2x text-info"></i>
										</div>
									</div>
								</div>
							</div>
						</a>
					</div>
					<div class="col-xl-12 col-md-12 mb-4">
						<a href="Affaires">
							<div class="card border-left-danger shadow h-100 py-2">
								<div class="card-body">
									<div class="row no-gutters align-items-center">
										<div class="col mr-2">
											<div class="h5 mb-0 font-weight-bold text-gray-800">Donner ses affaires</div>
										</div>
										<div class="col-auto">
											<i class="fas fa-box fa-2x text-info"></i>
										</div>
									</div>
								</div>
							</div>
						</a>
					</div>
					<div class="col-xl-12 col-md-12 mb-4">
						<a href="Affaires">
							<div class="card border-left-danger shadow h-100 py-2">
								<div class="card-body">
									<div class="row no-gutters align-items-center">
										<div class="col mr-2">
											<div class="h5 mb-0 font-weight-bold text-gray-800">Vendre ses affaires</div>
										</div>
										<div class="col-auto">
											<i class="fas fa-box-open fa-2x text-info"></i>
										</div>
									</div>
								</div>
							</div>
						</a>
					</div>
					<div class="col-xl-12 col-md-12 mb-4">	
						<a href="/Affaires">
							<div class="card border-left-danger shadow h-100 py-2">
								<div class="card-body">
									<div class="row no-gutters align-items-center">
										<div class="col mr-2">
											<div class="h5 mb-0 font-weight-bold text-gray-800">Jeter ses affaires</div>
										</div>
										<div class="col-auto">
											<i class="fas fa-box-tissue fa-2x text-info"></i>
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
	
export default Affaires;