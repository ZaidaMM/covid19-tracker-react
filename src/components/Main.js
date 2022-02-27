import React, { Component } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import { countries } from '../shared/data';
import CountryCard from './CountryCard';
import Sidebar from './Sidebar';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countryInput: 'Worldwide',
      countryData: {},
      countries: [],
      country: '',
    };

    this.onCountryChange = this.onCountryChange.bind(this);
  }

  componentDidMount =
    (() => {
      fetch('https://disease.sh/v3/covid-19/all')
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            countryData: data,
          });
        });
    },
    []);

  getCountriesInfo =
    (async () => {
      await fetch('https://disease.sh/v3/covid-19/countries')
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          this.setState({
            countries: countries,
            country: countries.name,
          });
        });
      this.getCountriesInfo();
    },
    []);

  onCountryChange = async (event) => {
    const countryName = event.target.value;
    console.log(countryName);

    const url =
      countryName === 'worldwide'
        ? 'https://disease.sh/v3/covid-19/all'
        : `https://disease.sh/v3/covid-19/countries/${countryName}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          countryInput: countryName,
          countryData: data,
        });
      });
    console.log(this.state.countryInput);
  };

  numFormatter(num) {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(0) + 'k'; // convert to k for number from > 1000 < 1 million
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(0) + 'm'; // convert to m for number from > 1 million
    } else if (num < 900) {
      return num; // if value < 1000, nothing to do
    }
  }
  render() {
    return (
      <div className='Main'>
        <div className='row m-4'>
          <div className='col-md-9 '>
            <h3 className=' text-center'>Coronavirus Data by Country</h3>
            <div className='row align-items-baseline '>
              <div className='col-md-6'>
                <h4 className='text-center offset-md-3'>
                  {this.state.countryData.country}
                </h4>
              </div>
              <Form className='col text-center'>
                <FormGroup className='py-3'>
                  <Input
                    type='select'
                    id='selectCountry'
                    name='selectCountry'
                    className='col-7 mx-auto py-2'
                    onChange={this.onCountryChange}
                    value={this.state.countries.name}
                  >
                    <option value='worldwide'>Worldwide</option>
                    {countries.map((country) => (
                      <option value={country.countryInfo.iso2}>
                        {country.country}
                      </option>
                    ))}
                  </Input>
                </FormGroup>
              </Form>
            </div>
            <CountryCard
              countryData={this.state.countryData}
              numFormatter={this.numFormatter}
            />
          </div>
          <div className='col-md-3 mt-2'>
            <Sidebar
              numFormatter={this.numFormatter}
              countryData={this.state.countryData}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
