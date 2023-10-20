import React from "react";
import '../Styles/Footer2.css';
import fb from '../assets/img/fb.png';
import twitter from '../assets/img/tw.png';
import linkedin from '../assets/img/linkedin.png';


const Footer = () => {
    return(
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>For Business</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <a href="/healthplan">
                            <p>Health Plan</p>
                        </a>
                        <a href="/induvidual">
                            <p>Individual</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Resources</h4>
                        <a href="/resource">
                            <p>Resource center</p>
                        </a>
                        <a href="/resource">
                            <p>Testimonial</p>
                        </a>
                        <a href="/resource">
                            <p>STV</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Partners</h4>
                        <a href="/employer">
                            <p>Swing Tech</p>
                        </a>
                    </div>

                    <div className="sb_footer-links-div">
                        <h4>Coming soon</h4>
                        <div className="socialmedia">
                            <p><img src={fb} alt="logofb" /></p>
                            <p><img src={twitter} alt="logotw" /></p>
                            <p><img src={linkedin} alt="logolk" /></p>
                        </div>
                    </div>
                </div>
            <hr />

            <div className="sb__footer-bellow">
                <div className="sb__footer-copyright">
                    <p>
                    ©{new Date().getFullYear()} Nadia Antonella Ruiz - Proyecto Final FullStack. All right reserved.
                    </p>
                </div>
                <div className="sb__footer-below_links">
                    <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                    <a href="/privacy"><div><p>Privacy</p></div></a>
                    <a href="/security"><div><p>Security</p></div></a>
                    <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
                </div>
            </div>

            </div>
        </div>
    )
}

export default Footer;
