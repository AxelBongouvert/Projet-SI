import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navBar";
import Retour from "./Retour";
import Footer from "./Footer";

class Calculator extends Component {

	state = {
		counters: [
			{ nom: "Canapé 2 places", volume:4, dimX:2, dimY:2, dimZ:1, id: 1, value: 0 },
			{ nom: "Télé", volume: 1 ,dimX:1, dimY:0.5,dimZ:0.5, id: 2, value: 0 },
			{ nom: "Chaise", volume: 1, dimX:1.2, dimY:0.5,dimZ:1, id: 3, value: 0 },
			{ nom: "Table basse", volume: 2 ,dimX:2, dimY:1, dimZ:0.5, id: 4, value: 0 },
			{ nom: "Table basse", volume: 2 ,dimX:2, dimY:1, dimZ:0.5, id: 4, value: 0 },
			{ nom: "Table basse", volume: 2 ,dimX:2, dimY:1, dimZ:0.5, id: 4, value: 0 },
			{ nom: "Table basse", volume: 2 ,dimX:2, dimY:1, dimZ:0.5, id: 4, value: 0 }
		]
 	};

  	handleIncrement = counter => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counters[index] };
		counters[index].value++;
		this.setState({ counters });
	};

	handleDecrement = counter => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counters[index] };
		counters[index].value--;
		this.setState({ counters });
	};

	handleRestart = () => {
		window.location.reload();
	};

	getSomme() {
		var somme = 0;
		for (let index = 0; index < this.state.counters.length; index++) {
			somme = somme + this.state.counters[index].value
		}		
		return somme;		
	};
	getVolume() {
		var somme = 0;
		for (let index = 0; index < this.state.counters.length; index++) {
			somme = somme + (this.state.counters[index].value) * this.state.counters[index].volume
		}
		localStorage.setItem('volume', somme);
		return somme;
	};

	getPlusLong(){
		var max = 0;
		for (let index = 0; index < this.state.counters.length; index++) {
			if(this.state.counters[index].dimX > max){
				max = this.state.counters[index].dimX
			}
			if(this.state.counters[index].dimY > max){
				max = this.state.counters[index].dimY
			}
			if(this.state.counters[index].dimZ > max){
				max = this.state.counters[index].dimZ
			}
		}
		localStorage.setItem('dimMax',max)
		return max;
	}

	render() {
		return (
			<div>
			<Retour name="Calculateur de volume"></Retour>
			<main className="container">
				<Counters
					counters={this.state.counters}            
					onIncrement={this.handleIncrement}
					onDecrement={this.handleDecrement}
					onRestart={this.handleRestart}            
				/>  
				</main>
				<NavBar
				totalCounters={this.getSomme()}
				totalVolume={this.getVolume()}
				/>
		</div>
		);
	}
	
}

export default Calculator;