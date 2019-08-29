import React, { Component } from 'react';
import '../App.css';

/* BOOTSTRAP */
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'

class Forms extends Component {

    constructor(props, context) {
        super(props, context);
    
        this.handleClose = this.handleClose.bind(this);

        this.soma = this.soma.bind(this);
        this.sub = this.sub.bind(this);
        this.multi = this.multi.bind(this);
        this.div = this.div.bind(this);

    
        this.state = {
          show: false,
          res: 0,
          
        };
    }

    handleClose() {
    this.setState({ show: false });
    }

    soma() {
        var n1 = parseFloat(document.getElementById("n1").value, 10);
        var n2 = parseFloat(document.getElementById("n2").value, 10)
        this.setState({ show: true, res: n1+n2 });
    }

    sub(){
        var n1 = parseFloat(document.getElementById("n1").value, 10);
        var n2 = parseFloat(document.getElementById("n2").value, 10);

        this.setState({ show: true, res: n1-n2 });
    }

    multi(){
        var n1 = parseFloat(document.getElementById("n1").value, 10);
        var n2 = parseFloat(document.getElementById("n2").value, 10);

        this.setState({ show: true, res: n1*n2 });
    }

    div(){
        var n1 = parseFloat(document.getElementById("n1").value, 10);
        var n2 = parseFloat(document.getElementById("n2").value, 10);

        this.setState({ show: true, res: n1/n2})
    }


    render() {
        return( 
            <div className="">
                <Container>
                    <h1 id="aaa" >Sua Opinião</h1>

                    <Form>
                        <Row className="justify-content-center">
                            <Col md={4}>
                                <Form.Group controlId="formBasicName">
                                    <Form.Label>Número 1</Form.Label>
                                    <Form.Control type="text" placeholder="Nome" id="n1"/>
                                </Form.Group>
                            </Col>
                        
                            <Col md={4}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Número 2</Form.Label>
                                    <Form.Control type="text" placeholder="Email" id="n2" />
                                </Form.Group>
                            </Col>
                        </Row>

                    </Form>

                    <Button variant="primary" type="submit" id="bot" onClick={this.soma}>
                        +
                    </Button>

                    <Button variant="success" type="submit" id="bot" onClick={this.sub}>
                        -
                    </Button>
                    
                    <Button variant="info" type="submit" id="bot" onClick={this.multi}>
                        *
                    </Button>

                    <Button variant="warning" type="submit" id="bot" onClick={this.div}>
                        /
                    </Button>

                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>O resultado é {this.state.res}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body></Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <Row className="justify-content-center">
                        <select id="sele">
                            <option value="eu">Euro</option>
                            <option value="dl">Dólar</option>
                            <option value="le">Líbras Esterlinas</option>
                        </select>
                    </Row>

                    <Row className="justify-content-center">
                        <Col md={4}>
                            <h2 id="valor"></h2>
                        </Col>
                    </Row>

                    <Row className="justify-content-center">
                        <Col md={4}>
                            <Form.Control type="text" value={this.state.selecao} width="10%" placeholder={this.state.selecao}/>
                        </Col>
                    </Row>

                    <Row className="justify-content-center">
                        <Col md={4}>
                            <h3 id="result">Resultado: </h3>
                        </Col>
                    </Row>

                </Container>
            
            </div>
        )
    }
}

export default Forms;