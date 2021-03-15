import React from 'react';
import Session from './Session';

class Deconnexion extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = { };
	}

	handleSubmit = (event) => {
		const { history } = this.props;
		Session.setConnecte(false);
		Session.setPseudo('');
		history.push('/loader');
		event.preventDefault();
	}
	
	render() {
		return (
			<div class="container h-100">
				<div class="row justify-content-center">
					<div class="col-xl-10 col-lg-12 col-md-9">
						<div class="card o-hidden border-0 shadow-lg my-5">
							<div class="card-body p-0">
								<div class="row">
									<div class="col-lg-12">
										<div class="p-5">
											<div class="text-center">
												<h1 class="h4 text-gray-900 mb-4">Espace de déconnexion</h1>
											</div>
											<form class="user" onSubmit={this.handleSubmit}>
												<button class="btn btn-primary btn-user btn-block" id="submit" type="submit">Déconnexion</button>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

}
	
export default Deconnexion;