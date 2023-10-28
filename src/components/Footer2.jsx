import React from "react";
import '../Styles/Footer2.css';
import {GrFacebookOption} from "react-icons/gr";
import {BiLogoTwitter} from "react-icons/bi";
import logoReed from "../assets/img/logo-reed2.png";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoTiktok } from "react-icons/bi";

const Footer = () => {
    return (
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb_footer-links_div">

                    <h4>
                        <img className="img-logo"
                            src={logoReed}
                            alt=""/>
                        Coming soon</h4>
                </div>
                <div className="sb__footer-links">

                    <div className="sb__footer-links_div">
                        <h4>Products</h4>
                        <a href="/products">
                            <p>T-shits</p>
                        </a>
                        <a href="/products">
                            <p>Hoodies</p>
                        </a>
                        <a href="/products">
                            <p>Accesories</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>About Us</h4>
                        <a href="/aboutus">
                            <p>About Us</p>
                        </a>
                        <a href="/contactUs">
                            <p>Contact Us</p>
                        </a>
                        <a href="/login">
                            <p>Login/Signin</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Contact</h4>
                        <a href="/employer">
                            <p>SSNN</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>RRSS</h4>
                        <div className="socialmedia">
                            <a href="https://www.facebook.com/">
                                <GrFacebookOption/>
                            </a>
                            <a href="https://twitter.com/">
                                <BiLogoTwitter />
                            </a>
                            <a href="https://www.linkedin.com/">
                                <BiLogoLinkedin />
                            </a>
                            <a href="https://www.linkedin.com/">
                                <BiLogoTiktok />
                            </a>
                            
                        </div>

                    </div>

                </div>


                <div className="sb__footer-bellow">
                    <hr/>
                    <div className="sb__footer-copyright">
                        <p>
                            © {
                            new Date().getFullYear()
                        }
                            All right reserved |
                                                                                                                 Nadia Antonella Ruiz - FullStack Final Project.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;
