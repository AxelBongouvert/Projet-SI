/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Retour from './Retour.js';
import Footer from './Footer.js';
import Session from './Session.js';

class MonCarton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            infos: [],
            photo: '', qr: '', volume: 0, largeur: 0, hauteur: 0, poids: 0, profondeur: 0, fragile: 0, descriptionContenu: '', fk_id_salle: 0
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        const json = { photo: this.state.photo, qrCode: this.state.qrCode, volume: this.state.volume,
                     largeur: this.state.largeur, hauteur: this.state.hauteur, poids: this.state.poids, profondeur: this.state.profondeur,
                     fragile: this.state.fragile, descriptionContenu: this.state.descriptionContenu, fk_id_salle: this.state.fk_id_salle, id: this.state.infos.id };
        fetch('http://localhost:5000/carton', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, PATCH, OPTIONS'
            },
            body: JSON.stringify(json)
        })
        event.preventDefault();
        window.location.reload();
    }

    componentDidMount() {
        fetch('http://localhost:5000/carton/' + Session.getIdCarton(), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, PATCH, OPTIONS'
            }
        }).then(function (response) {
            return response.json();
        }).then(res => {
            this.setState({ infos: res[0] })
            this.state.photo= this.state.infos.photo;
            this.state.qrCode = this.state.infos.qrCode;
            this.state.volume = this.state.infos.volume;
            this.state.largeur = this.state.infos.largeur; 
            this.state.hauteur= this.state.infos.hauteur;
            this.state.poids = this.state.infos.poids;
            this.state.profondeur = this.state.infos.profondeur;
            this.state.fragile = this.state.infos.fragile;
            this.state.descriptionContenu = this.state.infos.descriptionContenu;
            this.state.fk_id_salle = this.state.infos.fk_id_salle
        });
    }

    render() {
        var data = this.state.infos
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
                                                    <h6 class="m-1 font-weight-bold text-primary">Mon Carton</h6>
                                                </div>
                                                <form class="user" onSubmit={this.handleSubmit}>
                                                    <div class="form-group">
                                                        photo
                                                            <input type="text" class="form-control form-control-user" id="photo" name="photo" placeholder="photo" defaultValue={data.photo || ''} onChange={this.handleInputChange}></input>
                                                    </div>
                                                    <div class="form-group">
                                                        qrcode
                                                            <input type="text" class="form-control form-control-user" id="qrCode" name="qrCode" placeholder="qrCode" defaultValue={data.qrCode || ''} onChange={this.handleInputChange}></input>
                                                    </div>
                                                    <div class="form-group">
                                                        Volume
                                                            <input type="text" class="form-control form-control-user" id="volume" name="volume" placeholder="volume" defaultValue={data.volume || ''} onChange={this.handleInputChange}></input>
                                                    </div>
                                                    <div class="form-group">
                                                        Largeur
                                                            <input type="text" class="form-control form-control-user" id="largeur" name="largeur" placeholder="largeur" defaultValue={data.largeur || ''} onChange={this.handleInputChange}></input>
                                                    </div>
                                                    <div class="form-group">
                                                        hauteur
                                                        <input type="text" class="form-control form-control-user" id="hauteur" name="hauteur" placeholder="hauteur" defaultValue={data.hauteur || ''} onChange={this.handleInputChange}></input>
                                                    </div>
                                                    <div class="form-group">
                                                        poids
                                                            <input type="text" class="form-control form-control-user" id="poids" name="poids" placeholder="poids" defaultValue={data.poids || ''} onChange={this.handleInputChange}></input>
                                                    </div>
                                                    <div class="form-group">
                                                        profondeur
                                                            <input type="text" class="form-control form-control-user" id="profondeur" name="profondeur" placeholder="profondeur" defaultValue={data.profondeur || ''} onChange={this.handleInputChange}></input>
                                                    </div>
                                                    <div class="form-group">
                                                        contenu
                                                        <input type="text" class="form-control form-control-user" id="descriptionContenu" name="descriptionContenu" placeholder="contenu" defaultValue={data.descriptionContenu || ''} onChange={this.handleInputChange}></input>
                                                    </div>
                                                    <div class="form-group">
                                                        Salle
                                                        <input type="text" class="form-control form-control-user" id="fk_id_salle" name="fk_id_salle" placeholder="identifiant salle" defaultValue={data.fk_id_salle || ''} onChange={this.handleInputChange}></input>
                                                    </div>
                                                    <button class="btn btn-info btn-user btn-block" id="submit" type="submit">modifier</button>
                                                </form>
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
export default MonCarton;