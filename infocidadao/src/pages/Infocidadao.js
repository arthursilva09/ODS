import React, { Component } from 'react';
import '../App.css'
import Navigation from '../components/navigation';
import Menu from '../components/menu'
import Conteudo1 from '../components/conteudo1';
import Conteudo2 from '../components/conteudo2';
import Rodape from '../components/rodape';

class InfoCidadao extends Component {
  render() {
    return (
      <div className="">
        <Navigation></Navigation>
        <Menu></Menu>
        <Conteudo1></Conteudo1>
        <Conteudo2></Conteudo2>
        <Rodape></Rodape>
      </div>
    );
  }
}

export default InfoCidadao;
