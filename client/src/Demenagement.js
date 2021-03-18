import React from 'react';
import Retour from './Retour.js';
import Footer from './Footer.js';

class Demenagement extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
                <Retour name="Tâches administratives"></Retour>
                <div class="col-xl-12 col-md-12 mb-4">
						<a href="/Mon_demenagement">
							<div class="card border-left-danger shadow h-100 py-2">
								<div class="card-body">
									<div class="row no-gutters align-items-center">
										<div class="col mr-2">
											<div class="h5 mb-0 font-weight-bold text-gray-800">Mon déménagement</div>
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
						<a href="/Depart">
							<div class="card border-left-danger shadow h-100 py-2">
								<div class="card-body">
									<div class="row no-gutters align-items-center">
										<div class="col mr-2">
											<div class="h5 mb-0 font-weight-bold text-gray-800">Logement de départ</div>
										</div>
										<div class="col-auto">
											<i class="fas fa-house-user fa-2x text-info"></i>
										</div>
									</div>
								</div>
							</div>
						</a>
					</div>
					<div class="col-xl-12 col-md-12 mb-4">
						<a href="/Arrivee">
							<div class="card border-left-danger shadow h-100 py-2">
								<div class="card-body">
									<div class="row no-gutters align-items-center">
										<div class="col mr-2">
											<div class="h5 mb-0 font-weight-bold text-gray-800">Logement d'arrivée</div>
										</div>
										<div class="col-auto">
											<i class="fas fa-home fa-2x text-info"></i>
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
	
export default Demenagement;