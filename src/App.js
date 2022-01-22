import React, { Component } from 'react';
import MainNavbar from './components/MainNavbar';
import Presentation from './components/Presentation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Presentation />
        <MainNavbar />
      </div>
    );
  }
}

export default App;
