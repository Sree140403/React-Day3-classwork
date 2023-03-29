import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
export class Daythree extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "French Door Cafe",
      }
    }
    styles = {
        fontStyle: 'Italic',
        color: ('#6495ed'),
        fontSize: '28px',
      };
      
render() {
    return (
      <div>
        <h1 style={this.styles}>{this.state.message}</h1>
        <h6> “ Slow down and enjoy your Coffee.”</h6>
        <div className='Cafe'><Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Menu</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Cofee">Cofee</Nav.Link>
            <Nav.Link href="#Tea">Tea</Nav.Link>
            <Nav.Link href="#Pastries">Pastries</Nav.Link>
            <Nav.Link href="#Cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
      </div>
    )
}
}
export default Daythree;