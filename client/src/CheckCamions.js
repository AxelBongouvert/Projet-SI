import React from 'react';
import Calculator from './Calculator';
import Counters from "./components/counters";
import NavBar from "./components/navBar";
import Counter from "./components/counter";
import axios from 'axios'

class CheckCamions extends React.Component {

	constructor(props) {
		super(props)
		this.componentDidMount = this.componentDidMount.bind(this)

		this.state = {
			camions: [
				{
					"id": 1,
					"description": "description Camion 1",
					"largeur": 3.50,
					"hauteur": 1.85,
					"profondeur": 4.65,
					"permisMin": "Permis B",
					"volume": 6
				}

			]
		};

	}

	componentDidMount() {
		var url = 'http://localhost:5000/camion/' + localStorage.getItem("volume")
		//axios.get(`localhost:5000/camion/${localStorage.getItem("volume")}`)
		fetch(url)
			.then((res) => res.json())
			.then((result) => {
				console.log(result);
				this.setState({
					camions: result
				});
			})
			.catch((error) => {
				console.error(error);
			})
		console.log("bolos")
	}


	choixCamion() {
		var vomuleMini = 9999;
		var camion = {}
		for (let i = 0; i < this.state.camions.length - 1; i++) {
			if (this.state.camions[i].volume < vomuleMini) {
				camion = this.state.camions[i];
			}
		}
		return camion
	}

	/*
		
	*/
	render() {
		return (
			<div>
				volume total : {localStorage.getItem("volume")}
				<br></br>
				taille la plus longue : {localStorage.getItem("dimMax")}
				<br></br>

				{this.componentDidMount()}
				{this.choixCamion()}

				<br></br>
				<br></br>
				<h2> DANA te conseille ...</h2>
					Un véhicule de : {this.state.camions[0].volume} m3
				<br></br>
					Dim : {this.state.camions[0].largeur} x {this.state.camions[0].hauteur} x {this.state.camions[0].profondeur}


			</div>
		);
	}

}

export default CheckCamions;