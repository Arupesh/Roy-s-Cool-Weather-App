import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Dashboard from './containers/dashboard'

class App extends Component {
  render() {
    
    return (
      <BrowserRouter>
      <Switch>
          <Route exact path='/' component={Dashboard}/>
        </Switch>
        
     </BrowserRouter>
    );
  }
}

export default App;
