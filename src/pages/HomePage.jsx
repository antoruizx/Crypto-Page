import React from "react";
import Carousel from "react-bootstrap/Carousel";
import '../Styles/HomePage.css';
import Img1 from '../assets/img/img1.jpg';
import Img2 from '../assets/img/img2.jpg';
import Img4 from '../assets/img/img4.jpg';
import {Col, Container, Row, Card} from "react-bootstrap";
import Card1 from '../assets/img/card1.jpg';
import Gallery from "../components/Gallery";


const HomePage = () => {

    return (
        <>
            <Container fluid>
                <Row className="row-card justify-content-center align-items-center">
                    <Col lg={16}>
                        <Carousel>
                            <Carousel.Item interval={2000}>
                                <img className="d-block w-100"
                                    src={Img1}
                                    alt="First slide"/>
                                <Carousel.Caption>
                                    <h3>Hoodies</h3>
                                    <p className="d-none d-sm-block color-text">
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
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>

                <section className=" text-center">
                    <h2 className="display-5 mt-3">Unisex style</h2>
                    <p className="row-card lead text-muted">Being able to make unique designs come true to give you style and why not, CREATE YOUR OWN EMPIRE!
                    </p>
                    <Gallery />

                </section>
                <hr/>

                <section>
                    <h1 className="text-center">Ventas minoristas y mayoristas
                    </h1>
                    <Row xs={1}
                        md={3}
                        className="g-4 row-card">
                        {
                        Array.from({length: 3}).map((dataClients, idx) => (
                            <Col key={idx}>
                                <Card>
                                    <Card.Img variant="top"
                                        src={Card1}/>
                                    <Card.Body>
                                        <Card.Title>Business</Card.Title>
                                        <Card.Text>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Persplaceat labore, corporis, laboriosam aperiam ratione error illo!</p>
                                        </Card.Text>
                                        <a className="btn btn-success" href="https://api.whatsapp.com/send/?phone=3814988682&text&type=phone_number&app_absent=0" type="button" >See details</a>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    } </Row>
                </section>

                <hr/>

            </Container>
        </>


    );
};


export default HomePage;
