import React, { Component } from 'react';
import { countries } from '../shared/data';

class RecoveredStats extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const countryRecoveredStats = countries.map((country) => {
      {
        if (country.country === this.props.country) {
          return (
            <div className='container'>
              <div className='row'>
                <div className='col pb-2'>
                  <span
                    className='lead'
                    id='todayCases'
                    key={country.countryInfo.iso2}
                  >
                    {this.props.numFormatter(country.todayRecovered)}
                  </span>
                  <span className='small'> Today Recovered</span>
                </div>
              </div>
              <div className='row'>
                <div className='col pb-2'>
                  <span
                    className='lead'
                    id='cases'
                    key={country.countryInfo.iso2}
                  >
                    {this.props.numFormatter(country.recovered)}
                  </span>
                  <span className='small'> Total Recovered</span>
                </div>
              </div>
              <div className='row'>
                <div className='col pb-2'>
                  <span
                    className='lead'
                    id='cases'
                    key={country.countryInfo.iso2}
                  >
                    {this.props.numFormatter(country.recoveredPerOneMillion)}
                  </span>
                  <span className='small'> Recovered/1m pop.</span>
                </div>
              </div>
            </div>
          );
        }
      }
    });

    return <div>{countryRecoveredStats}</div>;
  }
}

export default RecoveredStats;
