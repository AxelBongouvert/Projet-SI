import React from 'react';
import Calculator from './Calculator';
import Counters from "./components/counters";
import NavBar from "./components/navBar";
import Counter from "./components/counter";

class CheckCamions extends React.Component {

	// recup les données de la pae précédente 
	// *calculer la taille la plus grande*
	// recup tout les camion d'un volume superieur ou = 
	// *calculer le camion le plus adapter à la taille*

	json = {
		camions: [
			{
				"id": 1,
				"description": "description Camion 1",
				"largeur": 350,
				"hauteur": 185,
				"profondeur": 465,
				"permisMin": "Permis B",
				"volume": 6
			}
			,
			{
				"id": 1,
				"description": "description Camion 1",
				"largeur": 350,
				"hauteur": 185,
				"profondeur": 465,
				"permisMin": "Permis B",
				"volume": 6
			}
		]
	};

	choixCamion() {
		var vomuleMini = 9999;
		var camion = {}
		for (let index = 0; index < this.json.camions.length - 1; index++) {
			if (this.json.camions[index].volume < vomuleMini) {
				camion = this.json.camions[index];
			}
		}
		return camion
	}

	//
	render() {
		return (
			<div>
				volume total : {localStorage.getItem("volume")}
				<br></br>
			taille la plus longue : {localStorage.getItem("dimMax")}
				<br></br>

				<h2> DANA te conseille ...</h2>
			Un véhicule de : {this.choixCamion().volume} m3
				<br></br>
			Dim : {this.choixCamion().dimX} x {this.choixCamion().dimY} x {this.choixCamion().dimZ}
			</div>
		);
	}

}

export default CheckCamions;