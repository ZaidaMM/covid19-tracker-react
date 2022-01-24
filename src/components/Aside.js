import React, { Component } from 'react';

export class Aside extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className='container py-4'>
        <h3 className='lead text-center'>Daily Cases by Country</h3>
      </div>
    );
  }
}

export default Aside;
