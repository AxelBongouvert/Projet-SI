
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
			if(i == -1 ){return <div>un paquebot mgl ! </div>}	
			if(localStorage.getItem("volume") == 0){ return <div> ta voiture suffira. </div> }
			if(!Object.keys(this.state.camions[i]))	return null;

			// creer un objet a render avec les propriété du camtar
			return <div>
				<h2> Un vehicule de {this.state.camions[i].volume} m3 </h2>
				<div className="card bg-primary text-white shadow">          			
					<div className="col-md-1" style={{ fontSize: 14 }}>
						Longueur : {this.state.camions[i].profondeur}
					</div>
					<div className="col-md-1" style={{ fontSize: 14 }}>
						Hauteur :  {this.state.camions[i].hauteur}
					</div>
					<div className="col-md-1" style={{ fontSize: 14 }}>
						Largeur :  {this.state.camions[i].largeur}
					</div>
					<div className="col-md-1" style={{ fontSize: 14 }}>
						Permis mini :  {this.state.camions[i].permisMin}
					</div>					
				</div>
			</div>
		}
	}
	
	render() {
		return (
			<div>			
				
				<h2> DANA te conseille ... 	</h2>
				{(this.afficherCamion())}				
				<Footer></Footer>
			</div >
		);
	}
}
export default CheckCamions;