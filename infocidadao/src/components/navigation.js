import React, { Component } from 'react';
import '../App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

class Navigation extends Component {
  render(){
    return (
      <div className="">
          <Navbar bg="dark" className="justify-content-end">
            <Nav className="justify-content-end item">
              <Nav.Item>
                <Nav.Link> <Link to="/"> <span className="item"> Início </span> </Link> </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link> <Link to="/onu"> <span className="item"> ONU </span> </Link> </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link> <Link to="/objetivos"><span className="item"> Objetivos </span> </Link> </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link> <Link to="/opiniao"> <span className="item"> Opinião </span> </Link> </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar>
        </div>
      )
    }
  }

export default Navigation;
