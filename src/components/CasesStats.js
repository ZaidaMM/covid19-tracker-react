import React, { Component } from 'react';

class CasesStats extends Component {
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
              id='todayCases'
              key={this.props.countryData.country}
            >
              {this.props.numFormatter(this.props.countryData.todayCases)}
            </span>
            <span className='small'> Today Cases</span>
          </div>
        </div>
        <div className='row'>
          <div className='col pb-2'>
            <span
              className='lead'
              id='cases'
              key={this.props.countryData.country}
            >
              {this.props.numFormatter(this.props.countryData.cases)}
            </span>
            <span className='small'> Total Cases</span>
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
                this.props.countryData.casesPerOneMillion
              )}
            </span>
            <span className='small'> Cases/1m pop.</span>
          </div>
        </div>
      </div>
    );
  }
}

export default CasesStats;
