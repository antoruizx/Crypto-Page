import React from "react";
import '../Styles/Footer2.css';
import fb from '../assets/img/fb.png';
import twitter from '../assets/img/tw.png';
import linkedin from '../assets/img/linkedin.png';


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
                        <a href="/remeras">
                            <p>Remeras</p>
                        </a>
                        <a href="/buzos">
                            <p>Buzos</p>
                        </a>
                        <a href="/Accesorios">
                            <p>Accesorios</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>About Us</h4>
                        <a href="/quienessomos">
                            <p>¿Quienes somos?r</p>
                        </a>
                        <a href="/ubicacion">
                            <p>Ubicación</p>
                        </a>
                        <a href="/testimonios">
                            <p>Testimonios</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Contact</h4>
                        <a href="/employer">
                            <p>RRSS</p>
                        </a>
                    </div>

                </div>


                <div className="sb__footer-bellow">
                    <hr/>
                    <div className="sb__footer-copyright">
                        <p>
                            ©{
                            new Date().getFullYear()
                        }
                            Nadia Antonella Ruiz - Proyecto Final FullStack. All right reserved.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;
