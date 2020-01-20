import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head'
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';

import Link from '../components/Link';

function Header({title}) {
  return [
    <Head key="head">
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
    </Head>,
    <div key="nav" bg="light" expand="lg">
      <div>
        <div>
          {/*<Navbar.Brand href="/">Orders App</Navbar.Brand>*/}
        </div>
      </div>
    </div>
  ]
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;