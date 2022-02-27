import React, { Component } from 'react';

class RecoveredStats extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.countryData);

    return (
      <div className='container'>
        <div className='row'>
          <div className='col pb-2'>
            <span
              className='lead'
              id='todayRecovered'
              key={this.props.countryData.country}
            >
              {this.props.numFormatter(this.props.countryData.todayRecovered)}
            </span>
            <span className='small'> Today Recovered</span>
          </div>
        </div>
        <div className='row'>
          <div className='col pb-2'>
            <span
              className='lead'
              id='cases'
              key={this.props.countryData.country}
            >
              {this.props.numFormatter(this.props.countryData.recovered)}
            </span>
            <span className='small'> Total Recovered</span>
          </div>
        </div>
        <div className='row'>
          <div className='col pb-2'>
            <span
              className='lead'
              id='cases'
              key={this.props.countryData.country}
            >
              {this.props.numFormatter(
                this.props.countryData.recoveredPerOneMillion
              )}
            </span>
            <span className='small'> Recovered/1m pop.</span>
          </div>
        </div>
      </div>
    );
  }
}

export default RecoveredStats;
