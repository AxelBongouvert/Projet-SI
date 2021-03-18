import React from 'react';

class Accueil extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div class="d-flex flex-column h-100">
				<a href="Accueil" class="d-flex justify-content-center align-items-center bg-info text-white h-50 ">
					<h1 class="h3 mb-4 text-white">Je veux aider à déménager</h1>
				</a>
				<a href="TableauDeBord" class="d-flex justify-content-center align-items-center bg-danger text-white h-50 ">
					<h1 class="h3 mb-4 text-white">Je déménage</h1>
				</a>
			</div>
		);
	}
	
}
	
export default Accueil;