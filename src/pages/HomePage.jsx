import React from "react";
import Carousel from "react-bootstrap/Carousel";
import '../Styles/HomePage.css';
import Img1 from '../assets/img/img1.jpg';
import Img2 from '../assets/img/img2.jpg';
import Img4 from '../assets/img/img4.jpg';
import { Col, Container, Row, Card } from "react-bootstrap";
import Card1 from '../assets/img/card1.jpg';
import Card2 from '../assets/img/card2.jpg';
import Card3 from '../assets/img/card3.jpg';


const HomePage = () => {
    return (
        <Container fluid>
            <Row className="justify-content-center align-items-center">
                <Col lg={8}>
                    <Carousel>
                        <Carousel.Item interval={2000}>
                            <img className="d-block w-100"
                                src={Img1}
                                alt="First slide"/>
                            <Carousel.Caption>
                                <h3>Hoodies</h3>
                                <p className="d-none d-sm-block">
                                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img className="d-block w-100"
                                src={Img2}
                                alt="Second slide"/>

                            <Carousel.Caption>
                                <h3>T-shirts</h3>
                                <p className="d-none d-sm-block">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img className="d-block w-100"
                                src={Img4}
                                alt="Third slide"/>

                            <Carousel.Caption>
                                <h3>Accesories</h3>
                                <p className="d-none d-sm-block">
                                    Praesent commodo cursus magna, vel scelerisque nisl
                                                        consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <div className="text-center">
                <h2 className="display-5 mt-3">Unisex style</h2>
                <p className="lead text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <hr/>
            <h1 className="text-center">Trends
                <span className="badge bg-secondary">New</span>
            </h1>
            <Row xs={1}
                md={3}
                className="g-4">
                {
                Array.from({length: 3}).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src={Card1}/>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
  
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            } </Row>
            <hr />
            <h1 className="text-center">The most sold</h1>
            <Row xs={1}
                md={3}
                className="g-4">
                {
                Array.from({length: 3}).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src={Card2}/>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            } </Row>
            <hr />
            <h1 className="text-center">Hot sale</h1>
            <Row xs={1}
                md={3}
                className="g-4">
                {
                Array.from({length: 3}).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src={Card3}/>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            } </Row>
            <hr />


        </Container>

    );
};


export default HomePage;
