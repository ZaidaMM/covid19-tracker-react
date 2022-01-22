import React, { Component } from 'react';

class Presentation extends Component {
  render() {
    return (
      <div className='Presentation'>
        <div className='jumbotron mb-0 '>
          <h1 className='text-white offset-md-1 display-3 text-md-left text-center'>
            Covid19-Tracker
          </h1>
          <p className='text-light offset-md-1 lead pl-2 d-none d-md-block '>
            Keep safe with reliable information in real time
          </p>
        </div>
      </div>
    );
  }
}

export default Presentation;
