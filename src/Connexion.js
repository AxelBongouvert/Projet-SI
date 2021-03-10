import React from 'react';

class Loader extends React.Component {
    
    constructor(props) {
		super(props);
		this.state = { pseudo: '', mdp: '' };
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
    }
    
    handleSubmit = (event) => {
		const { history } = this.props;
		history.push('/Choix');
		event.preventDefault();
	}
    
    render() {
        return (
            <section class="page-section text-center row h-100" id="contact">
                <div class="container">
                    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Identifiants de connexion</h2>
                    <div class="divider-custom">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 mx-auto">
                            <form id="contactForm" name="sentMessage" novalidate="novalidate" onSubmit={this.handleSubmit}>
                                <div class="control-group">
                                    <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                        <input class="form-control text-center" id="pseudo" type="text" placeholder="Nom de compte" required="required" data-validation-required-message="Veuillez saisir votre nom de compte." onChange={this.handleInputChange}/>
                                        <p class="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div class="control-group">
                                    <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                        <input class="form-control text-center" id="mdp" type="password" placeholder="Mot de passe" required="required" data-validation-required-message="Veuillez saisir votre mot de passe." onChange={this.handleInputChange}/>
                                        <p class="help-block text-danger"></p>
                                    </div>
                                </div>
                                <br />
                                <div id="success"></div>
                                <div class="form-group">
                                    <button class="btn btn-primary btn-xl" id="submit" type="submit">Connexion</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            );
        }
    }
    
    export default Loader;