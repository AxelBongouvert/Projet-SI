import React, { Component } from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  Switch
} from 'react-router-dom';

import Demo from './Demo.js';
import Home from './Home.js';
import Accueil from './Accueil.js';
import Calculator from './Calculator.js';

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
              <Route path="/Home" component={Home} />
              <Route path="/Accueil" component={Accueil} />            
              <Route path="/Calculator" component={Calculator} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
      );
    }
  }
  
  export default App;