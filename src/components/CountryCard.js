import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardGroup, CardBody } from 'reactstrap';
import CasesStats from './CasesStats';
import RecoveredStats from './RecoveredStats';
import DeathsStats from './DeathsStats';

class CountryCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class='CountryCard'>
        <CardGroup className='text-center'>
          <Card>
            <CardBody>
              <CardTitle tag='h5'>Coronavirus Cases</CardTitle>
              <hr />
              <CardText>
                <CasesStats
                  country={this.props.country}
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
                  country={this.props.country}
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
                  country={this.props.country}
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
