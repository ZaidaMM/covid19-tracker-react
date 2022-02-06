import React, { Component } from 'react';
import { countries } from '../shared/data';

class CasesStats extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
                    {this.props.numFormatter(country.todayCases)}
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
                    {this.props.numFormatter(country.cases)}
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
                    {this.props.numFormatter(country.casesPerOneMillion)}
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
