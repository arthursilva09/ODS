import React, { Component } from 'react';
import '../App.css'
import Navigation from '../components/navigation';
import Menu from '../components/menu'
import Rodape from '../components/rodape';
import Obj from '../components/objectives';

class Objetivos extends Component {
  render() {
    return (
      <div className="">
        <Navigation></Navigation>
        <Menu></Menu>
        <Obj></Obj>
        <Rodape></Rodape>
      </div>
    );
  }
}

export default Objetivos;
