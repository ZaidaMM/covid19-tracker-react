import React, { Component } from 'react';
import { countries } from '../shared/data';
import { Table } from 'reactstrap';

export class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const dailyCases = countries.map((country) => {
      return (
        <tr>
          <td key={country.countryInfo.iso2}>{country.country}</td>
          <td className='text-right' key={country.countryInfo.iso2}>
            {country.todayCases}
          </td>
        </tr>
      );
    });
    return (
      <div className='sidebar mx-auto'>
        <div className='container table-card'>
          <Table striped hover bordered>
            <thead>
              <tr>
                <th>Country</th>
                <th className='text-right ml-auto'>Coronavirus Daily Cases</th>
              </tr>
            </thead>
            <tbody>{dailyCases}</tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Sidebar;
