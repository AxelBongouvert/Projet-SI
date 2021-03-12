import React from 'react';
import Retour from './Retour.js';
import Footer from './Footer.js';

class Plus extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div class="container">
				<Retour name="Plus"></Retour>
				<table class="table table-striped">
					<tr>
						<td>FAQ</td>
					</tr>
					<tr>
						<td>Informations légales (CGU / Mentions légales / Notice RGPD)</td>
					</tr>
					<tr>
						<td>Remerciements</td>
					</tr>
					<tr>
						<td>Autorisation photo / notification</td>
					</tr>
				</table>
				<Footer></Footer>
			</div>
		);
	}
	
}
	
export default Plus;