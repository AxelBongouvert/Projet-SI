import React from 'react';
import Calculator from './Calculator';
import Counters from "./components/counters";
import NavBar from "./components/navBar";
import Counter from "./components/counter";
import axios from 'axios'

class CheckCamions extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			camions: null
		};
	}
	getCamions() {
		var url = 'http://localhost:5000/camion/6'
		fetch(url,{
			mode: 'no-cors',
			method:'GET',
			credentials: 'same-origin',
			headers: {'Content-Type': 'application/json', 
					  'Accept': '*/*',
					}
		})
		.then((response) => {			
			console.log(response);
		})
		.then((datas) => {
			console.log(datas);
		})
		.catch(error => console.log(error));

		console.log("bolos")
	}
	/*
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
	*/
	render() {
		return (
			<div>
				volume total : { localStorage.getItem("volume")}
				< br ></br >
		taille la plus longue : { localStorage.getItem("dimMax")}
				< br ></br >

				{this.getCamions()}
			</div >
		);
	}
}
export default CheckCamions;