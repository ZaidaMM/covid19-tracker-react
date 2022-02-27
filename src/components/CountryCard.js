import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardGroup, CardBody } from 'reactstrap';
import CasesStats from './CasesStats';
import RecoveredStats from './RecoveredStats';
import DeathsStats from './DeathsStats';

class CountryCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log(this.props.countryData);
    // console.log(this.props.country);

    return (
      <div className='CountryCard'>
        <CardGroup className='text-center'>
          <Card>
            <CardBody>
              <CardTitle tag='h5'>Coronavirus Cases</CardTitle>
              <hr />
              <CardText>
                <CasesStats
                  countryData={this.props.countryData}
                  numFormatter={this.props.numFormatter}
                />
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle tag='h5'>Recovered</CardTitle>
              <hr />
              <CardText>
                <RecoveredStats
                  countryData={this.props.countryData}
                  numFormatter={this.props.numFormatter}
                />
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle tag='h5'>Deaths</CardTitle>
              <hr />
              <CardText>
                <DeathsStats
                  countryData={this.props.countryData}
                  numFormatter={this.props.numFormatter}
                />
              </CardText>
            </CardBody>
          </Card>
        </CardGroup>
      </div>
    );
  }
}
export default CountryCard;
