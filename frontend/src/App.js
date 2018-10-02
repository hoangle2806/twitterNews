import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import charts components
import PieChart from './components/pie';
import Display from './components/display';
//======================================

class App extends Component {
  render() {
    return (
      <div className="App">
        <PieChart />
        <Display />
      </div>
    );
  }
}

export default App;
