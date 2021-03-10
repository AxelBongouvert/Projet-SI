import React from 'react';

class Questionnaire extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <section class="page-section" id="contact">
                        <div class="container">
                        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Faisons connaissance</h2>
                        <br />
                        <p class="text-center">Compléter le formulaire pour personnaliser votre parcours</p>
                            <div class="row">
                                <div class="col-lg-8 mx-auto">
                                    <form id="contactForm" name="sentMessage" novalidate="novalidate">
                                        <div class="control-group">
                                            <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                                <input class="form-control" id="nom" type="text" placeholder="Nom du projet" required="required" data-validation-required-message="Veuillez saisir un nom." />
                                                <p class="help-block text-danger"></p>
                                            </div>
                                        </div>
                                        <div class="control-group">
                                            <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                                <input class="form-control" id="date" type="date" placeholder="Date de votre déménagement" required="required" data-validation-required-message="Veuillez saisir une date." />
                                                <p class="help-block text-danger"></p>
                                            </div>
                                        </div>
                                        <div class="control-group">
                                            <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                                <input class="form-control" id="actuel" type="text" placeholder="Adresse de votre logement actuel" required="required" data-validation-required-message="Veuillez saisir une adresse." />
                                                <p class="help-block text-danger"></p>
                                            </div>
                                        </div>
                                        <div class="control-group">
                                            <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                                <textarea class="form-control" id="futur" type="text" placeholder="Adresse de votre futur logement" required="required" data-validation-required-message="Veuillez saisir une adresse."></textarea>
                                                <p class="help-block text-danger"></p>
                                            </div>
                                        </div>
                                        <br />
                                        <div id="success"></div>
                                        <p>J'aurais besoin d'aide pour :</p>
                                        <div class="form-group"><button class="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Valider</button></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
            </div>
            );
        }
    }
    
    export default Questionnaire;