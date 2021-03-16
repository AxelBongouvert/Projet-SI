import React from 'react';
import Retour from './Retour.js';
import Footer from './Footer.js';
import Session from './Session.js';

class MaSalle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cartons: [],
        }
    }
    handleCartonClicked(id) {
        const { history } = this.props;
        Session.setIdCarton(id)
        history.push('MonCarton');
    }

    componentDidMount() {
        console.log(Session.getIdSalle())
        var url = 'http://localhost:5000/carton/2'//+Session.getIdSalle()
        fetch(url)
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                this.setState({
                    cartons: result
                });
            })
            .catch((error) => {
                console.error(error);
            })
    }

    render() {
        return (
            <div class="card-body">
                <div class="row">
                    {this.state.cartons.map(result => {
                        return (
                            <div class="col-lg-0 mb-2" onClick={e => this.handleSalleClicked(result.id)}>
                                <div class="card bg-primary text-white shadow">
                                    <div class="card-body">
                                        <i class="fas fa-box fa-fw"></i>
                                        <div class="text-white-50 small">{result.nom}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }

}
export default MaSalle;