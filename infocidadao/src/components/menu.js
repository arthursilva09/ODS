import React, { Component } from 'react';
/* BOOTRSTRAP */
import Carrossel from  'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'

/* IMAGE */
import onus from '../img/onu.jpg'
import objetivos from './../img/objetivos.png'
import sede from './../img/sede2.jpg'

class Menu extends Component {
    render(){
    return(
        <div className="container">
            <Carrossel className="carrozeu">
                <Carrossel.Item>
                    <Image src={onus} className="d-block w-100 image"/>
                    <Carrossel.Caption>
                        <h3>ORGANIZAÇÃO DAS NAÇÕES UNIDAS</h3>
                        <p>Todos os 193 países do mundo são associados</p>
                    </Carrossel.Caption>
                </Carrossel.Item>

                <Carrossel.Item>
                    <Image className="d-block w-100 image" src={sede}/>
                </Carrossel.Item>

                <Carrossel.Item>
                    <Image className="d-block w-100 image" src={objetivos}/>
                </Carrossel.Item>
            </Carrossel>
        </div>
    )
    }
}

export default Menu;