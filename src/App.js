import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Home.js';

class App extends React.Component{

  render(){
    return(
      <Router>
        <Switch>
          <Route path="/"><Home/></Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
