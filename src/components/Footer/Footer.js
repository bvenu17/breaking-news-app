import React from 'react';
import {
  Navbar,
  NavbarBrand,
  } from 'reactstrap';

export default class Footer extends React.Component {
 
  render() {
    return (
      <div>
        <Navbar style={{backgroundColor:'#212121', textAlign:'center', justifyContent:'center', fontStyle:'italic'}} dark expand="md">
          <NavbarBrand href="/">powered by NewsAPI.org ©</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}