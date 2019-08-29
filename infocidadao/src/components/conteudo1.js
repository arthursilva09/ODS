import React, { Component } from 'react';
import '../App.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import ods from './../img/ods.png' 

class Conteudo1 extends Component {
    render(){
    return(
        <Container>
            <h1 id="abc">Sobre</h1>
            <Row className="justify-content-md-center">
                <Col md={4}> <Image className="imagem" src={ods} roundedCircle /> </Col>
                <Col md={5}>
                    <h3> Sobre a ODS </h3>
                    <p>
                    A ODS ou Objetivos de Desenvolvimento Sustentável, é uma agenda composta por 17 objetivos e 169 metas. Veremos cada um desses objetivos e como afetam a sociedade.
                    </p>
                </Col>
            </Row>
        </Container>
    )
    }
}

export default Conteudo1;