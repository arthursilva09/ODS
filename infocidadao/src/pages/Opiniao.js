import React, { Component } from 'react';
import '../App.css'
import Navigation from '../components/navigation';
import Menu from '../components/menu'
import Rodape from '../components/rodape';
import Forms from '../components/form';

class Opiniao extends Component {
  render() {
    return (
      <div className="">
        <Navigation></Navigation>
        <Menu></Menu>
        <Forms></Forms>
        <Rodape></Rodape>
      </div>
    );
  }
}

export default Opiniao;