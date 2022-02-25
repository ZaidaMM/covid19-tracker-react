import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <div className='container-fluid main-color text-small'>
          <div className='row'>
            <div className='col-4 offset-2'>
              <ul className='list-unstyled mt-2 '>
                <li>
                  <a href='#' className='text-color'>
                    Home
                  </a>
                </li>
                <li>
                  <a href='#' className='text-color'>
                    Stats
                  </a>
                </li>
                <li>
                  <a href='#' className='text-color'>
                    Countries
                  </a>
                </li>
                <li>
                  <a href='#' className='text-color'>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-6 text-center align-self-center'>
              <span className='text-color mx-2'>Follow us</span>{' '}
              <a href='http://twitter.com/'>
                <i className='fa fa-twitter text-color mx-1 icon'></i>
              </a>
              <a
                href='http://linkedin.com/'
                target='_blank'
                rel='noreferrer noopener'
              >
                <i className='fa fa-linkedin text-color mx-1 icon'></i>
              </a>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <p className='text-color text-center'>Copyright &copy; 2021</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
