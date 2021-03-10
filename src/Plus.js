import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

class Plus extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
				<Header></Header>
				<p>Plus</p>
				<Footer></Footer>
			</div>
		);
	}
	
}
	
export default Plus;