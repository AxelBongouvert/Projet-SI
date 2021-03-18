import React from 'react';
import Footer from './Footer';
import Retour from './Retour.js';
import Session from './Session';

class Depart extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {infos: [], adresse: '', typeLogement: '', etage: '', description:'' };
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	componentDidMount() {
		
	}
	
	handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit = (event) => {
		
	}

	render() {
		var data = this.state.infos
		return (
			<div>
				<Retour name="Logement de départ"></Retour>
				<div class="container h-100">
					<div class="row justify-content-center">
						<div class="col-xl-10 col-lg-12 col-md-9">
							<div class="card o-hidden border-0 shadow-lg">
								<div class="card-body p-0">
									<div class="row">
										<div class="col-lg-12">
											<div class="p-5">
												<div class="text-center">
													<h1 class="h4 text-gray-900 mb-4">Logement de départ</h1>
												</div>
												<form class="user" onSubmit={this.handleSubmit}>
													<div class="form-group">
														<input type="text" class="form-control form-control-user" id="adresse" name="adresse" placeholder="Adresse postale" defaultValue={data.adresse || ''} onChange={this.handleInputChange}></input>
													</div>
													<div class="form-group">
														<input type="text" class="form-control form-control-user" id="type" name="type" placeholder="Type de logement" defaultValue={data.typeLogement || ''} onChange={this.handleInputChange}></input>
													</div>
													<div class="form-group">
														<input type="text" class="form-control form-control-user" id="etage" name="etage" placeholder="Etage" defaultValue={data.etage || ''} onChange={this.handleInputChange}></input>
													</div>
													<div class="form-group">
														<input type="text" class="form-control form-control-user" id="description" name="description" placeholder="Description" defaultValue={data.description || ''} onChange={this.handleInputChange}></input>
													</div>
													<button class="btn btn-info btn-user btn-block" id="submit" type="submit">Modifier</button>
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

export default Depart;