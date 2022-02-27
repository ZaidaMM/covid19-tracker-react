import React, { Component } from 'react';
import { countries } from '../shared/data';

class DeathsStats extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col pb-2'>
            <span className='lead' key={this.props.countryData.country}>
              {this.props.numFormatter(this.props.countryData.todayDeaths)}
            </span>
            <span className='small'> Today Deaths</span>
          </div>
        </div>
        <div className='row'>
          <div className='col pb-2'>
            <span className='lead' key={this.props.countryData.country}>
              {this.props.numFormatter(this.props.countryData.deaths)}
            </span>
            <span className='small'> Total Deaths</span>
          </div>
        </div>
        <div className='row'>
          <div className='col pb-2'>
            <span className='lead' key={this.props.countryData.country}>
              {this.props.numFormatter(
                this.props.countryData.deathsPerOneMillion
              )}
            </span>
            <span className='small'> Deaths/1m pop.</span>
          </div>
        </div>
      </div>
    );
  }
}

export default DeathsStats;
