import React from 'react';
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            nbCanape2places: 0,
            volumeCanape2places: 5,

            nbCanape1place: 0,
            volumeCanape1place: 2
        };
    }
    ajouterTotal(volumeToAdd) {
        this.setState({ total: this.state.total + volumeToAdd })
    };

    supprimerTotal(volumeToAdd) {
        if (this.state.total - volumeToAdd < 0) {
            this.setState({ total: 0 })
        } else {
            this.setState({ total: this.state.total - volumeToAdd })
        }
    };

    addCanape2Places() {
        this.setState({ nbCanape2places: this.state.nbCanape2places + 1 })
        this.ajouterTotal(this.state.volumeCanape2places)
    }
    rmCanape2Places() {
        if (this.state.nbCanape2places <= 0) {
            this.setState({ nbCanape2places: 0 })
        } else {
            this.setState({ nbCanape2places: this.state.nbCanape2places - 1 })
            this.supprimerTotal(this.state.volumeCanape2places)
        }
    }

    addCanape1Place() {
        this.setState({ nbCanape1place: this.state.nbCanape1place + 1 })
        this.ajouterTotal(this.state.volumeCanape1place)
    }
    rmCanape1Place() {
        if (this.state.nbCanape1place <= 0) {
            this.setState({ nbCanape1place: 0 })
        } else {
            this.setState({ nbCanape1place: this.state.nbCanape1place - 1 })
            this.supprimerTotal(this.state.volumeCanape1place)
        }
    }


    // this.ajouterTotal(this.state.volumeCanape2places)
    // <button onClick={() => this.setState({nbCanape2places: this.state.nbCanape2places + 1}) }> + </button>
    // <button onClick={() => this.calculerTotal() }> Calculer le volume total! </button> 
    //<button style={{margin : ".5%" }} onClick={()=> this.ajouterTotal(this.state.volumeCanape2places) }> + </button>

    render() {
        return (
            <div>
                <div> <h1> le Calculator ! </h1> </div>

                <div style={{ backgroundColor: "grey", padding: "5%", margin: "5%", border: "2px solid black" }} >
                    {this.state.nbCanape2places} canape 2 places de volume : {this.state.volumeCanape2places} m3
                    <button style={{ margin: ".5%" }} onClick={() => this.addCanape2Places()}> + </button>
                    <button style={{ margin: ".5%" }} onClick={() => this.rmCanape2Places()}> - </button>
                </div>

                <div style={{ backgroundColor: "grey", padding: "5%", margin: "5%", border: "2px solid black" }} >
                    {this.state.nbCanape1place} canape 1 place de volume : {this.state.volumeCanape1place} m3
                    <button style={{ margin: ".5%" }} onClick={() => this.addCanape1Place()}> + </button>
                    <button style={{ margin: ".5%" }} onClick={() => this.rmCanape1Place()}> - </button>
                </div>

                <div >
                    <h1>total = {this.state.total} </h1>
                </div>
            </div>
        );
    }
}

export default Calculator;