
import React from 'react';
import Calculator from './Calculator';
import Counters from "./components/counters";
import NavBar from "./components/navBar";
import Counter from "./components/counter";
import axios from 'axios'
import Footer from "./Footer";

class CheckCamions extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			camions: [],
			traitementFini : false
		};
	}
	componentDidMount() {	
		const { history } = this.props;	
		var url = 'http://localhost:5000/camion/'+ localStorage.getItem("volume")
		fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, PATCH, OPTIONS'
			}
		})
		.then(reponse => reponse.json())	
		.then(data =>  {
			console.log(data)
			this.state.camions = data;							
		})
		.then(() => {
			console.log(this.state.camions)
			this.choixCamion()
		})
		.then(() => {
			this.setState({traitementFini : true});
		})	
	}
	
	choixCamion() {			
		var vomuleMini = 9999;
		var camion = {};
		let idCamion = -1

		for (let i = 0; i < this.state.camions.length ; i++) {			
			if (this.state.camions[i].volume < vomuleMini) {
				camion = this.state.camions[i];
				idCamion = i;
			}
		}	
		console.log(idCamion)	
		localStorage.setItem("idCamion", idCamion)			
	}

	afficherCamion(){
		if(this.state.traitementFini == true){
			let i = localStorage.getItem("idCamion")			
			if(localStorage.getItem("volume") == 0){
				 return <div> ta voiture suffira. </div> 
			}
			if (i == -1) {
				return (
					<div class="col-xl-12 col-md-12 m-2 text-center">
						<h3>Un paquebot mgl !</h3>
					</div>
				);
			}
			if(!Object.keys(this.state.camions[i]))	return null;

			// creer un objet a render avec les propriété du camtar
			return (
				<div>
					<div class="col-xl-12 col-md-12 mb-3 text-center">
						<h3> Un vehicule de {this.state.camions[i].volume} m3 </h3>
					</div>
					<ul class="navbar-nav w-75 d-flex justify-content-around ml-5">
						<li class="nav-item no-arrow">
							<li class="nav-item no-arrow">
								Longueur :
								<span class="badge badge-pill badge-info m-2" style={{ width: 75 }}>
									{this.state.camions[i].profondeur}
								</span>
							</li>
						</li>
						<li class="nav-item no-arrow">
							<li class="nav-item no-arrow">
								Hauteur :
								<span class="badge badge-pill badge-info m-2" style={{ width: 75 }}>
									{this.state.camions[i].hauteur}
								</span>
							</li>
						</li>
						<li class="nav-item no-arrow">
							<li class="nav-item no-arrow">
								Largeur :
								<span class="badge badge-pill badge-info m-2" style={{ width: 75 }}>
									{this.state.camions[i].largeur}
								</span>
							</li>
						</li>
						<li class="nav-item no-arrow">
							<li class="nav-item no-arrow">
								Permis mini :
								<span class="badge badge-pill badge-info m-2" style={{ width: 75 }}>
									{this.state.camions[i].permisMin}
								</span>
							</li>
						</li>
					</ul>
				</div>
			);
		}
	}
	
	render() {
		return (
			<div>			
				<Retour name="Conseil camion"></Retour>
				<div class="col-xl-12 col-md-12 mb-4 text-center">
					<h4> DANA te conseille ... </h4>
				</div>
				<div class="col-xl-12 col-md-12 mb-4">
					<div class="card border-left-danger shadow h-100 py-2">
						{(this.afficherCamion())}
					</div>
				</div>
				<Footer></Footer>
			</div>
		);
	}
}
export default CheckCamions;