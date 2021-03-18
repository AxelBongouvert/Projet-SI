import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Retour from './Retour.js';
import axios from 'axios';


class CreationCarton extends React.Component {
    constructor() {

        super();
        this.state = {
            "photo": "",
            "qrcode": "",
            "volume": 0,
            "largeur": 0,
            "hauteur": 0,
            "poids": 0,
            "profondeur": 0,
            "fragile": 0,
            "fk_id_salle": 0,
            "descriptionContenu": ""
        };
    }
    handleSubmit = (event) => {
        console.log(this.state)
        axios.post('/carton',

            [{
                "photo": this.state.photo,
                "qrCode": this.state.qrcode,
                "volume": this.state.volume,
                "largeur": this.state.largeur,
                "hauteur": this.state.hauteur,
                "poids": this.state.poids,
                "profondeur": this.state.profondeur,
                "fragile": this.state.fragile,
                "descriptionContenu": this.state.descriptionContenu,
                "fk_id_salle": this.state.fk_id_salle

            }]

        )
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });


    };
    handlePhotoChange(event) {
        this.setState({ photo: event.target.value });
    }
    handleQrcodeChange(event) {
        this.setState({ qrcode: event.target.value });
    }
    handleVolumeChange(event) {
        this.setState({ volume: event.target.value });
    }
    handleLargueurChange(event) {
        this.setState({ largeur: event.target.value });
    }
    handleHauteurChange(event) {
        this.setState({ hauteur: event.target.value });
    }
    handlePoidsChange(event) {
        this.setState({ poids: event.target.value });
    }
    handleProfondeurChange(event) {
        this.setState({ profondeur: event.target.value });
    }
    handleFragileChange(event) {
        this.setState({ fragile: event.target.value });
    }
    handleIdSalleChange(event) {
        this.setState({ fk_id_salle: event.target.value });
    }
    handleDescriptionContenuChange(event) {
        this.setState({ descriptionContenu: event.target.value });
    }
    render() {
        return (
            <div>
                <Retour name="Gestion des cartons"></Retour>
                <div class="container h-100">
                    <div class="row justify-content-center">
                        <div class="col-xl-10 col-lg-12 col-md-9">
                            <div class="card o-hidden border-0 shadow-lg">
                                <div class="card-body p-0">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="p-5">
                                                <div class="text-center">
                                                    <h6 class="m-1 font-weight-bold text-primary">Ajouter un carton</h6>
                                                </div>
                                                <form class="user" onSubmit={this.handleSubmit}>
                                                    <label>
                                                        Photo:
                                                        <div class="form-group">
                                                            <input type="text" class="form-control form-control-user" value={this.state.photo} onChange={this.handlePhotoChange.bind(this)} />
                                                        </div>

                                                    </label>

                                                    <label>
                                                        Qrcode:
                                                        <div class="form-group">
                                                            <input type="text" class="form-control form-control-user"value={this.state.qrcode} onChange={this.handleQrcodeChange.bind(this)} />
                                                        </div>

                                                    </label>

                                                    <label>
                                                        Volume:
                                                        <div class="form-group">
                                                            <input type="number" class="form-control form-control-user" value={this.state.volume} onChange={this.handleVolumeChange.bind(this)} />
                                                        </div>

                                                    </label>

                                                    <label>
                                                        Largueur:
                                                        <div class="form-group">
                                                            <input type="number" class="form-control form-control-user"value={this.state.largeur} onChange={this.handleLargueurChange.bind(this)} />
                                                        </div>

                                                    </label>

                                                    <label>
                                                        Hauteur:
                                                        <div class="form-group">
                                                            <input type="number" class="form-control form-control-user" value={this.state.hauteur} onChange={this.handleHauteurChange.bind(this)} />
                                                        </div>

                                                    </label>

                                                    <label>
                                                        Poids:
                                                        <div class="form-group">
                                                            <input type="number" class="form-control form-control-user" value={this.state.poids} onChange={this.handlePoidsChange.bind(this)} />
                                                        </div>

                                                    </label>

                                                    <label>
                                                        Profondeur:
                                                        <div class="form-group">
                                                            <input type="number" class="form-control form-control-user" value={this.state.profondeur} onChange={this.handleProfondeurChange.bind(this)} />
                                                        </div>

                                                    </label>

                                                    <label>
                                                        Fragile:
                                                        <div class="form-group">
                                                            <input type="number"class="form-control form-control-user"  value={this.state.fragile} onChange={this.handleFragileChange.bind(this)} />
                                                        </div>

                                                    </label>


                                                    <label>
                                                        IdSalle:
                                                        <div class="form-group">
                                                            <input type="number"class="form-control form-control-user"  value={this.state.fk_id_salle} onChange={this.handleIdSalleChange.bind(this)} />
                                                        </div>

                                                    </label>

                                                    <label>
                                                        DescriptionContenu:
                                                        <div class="form-group">
                                                            <input type="text" class="form-control form-control-user" value={this.state.descriptionContenu} onChange={this.handleDescriptionContenuChange.bind(this)} />
                                                        </div>
                                                        
                                                    </label>

                                                    <div class="text-center">
                                                        <button class="btn btn-info btn-user btn-block" id="submit" type="submit">modifier</button>
                                                    </div>

                                                </form>

                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}

export default CreationCarton;