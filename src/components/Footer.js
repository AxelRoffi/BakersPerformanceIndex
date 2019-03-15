import React from 'react'
import { Card, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>

      <Card.Header >we track bakers rewards delivery</Card.Header>
      <Card bg='primary' className="text-center">
        <Container>
          <Card.Body>
            <Nav className="row">
              <Nav.Link style={{ color: 'white' }} className="col-4" href="/about-us">ABOUT US</Nav.Link>
              <Nav.Link style={{ color: 'white' }} className="col-4" href="/contact">CONTACT</Nav.Link>
              <Nav.Link style={{ color: 'white' }} className="col-3" href="/baking-service">BAKING SERVICE? OUR OFFER</Nav.Link>
            </Nav>
          </Card.Body>
        </Container>
      </Card>
      <Card.Footer className="text-muted">
        <Card.Text className='text-center'> If you want to support our work and dedication to the Tezos community please make a donation to: tz1WG2nPzCwXMdiWtZGZUsGiNTcDvV5mM9Td
        </Card.Text>
        <Card.Text> All rights reserved © 2019 <Link to='/'>bakersperformanceindex.com</Link></Card.Text>
      </Card.Footer>


    </div >
  )
}

export default Footer;


// <Card.body bg="primary" className="text-center">
//   <Container >
//     <Nav className="row">
//       <Nav.Link style={{ color: 'white' }} className="col-4">ABOUT US</Nav.Link>
//       <Nav.Link style={{ color: 'white' }} className="col-3" href="/contact">CONTACT</Nav.Link>
//       <Nav.Link style={{ color: 'white' }} className="col" href="/our-offer">BAKING SERVICE? OUR OFFER</Nav.Link>
//     </Nav>
//   </Container>
// </Card.body>
//   <Card.footer className="text-light">
//     <Card.Text className='text-center'> If you want to support our work and dedication to the Tezos community please make a donation: tz1WG2nPzCwXMdiWtZGZUsGiNTcDvV5mM9Td</Card.Text>
//     all rights reserved © 2019 <Link to='/'>bakersperformanceindex.com</Link>
//   </Card.footer>
