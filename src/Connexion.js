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
            <div class="row text-center text-center align-items-center row h-100">
                <div class="col-lg-8 mx-auto">
                    <form id="contactForm" name="sentMessage" novalidate="novalidate" onSubmit={this.handleSubmit}>
                        <div class="control-group">
                            <label>Nom de compte</label>
                            <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                <input class="form-control text-center" id="pseudo" type="text" placeholder="..." required="required" data-validation-required-message="Veuillez saisir votre nom de compte." onChange={this.handleInputChange}/>
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="control-group">
                            <label>Mot de passe</label>
                            <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                <input class="form-control text-center" id="mdp" type="password" placeholder="..." required="required" data-validation-required-message="Veuillez saisir votre mot de passe." onChange={this.handleInputChange}/>
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
            );
        }
    }
    
    export default Loader;