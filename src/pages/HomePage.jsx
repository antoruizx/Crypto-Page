import React from "react";
import Carousel from "react-bootstrap/Carousel";
import '../Styles/HomePage.css';
import Img1 from '../assets/img/img1.jpg';
import Img2 from '../assets/img/img2.jpg';
import Img4 from '../assets/img/img4.jpg';
import {Col, Container, Row} from "react-bootstrap";


const HomePage = () => {
    return (
      <Container fluid>
        <Row className="justify-content-center align-items-center">
          <Col lg={8}>
            <Carousel>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src={Img1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Hoodies</h3>
                  <p className="d-none d-sm-block">
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src={Img2}
                  alt="Second slide"
                />
  
                <Carousel.Caption>
                  <h3>T-shirts</h3>
                  <p className="d-none d-sm-block">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src={Img4}
                  alt="Third slide"
                />
  
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
          <p className="lead text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
      </Container>
    );
  };


export default HomePage;
