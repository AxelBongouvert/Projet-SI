import React from 'react';
import Footer from './Footer.js';
import Retour from './Retour.js';

class Promos extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
				<Retour name="Promos"></Retour>
				<p>Promos</p>
				<Footer></Footer>
			</div>
		);
	}
	
}
	
export default Promos;