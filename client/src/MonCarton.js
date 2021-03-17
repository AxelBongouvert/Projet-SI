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
            photo: '', qr: '', volume: 0, largeur: 0, hauteur: 0, poids: 0, profondeur: 0, fragile: 0
        }
    }
    handleCartonClicked(id) {
        const { history } = this.props;
        Session.setIdCarton(id)
        history.push('MonCarton');
    }

    componentDidMount() {
        fetch('http://localhost:5000/monCarton/' + Session.getIdCarton, {
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
            this.state.photo = this.state.infos.photo;
            this.state.qr = this.state.infos.qr;
            this.state.volume = this.state.infos.volume;
            this.state.largeur = this.state.infos.largeur;
            this.state.hauteur = this.state.infos.hauteur;
            this.state.poids = this.state.infos.poids;
            this.state.profondeur = this.state.infos.profondeur;
            this.state.fragile = this.state.infos.fragile;

        });
    }

    render() {
        var data = this.state.infos
        return (
            <div>
                <Retour name="Ma salle"></Retour>
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
                                                        <h1 class="h4 text-gray-900 mb-4">{data.pseudo || ''}</h1>
                                                    </div>
                                                    <form class="user" onSubmit={this.handleSubmit}>
                                                        <div class="form-group">
                                                            <input type="text" class="form-control form-control-user" id="volume" name="volume" placeholder="volume" defaultValue={data.volume || ''} onChange={this.handleInputChange}></input>
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="text" class="form-control form-control-user" id="largeur" name="largeur" placeholder="largeur" defaultValue={data.largeur || ''} onChange={this.handleInputChange}></input>
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="text" class="form-control form-control-user" id="hauteur" name="hauteur" placeholder="hauteur" onChange={this.handleInputChange}></input>
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="text" class="form-control form-control-user" id="poids" name="poids" placeholder="poids" defaultValue={data.poids || ''} onChange={this.handleInputChange}></input>
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="text" class="form-control form-control-user" id="profondeur" name="profondeur" placeholder="profondeur" defaultValue={data.profondeur || ''} onChange={this.handleInputChange}></input>
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="text" class="form-control form-control-user" id="hauteur" name="hauteur" placeholder="hauteur" onChange={this.handleInputChange}></input>
                                                        </div>
                                                        <button class="btn btn-info btn-user btn-block" id="submit" type="submit">modifier</button>
                                                    </form>
                                                    <br />
                                                    <div class="text-center">
                                                        <a href="/Deconnexion" class="text-info">Se déconnecter</a>
                                                    </div>
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