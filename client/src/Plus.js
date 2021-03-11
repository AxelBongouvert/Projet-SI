import React from 'react';
import Retour from './Retour.js';
import Footer from './Footer.js';

class Plus extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
				<Retour name="Plus"></Retour>
				<p>Plus</p>
				<Footer></Footer>
			</div>
		);
	}
	
}
	
export default Plus;