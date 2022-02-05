import React, { Component } from 'react';
import { countries } from '../shared/data';
import { Card, CardTitle, CardText, CardGroup, CardBody } from 'reactstrap';

class CountryCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var num;
    function numFormatter(num) {
      if (num > 999 && num < 1000000) {
        return (num / 1000).toFixed(0) + 'k'; // convert to k for number from > 1000 < 1 million
      } else if (num > 1000000) {
        return (num / 1000000).toFixed(0) + 'm'; // convert to m for number from > 1 million
      } else if (num < 900) {
        return num; // if value < 1000, nothing to do
      }
    }

    const todayCasesStats = countries.map((country) => {
      {
        if (country.country === this.props.country) {
          return (
            <span
              className='lead'
              id='todayCases'
              key={country.countryInfo.iso2}
            >
              {numFormatter(country.todayCases)}
            </span>
          );
        }
      }
    });
    const casesStats = countries.map((country) => {
      {
        if (country.country === this.props.country) {
          return (
            <span className='lead' id='cases' key={country.countryInfo.iso2}>
              {numFormatter(country.cases)}
            </span>
          );
        }
      }
    });
    const casesPerOneMillionStats = countries.map((country) => {
      {
        if (country.country === this.props.country) {
          return (
            <span className='lead' id='cases' key={country.countryInfo.iso2}>
              {numFormatter(country.casesPerOneMillion)}
            </span>
          );
        }
      }
    });

    return (
      <div class='CountryCard'>
        <CardGroup>
          <Card>
            <CardBody>
              <CardTitle tag='h5'>Coronavirus Cases</CardTitle>
              <CardText>
                <p className='small'>{todayCasesStats} Today Cases</p>
                <p className='small'>{casesStats} Confirmed cases</p>
                <p className='small'>
                  {casesPerOneMillionStats} Cases per 1m pop.
                </p>
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle tag='h5'>Recovered</CardTitle>
              <CardText>
                <p class='small'>
                  <span className='lead' id='recoveredToday'>
                    299k
                  </span>{' '}
                  Today Recovered
                </p>
                <p class='small'>
                  <span className='lead' id='recoveredTotal'>
                    250m
                  </span>{' '}
                  Total Recovered
                </p>
                <p class='small'>
                  <span className='lead' id='recoveredPerMillionPop'>
                    32k
                  </span>{' '}
                  Recovered/1m pop.
                </p>
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle tag='h5'>Deaths</CardTitle>
              <CardText>
                <p class='small'>
                  <span class='lead' id='deathsToday'>
                    3k
                  </span>{' '}
                  Today Deaths
                </p>
                <p class='small'>
                  <span class='lead' id='deathsTotal'>
                    5m
                  </span>{' '}
                  Total Deaths
                </p>
                <p class='small'>
                  <span class='lead' id='deathsPerMillionPop'>
                    695
                  </span>{' '}
                  Deaths/1m pop.
                </p>
              </CardText>
            </CardBody>
          </Card>
        </CardGroup>
      </div>
    );
  }
}
export default CountryCard;
