import React, { Component } from 'react';
import MainNavbar from './components/MainNavbar';
import Presentation from './components/Presentation';
import MainStats from './components/MainStats';
import Aside from './components/Aside';
import { DATA } from './shared/data';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: DATA,
    };
  }
  render() {
    return (
      <div className='App'>
        <Presentation />
        <MainNavbar />
        <div className='row'>
          <div className='col-md-8'>
            <MainStats data={this.state.data} />
          </div>
          <div className='col-md-4'>
            <Aside />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
