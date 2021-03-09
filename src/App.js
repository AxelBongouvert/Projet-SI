import React, { Component } from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  Switch
} from 'react-router-dom';

import Demo from './Demo.js';
import Home from './Home.js';
<<<<<<< HEAD
import Accueil from './Accueil.js';
=======
import Calculator from './Calculator.js';
>>>>>>> e946ee1b765a76da97d43a404b01753bf7c65692

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
              <Route path="/Home" component={Home} />
<<<<<<< HEAD
              <Route path="/Accueil" component={Accueil} />
              <Route path="/" component={Home} />             
=======
              <Route path="/Calculator" component={Calculator} />
              <Route path="/" component={Demo} />             
>>>>>>> e946ee1b765a76da97d43a404b01753bf7c65692
            </Switch>
          </div>
        </BrowserRouter>
      </div>
      );
    }
  }
  
  export default App;