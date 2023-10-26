import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import foto from '../assets/img/business-women.jpg';


const Grid = () => {
  return (
    <Container>
      <Row>
        <Col><img src={foto} alt="" /></Col>
      </Row>
    </Container>
  )
}

export default Grid;