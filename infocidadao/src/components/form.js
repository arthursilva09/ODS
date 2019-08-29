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
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false,
        };
      }

      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true, name: document.querySelector("#nome").value });
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
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control type="text" placeholder="Nome" id="nome"/>
                                </Form.Group>
                            </Col>
                        
                            <Col md={4}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="justify-content-center">
                            <Col md={8}>
                                <Form.Group controlId="formBasicOpiniao">
                                    <Form.Label>Opinião</Form.Label>
                                    <Form.Control as="textarea" id="txt"/>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>

                    <Button variant="primary" type="submit" id="bot" onClick={this.handleShow}>
                        Enviar
                    </Button>

                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Olá {this.state.name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Recebemos sua opinião, iremos analisar e ver o que podemos fazer para melhorar nosso trabalho, Obrigado!</Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </Container>
            
            </div>
        )
    }
}

export default Forms;