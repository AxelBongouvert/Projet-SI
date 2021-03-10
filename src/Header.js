import React from 'react';

class Header extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
				<nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
					<ul class="navbar-nav justify-content-center">
						<a href="Accueil"><h1 class="h3 mb-0 text-gray-800">Tableau de bord</h1></a>
					</ul>
				</nav>
			</div>
		);
	}

}
	
export default Header;