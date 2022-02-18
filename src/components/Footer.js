import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className='container-fluid main-color'>
        <div class='row py-4'>
          <div className='col-4 offset-1'>
            <ul className='list-unstyled mt-2 '>
              <li>
                <a href='#' className='text-color'>
                  Home
                </a>
              </li>
              <li>
                <a href='#' className='text-color'>
                  Data
                </a>
              </li>
              <li>
                <a href='#' className='text-color'>
                  About
                </a>
              </li>
              <li>
                <a href='#' className='text-color'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className='col-6 text-center'>
            <a href='http://instagram.com/'>
              <i className='fas fa-instagram'></i>
            </a>
            <a href='http://twitter.com/'>
              <i className='fa fa-twitter'></i>
            </a>
            <a href='http://instagram.com/'>
              <i className='fa fa-instagram'></i>
            </a>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <p className='text-color text-center text-small'>
              Copyright &copy; 2021
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
