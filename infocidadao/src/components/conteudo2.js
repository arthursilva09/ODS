import React, { Component } from 'react';
import '../App.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron'

/* IMAGENS */
import social from './../img/social.png'
import ambiental from './../img/ambiental.png'
import economico from './../img/economico.png'
import institucional from './../img/institucional.png'


class Conteudo2 extends Component{
    render(){
    return(
        <Container>
            <Jumbotron>
                <h2>Os ODS preveem ações mundiais, divididas em quatro grandes áreas, sendo elas:</h2>
            </Jumbotron>

            {/* SOCIAL */}
            <Row className="justify-content-md-center">
                <Col md={4}> <Image className="imagem" src={social} roundedCircle /> </Col>
                <Col md={5}>
                    <h3> Social </h3>
                    <p>
                    Diz respeito às necessidades dos seres humanos desde saúde à educação. Essa questão entra para tentar suprir a falta de tais aspectos, já que a saúde em certos países é precária e a educação deixa a desejar.
                    </p>
                </Col>
            </Row>

            {/* AMBIENTAL */}
            <Row className="justify-content-md-center">
                <Col md={5} className="ConteudoTexto">
                    <h3> Ambiental </h3>
                    <p>
                        Trata de ações para ajudar o meio ambiente, diminuindo o desmatamento, aumentando a proteção das florestas e a proteção da biodiversidade até a adoção de medidas efetivas contra mudanças climáticas.
                    </p>
                </Col>
                <Col md={4} className="ConteudoImagem"> <Image className="imagem" src={ambiental} roundedCircle /> </Col>
            </Row>

            {/* ECONÔMICO */}
            <Row className="justify-content-md-center">
                <Col md={4}> <Image className="imagem"src={economico} roundedCircle /> </Col>
                <Col md={5}>
                    <h3> Econômico </h3>
                    <p>
                        Os resultados da diminuição de desmatamento, afeta o setor econômico também, onde diminui os gastos para desmatar e os recursos naturais.
                    </p>
                </Col>
            </Row>

            {/* INSTITUCIONAL */}
            <Row className="justify-content-md-center">
                <Col md={5}>
                    <h3> Institucional </h3>
                    <p>
                        É sobre colocar em prática cada um dos objetivos.
                    </p>
                </Col>
                <Col md={4}> <Image className="imagem" src={institucional} roundedCircle /> </Col>
            </Row>

        </Container>
    )
    }
}


export default Conteudo2;