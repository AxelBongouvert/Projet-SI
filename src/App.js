import React, { Component } from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  Switch
} from 'react-router-dom';

import Demo from './Demo.js';
import Loader from './Loader.js';
import Choix from './Choix.js';
import Questionnaire from './Questionnaire.js';
import Accueil from './Accueil.js';
import Calculator from './Calculator.js';
import Profil from './Profil.js';
import Menu from './Menu.js';


class App extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASE || ''}>
          <div>
            <Switch>
              <Route path="/Demo" component={Demo} />
              <Route path="/Loader" component={Loader} />
              <Route path="/Choix" component={Choix} />
              <Route path="/Questionnaire" component={Questionnaire} />  
              <Route path="/Accueil" component={Accueil} />            
              <Route path="/Calculator" component={Calculator} />
              <Route path="/Profil" component={Profil} />
              <Route path="/Menu" component={Menu} />
              <Route path="/" component={Loader} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
      );
    }
  }
  
  export default App;