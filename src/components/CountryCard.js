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
    function numFormatter(num) {
      if (num > 999 && num < 1000000) {
        return (num / 1000).toFixed(0) + 'k'; // convert to k for number from > 1000 < 1 million
      } else if (num > 1000000) {
        return (num / 1000000).toFixed(0) + 'm'; // convert to m for number from > 1 million
      } else if (num < 900) {
        return num; // if value < 1000, nothing to do
      }
    }
    return (
      <div class='CountryCard'>
        <CardGroup>
          <Card>
            <CardBody>
              <CardTitle tag='h5'>Coronavirus Cases</CardTitle>
              <CardText>
                <CasesStats
                  country={this.props.country}
                  numFormatter={numFormatter}
                />
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle tag='h5'>Recovered</CardTitle>
              <CardText>
                <RecoveredStats
                  country={this.props.country}
                  numFormatter={numFormatter}
                />
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle tag='h5'>Deaths</CardTitle>
              <CardText>
                <DeathsStats
                  country={this.props.country}
                  numFormatter={numFormatter}
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
