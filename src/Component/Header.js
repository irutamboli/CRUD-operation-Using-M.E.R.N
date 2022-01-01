import React from 'react'
import {Navbar,Container,Nav} from "react-bootstrap"


function Header() {
    return (
        <div>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
  <Container style={{textAlign:"center"}} >
    <Navbar.Brand  ><h1>COLLEGE DATABASE</h1></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div>
    )
}

export default Header
