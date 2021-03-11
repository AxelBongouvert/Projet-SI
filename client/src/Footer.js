import React from 'react';

class Footer extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<nav class="navbar navbar-expand navbar-light bg-white topbar static-top shadow fixed-bottom">
				<ul class="navbar-nav w-100 d-flex justify-content-around">
					<li class="nav-item no-arrow">
						<a class="nav-link" href="/Profil" id="profil" role="button" aria-haspopup="true" aria-expanded="false">
							<img class="img-profile rounded-circle" src="img/undraw_profile.svg"/>
						</a>
					</li>
					<li class="nav-item no-arrow">
						<a class="nav-link" href="/Promos" id="promos" role="button" aria-haspopup="true" aria-expanded="false">
							<i class="fas fa-cart-plus fa-fw"></i>
						</a>
					</li>
					<li class="nav-item no-arrow">
						<a class="nav-link" href="/Messages" id="messages" role="button" aria-haspopup="true" aria-expanded="false">
							<i class="fas fa-envelope fa-fw"></i>
						</a>
					</li>
					<li class="nav-item no-arrow">
						<a class="nav-link" href="/Plus" id="plus" role="button" aria-haspopup="true" aria-expanded="false">
							<i class="fas fa-dot-circle fa-fw"></i>
						</a>
					</li>
				</ul>
			</nav>
		);
	}
	
}

export default Footer;