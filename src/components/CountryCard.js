import React, { Component } from 'react';
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
} from 'reactstrap';

class CountryCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class='CountryCard'>
        <CardGroup>
          <Card>
            <CardBody>
              <CardTitle tag='h5'>Coronavirus Cases</CardTitle>
              <CardText>
                <p class='small'>
                  <span class='lead' id='casesToday'>
                    336k
                  </span>{' '}
                  Today Cases
                </p>
                <p class='small'>
                  <span class='lead' id='casesTotal'>
                    280m
                  </span>{' '}
                  Confirmed cases
                </p>
                <p class='small'>
                  <span class='lead' id='casesPerMillionPop'>
                    36k
                  </span>{' '}
                  Cases per 1m pop.
                </p>
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle tag='h5'>Recovered</CardTitle>
              <CardText>
                <p class='small'>
                  <span class='lead' id='recoveredToday'>
                    299k
                  </span>{' '}
                  Today Recovered
                </p>
                <p class='small'>
                  <span class='lead' id='recoveredTotal'>
                    250m
                  </span>{' '}
                  Total Recovered
                </p>
                <p class='small'>
                  <span class='lead' id='recoveredPerMillionPop'>
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
