import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function ProductListing() {
  return (
    <div className='productPage'>
      <Container>
        <Row>
            <Col className='col-12 bg-info'>1</Col>
            <Col className='col-0 d-none d-lg-block col-lg-2 bg-danger'>2</Col>
            <Col className='col-12 col-lg-10 bg-warning'>3</Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProductListing
