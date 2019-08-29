import React, { Component } from 'react';
import '../App.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

/* IMAGENS */
import email from '../img/email.png';
import facebook from '../img/facebook.png';
import instagram from '../img/instagram.png';

class Rodape extends Component {
    render() {
        return(
            <footer className="rodapez">
                <Row className="justify-content-center" variant="dark">
                    <Col md={3}>
                        <div>
                            <ul className="lista" >
                                <li className="item subli"><h4>Informações pessoais:</h4></li>
                                <li className="item">Arthur Gustavo</li>
                                <li className="item">17 anos</li>
                                <li className="item">Técnico em Informática</li>
                                <li className="item">Cursando Ciência da Computação</li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div>
                            <ul className="lista">
                                <li className="item"><h5>Contatos:</h5></li>
                                <li className="item"><Image className="imagemRodape" src={email} roundedCircle/> arthurgust69@gmail.com</li>
                                <li className="item"><Image className="imagemRodape" src={instagram} roundedCircle/> @arthuurr___</li>
                                <li className="item"><Image className="imagemRodape" src={facebook} roundedCircle/> Arthur Rodrigues</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </footer>
        )
    }
}

export default Rodape;