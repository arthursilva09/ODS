import React, { Component } from 'react';
import '../App.css'
import Navigation from '../components/navigation';
import Menu from '../components/menu'
import Rodape from '../components/rodape';
import SobreOnu from '../components/sonu';

class Onu extends Component {
  render() {
    return (
      <div className="">
        <Navigation></Navigation>
        <Menu></Menu>
        <SobreOnu></SobreOnu>
        <Rodape></Rodape>
      </div>
    );
  }
}

export default Onu;
