import React, { Component } from 'react';
import Pokemons from './components/Pokemons';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

 class App extends Component {

  render() {
    return (
     <Router>
      <div>
     <Pokemons  />
      </div>
     </Router>
    )
  }
}

export default App;