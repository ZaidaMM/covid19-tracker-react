import React, { Component } from 'react';
// import { countries } from '../shared/data';
import { Table } from 'reactstrap';
import { Line } from 'react-chartjs-2';
// import Chart from './Chart.js';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleTable = this.handleTable.bind(this);
  }
  // .sort((a, b) => b.country.todayCases - a.country.todayCases)
  handleTable = () => {
    return this.props.countries.forEach((country) => {
      return (
        <tr>
          <td key={country.value}>{country.name}</td>
          <td className='text-right'>
            {this.props.numFormatter(country.todayCases)}
          </td>
        </tr>
      );
    }, []);
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
                    Coronavirus Daily Cases
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
