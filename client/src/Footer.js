import React from 'react';

class Footer extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<br /><br /><br />
				<nav class="navbar navbar-expand navbar-light bg-white topbar static-top shadow fixed-bottom">
					<ul class="navbar-nav w-100 d-flex justify-content-around">
						<li class="nav-item no-arrow">
							<a class="nav-link mt-3" href="/Profil" id="profil" role="button" aria-haspopup="true" aria-expanded="false">
								<img class="img-profile rounded-circle" src="img/undraw_profile.svg"/>
							</a>
						</li>
						<li class="nav-item no-arrow">
							<a class="nav-link mt-3" href="Page404" id="promos" role="button" aria-haspopup="true" aria-expanded="false">
								<i class="fas fa-cart-plus fa-fw"></i>
							</a>
						</li>
						<li class="nav-item no-arrow">
							<button class="btn btn-danger btn-circle btn-lg mb-5" href="#" id="creation_demenagement">
								<i class="fas fa-truck fa-fw"></i>
							</button>
						</li>
						<li class="nav-item no-arrow">
							<a class="nav-link mt-3" href="Page404" id="messages" role="button" aria-haspopup="true" aria-expanded="false">
								<i class="fas fa-envelope fa-fw"></i>
							</a>
						</li>
						<li class="nav-item no-arrow">
							<a class="nav-link mt-3" href="/Plus" id="plus" role="button" aria-haspopup="true" aria-expanded="false">
								<i class="fas fa-dot-circle fa-fw"></i>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
	
}

export default Footer;