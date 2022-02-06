import React, { Component } from 'react';
import { Form, FormGroup } from 'reactstrap';
import { countries } from '../shared/data';
import CountryCard from './CountryCard';
import Sidebar from './Sidebar';

class Main extends Component {
  constructor(props) {
    super(props);

    this.onCountryChange = this.onCountryChange.bind(this);
    this.state = {
      country: 'Worldwide',
    };
  }

  onCountryChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    const stats = this.setState({
      country: value,
    });

    console.log(value);
    event.preventDefault();
  }

  render() {
    const countryList = countries.map((country) => {
      return <option key={country.countryInfo.iso2}>{country.country}</option>;
    });

    return (
      <div className='Main'>
        <div className='row m-4'>
          <div className='col-md-9 '>
            <h3 className=' text-center'>Coronavirus Data by Country</h3>
            <div className='row align-items-baseline '>
              <div className='col-md-6'>
                <h4 className='text-center offset-md-3'>
                  {this.state.country}
                </h4>
              </div>
              <Form className='col text-center'>
                <FormGroup className='py-3'>
                  <select
                    id='selectCountry'
                    name='selectCountry'
                    className='col-7 mx-auto py-2'
                    onChange={this.onCountryChange}
                    value={this.state.country}
                    key={this.state.country}
                  >
                    {countryList}
                  </select>
                </FormGroup>
              </Form>
            </div>
            <CountryCard country={this.state.country} />
          </div>
          <div className='col-md-3 mt-2'>
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
