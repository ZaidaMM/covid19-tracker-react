import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { countries } from '../shared/data';
import CountryCard from './CountryCard';

class Main extends Component {
  constructor(props) {
    super(props);

    this.onCountryChange = this.onCountryChange.bind(this);
    this.state = {
      value: 'Worldwide',
    };
  }

  onCountryChange(event) {
    this.setState({ value: event.target.value });
    event.preventDefault();
    console.log(event.target.value);
  }
  render() {
    const countryList = countries.map((country) => {
      return <option key={country.countryInfo.iso2}>{country.country}</option>;
    });

    return (
      <div class='Main'>
        <div className='container py-3'>
          <h3 className=' text-center'>Coronavirus Data by Country</h3>
          <div className='row'>
            <div className='col-md-6'>
              <h4 className='text-center mt-2 ' key={this.state.value}>
                {this.state.value}
              </h4>
            </div>
            <Form className='col text-center'>
              <FormGroup className='py-3'>
                <select
                  value={this.state.value}
                  id='selectCountry'
                  name='selectCountry'
                  className='col-7 mx-auto'
                  onChange={this.onCountryChange}
                >
                  {countryList}
                </select>
              </FormGroup>
            </Form>
          </div>

          <CountryCard />
        </div>
      </div>
    );
  }
}

export default Main;
