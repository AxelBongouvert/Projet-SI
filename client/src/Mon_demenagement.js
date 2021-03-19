import React from 'react';
import Footer from './Footer';
import Retour from './Retour.js';
import Session from './Session';

class Mon_demenagement extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			infos: [],
			dateDebut: '',
			dateFin: '',
			mdpSuivi: '',
			description: '',
			fk_id_logementDepart: '',
			fk_id_logementArrive: '',
			id: ''
		};
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	componentDidMount() {
		fetch('http://localhost:5000/demenagement/' + Session.getId(), {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, PATCH, OPTIONS'
			}
		}).then(function (response) {
			return response.json();
		}).then(res => {
			this.setState({ infos: res[0] })
			this.state.dateDebut = this.state.infos.dateDebut;
			this.state.dateFin = this.state.infos.dateFin;
			this.state.mdpSuivi = this.state.infos.mdpSuivi;
			this.state.description = this.state.infos.description;
			this.state.fk_id_logementDepart = this.state.infos.fk_id_logementDepart;
			this.state.fk_id_logementArrive = this.state.infos.fk_id_logementArrive;
			this.state.id = this.state.infos.id;
		});
	}
	
	handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit = (event) => {
		const json = {
			dateDebut: this.state.dateDebut,
			dateFin: this.state.dateFin,
			mdpSuivi: this.state.mdpSuivi,
			description: this.state.description,
			fk_id_logementDepart: this.state.fk_id_logementDepart,
			fk_id_logementArrive: this.state.fk_id_logementArrive,
			id: this.state.id
		};
       	fetch('http://localhost:5000/demenagement', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, PATCH, OPTIONS'
			},
			body: JSON.stringify(json)
        })
		event.preventDefault();
		window.location.reload();
	}

	render() {
		var data = this.state.infos
		return (
			<div>
				<Retour name="Mon déménagement"></Retour>
				<div class="container h-100">
					<div class="row justify-content-center">
						<div class="col-xl-10 col-lg-12 col-md-9">
							<div class="card o-hidden border-0 shadow-lg">
								<div class="card-body p-0">
									<div class="row">
										<div class="col-lg-12">
											<div class="p-5">
												<div class="text-center">
													<h1 class="h4 text-gray-900 mb-4">Mon déménagement</h1>
												</div>
												<form class="user" onSubmit={this.handleSubmit}>
													<div class="form-group">
														<input type="date" class="form-control form-control-user" id="dateDebut" name="dateDebut" placeholder="Date de début" defaultValue={data.dateDebut || ''} onChange={this.handleInputChange}></input>
													</div>
													<div class="form-group">
														<input type="date" class="form-control form-control-user" id="dateFin" name="dateFin" placeholder="Date de fin" defaultValue={data.dateFin || ''} onChange={this.handleInputChange}></input>
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

export default Mon_demenagement;