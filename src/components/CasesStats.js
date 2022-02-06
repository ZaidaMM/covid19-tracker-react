import React, { Component } from 'react';
import { countries } from '../shared/data';

class CasesStats extends Component {
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

    const countryCasesStats = countries.map((country) => {
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
                    {numFormatter(country.todayCases)}
                  </span>
                  <span className='small'> Today Cases</span>
                </div>
              </div>
              <div className='row'>
                <div className='col pb-2'>
                  <span
                    className='lead'
                    id='cases'
                    key={country.countryInfo.iso2}
                  >
                    {numFormatter(country.cases)}
                  </span>
                  <span className='small'> Total Cases</span>
                </div>
              </div>
              <div className='row'>
                <div className='col pb-2'>
                  <span
                    className='lead'
                    id='cases'
                    key={country.countryInfo.iso2}
                  >
                    {numFormatter(country.casesPerOneMillion)}
                  </span>
                  <span className='small'> Cases/1m pop.</span>
                </div>
              </div>
            </div>
          );
        }
      }
    });

    return <div>{countryCasesStats}</div>;
  }
}

export default CasesStats;
