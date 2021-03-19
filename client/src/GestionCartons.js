import React from 'react';
import Retour from './Retour.js';
import Footer from './Footer.js';
import Session from './Session.js';

class GestionCartons extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			salle: [],
		}
	}

	handleSalleClicked(id,nom) {
		const { history } = this.props;
		Session.setIdSalle(id);
		Session.setSalleActuelle(nom);
		history.push('MaSalle');
	}

	componentDidMount() {
		var url = 'http://localhost:5000/salle/'+ Session.getIdLogementDepart()
		fetch(url)
			.then((res) => res.json())
			.then((result) => {
				console.log(result);
				this.setState({
					salle: result
				});
			})
			.catch((error) => {
				console.error(error);
			})
	}

	render() {
		return (
			<div>
				<Retour name="Gestion des salles"></Retour>
				<div class="col-xl-12 col-md-12 mb-4">
					<div class="col-lg-0 mb-2">
						<a href="/CreationSalle">
							<div class="card bg-info text-white shadow">
								<div class="card-body">
									<i class="fas fa-home fa-fw"></i><i class="fas fa-plus fa-fw"></i>
									<div class="text-white-100 small">Ajouter une salle</div>
								</div>
							</div>
						</a>
					</div>
				</div>
				<div class="card shadow mb-2">
					<div class="card-body">
						<div class="row">
							{this.state.salle.map(result => {
								return (
									<div class="col-lg-0 mb-2" onClick={e => this.handleSalleClicked(result.id, result.nom)}>
										<div class="card bg-danger text-white shadow">
											<div class="card-body">
												<i class="fas fa-box fa-fw"></i>
												<div class="text-white-100 small">{result.nom}</div>
											</div>
										</div>
									</div>
								)
							})}
						</div>
					</div>
				</div>
				<Footer></Footer>
			</div>
		);
	}
}

export default GestionCartons;