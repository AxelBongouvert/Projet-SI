import React from 'react';

class Header extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
				<nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow fixed-top">
					<ul class="navbar-nav justify-content-center">
						<h5 class="font-weight-bold text-dark m-2">Tableau de bord</h5>
					</ul>
				</nav>
				<br /><br /><br /><br />
			</div>
		);
	}

}
	
export default Header;