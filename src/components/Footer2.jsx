import React from "react";
import '../Styles/Footer2.css';
import fb from '../assets/img/fb.png';
import twitter from '../assets/img/tw.png';
import linkedin from '../assets/img/linkedin.png';
import logoReed from '../assets/img/logo-reed.png';


const Footer = () => {
    return (
        <div className="footer">
            <div className="sb__footer section__padding"> 
            <div className="sb_footer-links_div">
                        <h4>Coming soon</h4>
                        <div className="socialmedia">
                            <p><img src={fb}
                                    alt="logofb"/></p>
                            <p><img src={twitter}
                                    alt="logotw"/></p>
                            <p><img src={linkedin}
                                    alt="logolk"/></p>
                        </div>
                    </div>
                <div className="sb__footer-links">
                    
                    <div className="sb__footer-links_div">
                        <h4>Products</h4>
                        <a href="/t-shirts">
                            <p>T-shits</p>
                        </a>
                        <a href="/hoodies">
                            <p>Hoodies</p>
                        </a>
                        <a href="/accesories">
                            <p>Accesories</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>About Us</h4>
                        <a href="/aboutus">
                            <p>About Us</p>
                        </a>
                        <a href="/ubication">
                            <p>Ubication</p>
                        </a>
                        <a href="/testimonios">
                            <p>Testimonials</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Contact</h4>
                        <a href="/employer">
                            <p>SSNN</p>
                        </a>
                    </div>

                </div>


                <div className="sb__footer-bellow">
                    <hr/>
                    <div className="sb__footer-copyright">
                        <p>
                            © {
                            new Date().getFullYear()
                        } All right reserved |
                             Nadia Antonella Ruiz - FullStack Final Project.
                        </p>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;
