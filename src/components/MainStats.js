import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class MainStats extends Component {
  constructor(props) {
    super(props);
    // this.onCountryChange = this.onCountryChange.bind(this);
    this.state = {
      selectedCountry: '',
    };
  }

  render() {
    const countryList = this.props.data.map((country) => {
      return (
        <option value={country.countryInfo.iso2}>{country.country}</option>
      );
    });

    return (
      <div className='MainStats'>
        <div className='container py-4'>
          <h3 className=' text-center'>Coronavirus Data by Country</h3>
          <div className='countrySelect'>
            <Form className='my-4'>
              <FormGroup className='row'>
                <Label for='selectCountry' className='col-7 text-center'>
                  {this.state.selectedCountry}
                </Label>
                <Input
                  type='select'
                  id='selectCountry'
                  name='selectCountry'
                  className='col'
                >
                  {countryList}
                </Input>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default MainStats;
