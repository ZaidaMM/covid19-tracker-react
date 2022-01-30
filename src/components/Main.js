import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { countries } from '../shared/data';
import CountryCard from './CountryCard';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCountry: null,
    };
  }

  onCountryChange(event) {
    // this.setState = { selectedCountry: this.country.countryInfo.iso2 };
    console.log(event);
  }

  render() {
    const countryList = countries.map((country) => {
      return <option key={country.countryInfo.iso2}>{country.country}</option>;
    });

    return (
      <div class='Main'>
        <div className='container py-3'>
          <h3 className=' text-center'>Coronavirus Data by Country</h3>
          <Form>
            <FormGroup className='row py-3'>
              <Input
                type='select'
                id='selectCountry'
                name='selectCountry'
                className='col-7 mx-auto'
                onChange={this.onCountryChange}
              >
                {countryList}
              </Input>
            </FormGroup>
          </Form>
          <CountryCard />
        </div>
      </div>
    );
  }
}

export default Main;
