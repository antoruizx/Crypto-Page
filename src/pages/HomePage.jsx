import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Img1 from '../assets/img/img1.jpg';
import Img2 from '../assets/img/img2.jpg';
import Img3 from '../assets/img/img3.jpg';
import Img4 from '../assets/img/img4.jpg';


function HomePage() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img style={{height: '90vh'}}
                    className="d-block w-100"
                    src={Img1} 
                    alt="First slide" 
                    />
                    <Carousel.Caption>
                        <h3>Hodies</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img style={{height: '90vh'}}
                    className="d-block w-100"
                    src={Img2} 
                    alt="Second slide" 
                    />                    
                    <Carousel.Caption>
                        <h3>T-shirts</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img style={{height: '90vh'}}
                    className="d-block w-100"
                    src={Img4} 
                    alt="Third slide" 
                    />                    <Carousel.Caption>
                        <h3>Accesories</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
};


export default HomePage;
