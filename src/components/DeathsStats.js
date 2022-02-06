import React, { Component } from 'react';
import { countries } from '../shared/data';

class DeathsStats extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // var num;
    function numFormatter(num) {
      if (num > 999 && num < 1000000) {
        return (num / 1000).toFixed(0) + 'k'; // convert to k for number from > 1000 < 1 million
      } else if (num > 1000000) {
        return (num / 1000000).toFixed(0) + 'm'; // convert to m for number from > 1 million
      } else if (num < 900) {
        return num; // if value < 1000, nothing to do
      }
    }

    const countryDeathsStats = countries.map((country) => {
      {
        if (country.country === this.props.country) {
          return (
            <div className='container'>
              <div className='row'>
                <div className='col pb-2'>
                  <span className='lead' key={country.countryInfo.iso2}>
                    {numFormatter(country.todayDeaths)}
                  </span>
                  <span className='small'> Today Deaths</span>
                </div>
              </div>
              <div className='row'>
                <div className='col pb-2'>
                  <span className='lead' key={country.countryInfo.iso2}>
                    {numFormatter(country.deaths)}
                  </span>
                  <span className='small'> Total Deaths</span>
                </div>
              </div>
              <div className='row'>
                <div className='col pb-2'>
                  <span className='lead' key={country.countryInfo.iso2}>
                    {numFormatter(country.deathsPerOneMillion)}
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
