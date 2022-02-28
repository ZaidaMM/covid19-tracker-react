import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Line } from 'react-chartjs-2';
// import Chart from './Chart.js';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.handleTable = this.handleTable.bind(this);
  }

  handleTable = () => {
    console.log(this.props.countries);
    return this.props.countries
      .sort((a, b) => b.cases - a.cases)
      .map((country) => {
        return (
          <tr>
            <td key={country.countryInfo.iso2}>{country.country}</td>
            <td className='text-right'>
              {this.props.numFormatter(country.cases)}
            </td>
          </tr>
        );
      });
  };

  render() {
    return (
      <div className='Sidebar mx-auto'>
        <div className='row'>
          <div className='container table-card'>
            <Table striped hover bordered>
              <thead>
                <tr>
                  <th>Country</th>
                  <th className='text-right ml-auto'>
                    Coronavirus Cases by Country
                  </th>
                </tr>
              </thead>
              <tbody>{this.handleTable()}</tbody>
            </Table>
          </div>
        </div>
        <div className='row'>I am a chart</div>
      </div>
    );
  }
}

export default Sidebar;
