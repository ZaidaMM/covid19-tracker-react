import React, { Component } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import CountryCard from './CountryCard';
import Sidebar from './Sidebar';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: [],
      CountriesLoaded: false,
      countryData: {},
      tableData: [],
    };
  }

  componentDidMount = async () => {
    await fetch('https://disease.sh/v3/covid-19/countries')
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          countries: json,
          CountriesLoaded: true,
        });
        console.log(this.state.countries);
      }, []);
  };

  getCountriesInfo = async () => {
    fetch('https://disease.sh/v3/covid-19/countries')
      .then((res) => res.json())
      .then((json) => {
        const countries = json.map((country) => ({
          name: country.country,
          value: country.countryInfo.iso2,
        }));

        this.setState({
          countries: json,
          CountriesLoaded: true,
          tableData: json,
        });
        console.log(this.state.countries);
      }, []);
  };

  onCountryChange = async (event) => {
    const countryCode = event.target.value;
    console.log(countryCode);

    const url =
      countryCode === 'worldwide'
        ? 'https://disease.sh/v3/covid-19/all'
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          countryData: json,
        });
      });
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
                  <select
                    // type='select'
                    id='selectCountry'
                    name='select'
                    className='col-7 mx-auto py-2'
                    onChange={this.onCountryChange}
                    value={this.state.countries.country}
                  >
                    <option value='worldwide'>Worldwide</option>
                    {this.state.countries.map((country) => {
                      return (
                        <option value={country.countryInfo.iso2}>
                          {country.country}
                        </option>
                      );
                    })}
                  </select>
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
              countries={this.state.countries}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
