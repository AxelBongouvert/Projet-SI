import React, { Component } from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  Switch
} from 'react-router-dom';

import Loader from './Loader.js';
import Connexion from './Connexion.js';
import Accueil from './Accueil.js';
import Calculator from './Calculator.js';
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
              <Route path="/Accueil" component={Accueil} />            
              <Route path="/Calculator" component={Calculator} />
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