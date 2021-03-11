import React from 'react';
import Retour from './Retour.js';
import Footer from './Footer.js';

class Transport extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
				<Retour name="Transport"></Retour>
					<div class="col-xl-12 col-md-12 mb-4">
						<a href="Transport">
							<div class="card border-left-danger shadow h-100 py-2">
								<div class="card-body">
									<div class="row no-gutters align-items-center">
										<div class="col mr-2">
											<div class="h5 mb-0 font-weight-bold text-gray-800">Comparer les loueurs de transports</div>
										</div>
										<div class="col-auto">
											<i class="fas fa-truck fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</a>
					</div>
					<div class="col-xl-12 col-md-12 mb-4">
						<a href="Transport">
							<div class="card border-left-danger shadow h-100 py-2">
								<div class="card-body">
									<div class="row no-gutters align-items-center">
										<div class="col mr-2">
											<div class="h5 mb-0 font-weight-bold text-gray-800">Faire du co-transportage</div>
										</div>
										<div class="col-auto">
											<i class="fas fa-user-friends fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</a>
					</div>
					<div class="col-xl-12 col-md-12 mb-4">
						<a href="Transport">
							<div class="card border-left-danger shadow h-100 py-2">
								<div class="card-body">
									<div class="row no-gutters align-items-center">
										<div class="col mr-2">
											<div class="h5 mb-0 font-weight-bold text-gray-800">Estimer le volume grâce à notre calculateur</div>
										</div>
										<div class="col-auto">
											<i class="fas fa-box fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</a>
					</div>
					<div class="col-xl-12 col-md-12 mb-4">	
						<a href="Transport">
							<div class="card border-left-danger shadow h-100 py-2">
								<div class="card-body">
									<div class="row no-gutters align-items-center">
										<div class="col mr-2">
											<div class="h5 mb-0 font-weight-bold text-gray-800">Estimer le nombre d'aller-retour</div>
										</div>
										<div class="col-auto">
											<i class="fas fa-arrow-right fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</a>
					</div>
					<div class="col-xl-12 col-md-12 mb-4">	
						<a href="Transport">
							<div class="card border-left-danger shadow h-100 py-2">
								<div class="card-body">
									<div class="row no-gutters align-items-center">
										<div class="col mr-2">
											<div class="h5 mb-0 font-weight-bold text-gray-800">Comparateur de loueurs de véhicule</div>
										</div>
										<div class="col-auto">
											<i class="fas fa-car fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</a>
					</div>
					<div class="col-xl-12 col-md-12 mb-4">
						<a href="Transport">
							<div class="card border-left-danger shadow h-100 py-2">
								<div class="card-body">
									<div class="row no-gutters align-items-center">
										<div class="col mr-2">
											<div class="h5 mb-0 font-weight-bold text-gray-800">Comparateur des déménageurs professionnel</div>
										</div>
										<div class="col-auto">
											<i class="fas fa-money-bill fa-2x text-gray-300"></i>
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
	
export default Transport;