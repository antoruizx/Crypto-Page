import React from 'react'
import Img1 from '../assets/img/img1.jpg';
import Img2 from '../assets/img/img2.jpg';
import Img4 from '../assets/img/img4.jpg';
import {Col, Container, Row, Card, Button } from "react-bootstrap";
import Card1 from '../assets/img/card1.jpg';
import "../Styles/Products.css";


export default function Products() {
        return (
        <div>
          <hr />
            <h1 className="text-center">Catálogo
            </h1>
            <hr />
            <Row xs={1}
                md={3}
                className="g-4">
                {
                Array.from({length: 9}).map((dataClients, idx) => (
                    <Col key={idx}>
                        <Card >
                            <Card.Img variant="top"
                                src={Card1}/>
                            <Card.Body>
                                <Card.Title>Empresa</Card.Title>
                                <Card.Text>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Persplaceat labore, corporis, laboriosam aperiam ratione error illo!</p>
                                </Card.Text>
                                <Button variant="dark">Comprar</Button>

                            </Card.Body>
                        </Card>
                    </Col>
                ))} 
            </Row>
    </div>
    )
};
