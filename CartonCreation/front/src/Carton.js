import React , { Component } from 'react';
import axios from 'axios';

export default class Carton extends Component{
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
            "fk_id_salle": 0
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
    this.setState({photo: event.target.value});
  }
  handleQrcodeChange(event) {
    this.setState({qrcode: event.target.value});
  }
  handleVolumeChange(event) {
    this.setState({volume: event.target.value});
  }
  handleLargueurChange(event) {
    this.setState({largeur: event.target.value});
  }
  handleHauteurChange(event) {
    this.setState({hauteur: event.target.value});
  }
  handlePoidsChange(event) {
    this.setState({poids: event.target.value});
  }
  handleProfondeurChange(event) {
    this.setState({profondeur: event.target.value});
  }
  handleFragileChange(event) {
    this.setState({fragile: event.target.value});
  }
  handleIdSalleChange(event) {
    this.setState({fk_id_salle: event.target.value});
  }


 

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Photo:
          <input type="text" value={this.state.photo} onChange={this.handlePhotoChange.bind(this)} />
        </label>

        <label>
          Qrcode:
          <input type="text" value={this.state.qrcode} onChange={this.handleQrcodeChange.bind(this)} />
        </label>

        <label>
          Volume:
          <input type="number" value={this.state.volume} onChange={this.handleVolumeChange.bind(this)} />
        </label>

        <label>
          Largueur:
          <input type="number" value={this.state.largeur} onChange={this.handleLargueurChange.bind(this)} />
        </label>

        <label>
          Hauteur:
          <input type="number" value={this.state.hauteur} onChange={this.handleHauteurChange.bind(this)} />
        </label>

        <label>
          Poids:
          <input type="number" value={this.state.poids} onChange={this.handlePoidsChange.bind(this)} />
        </label>

        <label>
          Profondeur:
          <input type="number" value={this.state.profondeur} onChange={this.handleProfondeurChange.bind(this)} />
        </label>

        <label>
          Fragile:
          <input type="number" value={this.state.fragile} onChange={this.handleFragileChange.bind(this)} />
        </label>
      

        <label>
          IdSalle:
          <input type="number" value={this.state.fk_id_salle} onChange={this.handleIdSalleChange.bind(this)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }



}