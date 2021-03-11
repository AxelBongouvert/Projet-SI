import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

class Promos extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
				<Header></Header>
				<p>Promos</p>
				<Footer></Footer>
			</div>
		);
	}
	
}
	
export default Promos;