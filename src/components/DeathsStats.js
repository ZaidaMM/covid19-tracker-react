import React, { Component } from 'react';
import { countries } from '../shared/data';

class DeathsStats extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const countryDeathsStats = countries.map((country) => {
      {
        if (country.country === this.props.country) {
          return (
            <div className='container'>
              <div className='row'>
                <div className='col pb-2'>
                  <span className='lead' key={country.countryInfo.iso2}>
                    {this.props.numFormatter(country.todayDeaths)}
                  </span>
                  <span className='small'> Today Deaths</span>
                </div>
              </div>
              <div className='row'>
                <div className='col pb-2'>
                  <span className='lead' key={country.countryInfo.iso2}>
                    {this.props.numFormatter(country.deaths)}
                  </span>
                  <span className='small'> Total Deaths</span>
                </div>
              </div>
              <div className='row'>
                <div className='col pb-2'>
                  <span className='lead' key={country.countryInfo.iso2}>
                    {this.props.numFormatter(country.deathsPerOneMillion)}
                  </span>
                  <span className='small'> Deaths/1m pop.</span>
                </div>
              </div>
            </div>
          );
        }
      }
    });

    return <div>{countryDeathsStats}</div>;
  }
}

export default DeathsStats;
