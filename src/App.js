import React, { Component } from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  Switch
} from 'react-router-dom';

import Loader from './Loader.js';
import Connexion from './Connexion.js';
import Choix from './Choix.js';
import Questionnaire from './Questionnaire.js';
import Accueil from './Accueil.js';
import Calculator from './Calculator.js';
import Profil from './Profil.js';


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
              <Route path="/Choix" component={Choix} />
              <Route path="/Questionnaire" component={Questionnaire} />  
              <Route path="/Accueil" component={Accueil} />            
              <Route path="/Calculator" component={Calculator} />
              <Route path="/Profil" component={Profil} />
              <Route path="/" component={Loader} />
            </Switch>
        </BrowserRouter>
      );
    }
  }
  
  export default App;