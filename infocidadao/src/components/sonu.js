import React, { Component } from 'react';
import '../App.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

/* IMAGENS */
import sobreonu from '../img/sobreonu.png'
import criacao from '../img/criacao.jpg'
import proposito from '../img/propositos.jpg'
import sede from '../img/sede.png'


class SobreOnu extends Component{
    constructor(){
        super();
        this.aumenta = this.aumenta.bind(this);
    }

    aumenta = (id) =>{
        var x = document.getElementById(id);
        x.style.width = '100px';
    }

    render(){
        return(
            <Container>
                
                <h1 id="abc">ONU ou Organização das Nações Unidas</h1>
                <Row className="justify-content-md-center">
                    <Col md={4}> <Image className="imagem" src={sobreonu} roundedCircle onClick={this.aumenta('imagem1')} id="imagem1"/> </Col>
                    <Col md={5}>
                        <h3> Sobre a ONU </h3>
                        <p>
                            A ONU é uma organização internacional formada por países que se reuniram voluntariamente para trabalhar pela paz e o desenvolvimento mundiais.
                        </p>
                    </Col>
                </Row>

                <Row className="justify-content-md-center">                   
                    <Col md={5}>
                        <h3> Criação </h3>
                        <p>
                            Depois da II Guerra Mundial, que devastou dezenas de países e tomou a 
                            vida de milhões de seres humanos, existia a necessidade encontrar uma 
                            forma de manter a paz entre os países.
                        </p>
                    </Col>
                    <Col md={4}> <Image className="imagem" src={criacao} roundedCircle /> </Col>
                </Row>

                <Row className="justify-content-md-center">
                    <Col md={4}> <Image className="imagem" src={proposito} roundedCircle /> </Col>                  
                    <Col md={5}>
                        <h3> Principais Propósitos </h3>
                        <ul>
                            <li>
                                Manter a paz e a segurança internacionais;
                            </li>

                            <li>
                                Desenvolver relações amistosas entre as nações;
                            </li>

                            <li>
                                Ser um centro destinado a harmonizar a ação dos povos para a consecução desses objetivos comuns.
                            </li>
                        </ul>
                    </Col>
                </Row>

                <Row className="justify-content-md-center">                   
                    <Col md={5}>
                        <h3> Sede </h3>
                        <p>
                            A sede da Onu se localiza em Nova Iorque, nos Estados Unidos.
                            Criada em 1948, teve participação de diversos arquitetos, inculusive <a href="https://pt.wikipedia.org/wiki/Oscar_Niemeyer" target="_blank">Oscar Niemeyer</a>.
                        </p>
                    </Col>
                    <Col md={4}> <Image className="imagem" src={sede} roundedCircle /> </Col>
                </Row>

            </Container>
        )
    }
}

export default SobreOnu;