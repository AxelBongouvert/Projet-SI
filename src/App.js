import React, { Component } from 'react';
import {
	BrowserRouter,
	Link,
	Route,
	Switch
} from 'react-router-dom';

import Loader from './Loader.js';
import Connexion from './Connexion.js';
import Inscription from './Inscription.js';
import Accueil from './Accueil.js';
import Demenagement from './Demenagement.js';
import Calculator from './Calculator.js';
import CheckCamions from './CheckCamions.js';
import Profil from './Profil.js';
import Promos from './Promos.js';
import Messages from './Messages.js';
import Plus from './Plus.js';

class App extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
		<BrowserRouter basename={process.env.REACT_APP_ROUTER_BASE || ''}>
			<Switch>
				<Route path="/Loader" component={Loader} />
				<Route path="/Connexion" component={Connexion} />
				<Route path="/Inscription" component={Inscription} />
				<Route path="/Accueil" component={Accueil} />
				<Route path="/Demenagement" component={Demenagement} />
				<Route path="/Calculator" component={Calculator} />
				<Route path="/CheckCamions" component={CheckCamions} />
				<Route path="/Profil" component={Profil} />
				<Route path="/Promos" component={Promos} />
				<Route path="/Messages" component={Messages} />
				<Route path="/Plus" component={Plus} />
				<Route path="/" component={Loader} />
			</Switch>
		</BrowserRouter>
		);
	}

}

export default App;