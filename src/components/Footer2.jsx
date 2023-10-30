import React from "react";
import { Link } from "react-router-dom";
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
                    <Link to={"/#"}>
                    <img className="img-logo"
                            src={logoReed}
                            alt=""/>
                        </Link>
                    Coming soon
                    </h4>
                </div>
                <div className="sb__footer-links">

                    <div className="sb__footer-links_div">
                        <h4>Products</h4>
                        <Link to={"/products"}>
                            <p>T-shits</p>
                        </Link>
                        <Link to={"/products"}>
                            <p>Hoodies</p>
                        </Link>
                        <Link to={"/products"}>
                            <p>Accesories</p>
                        </Link>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>About Us</h4>
                        <Link to={"/aboutus"}>
                            <p>About Us</p>
                        </Link>
                        <Link to={"/contactUs"}>
                            <p>Contact Us</p>
                        </Link>
                        <Link to={"/login"}>
                            <p>Login/Signin</p>
                        </Link>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Contact</h4>
                        <Link to={"/employer"}>
                            <p>SSNN</p>
                        </Link>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>RRSS</h4>
                        <div className="socialmedia">
                            <Link to={"https://www.facebook.com/"}>
                                <GrFacebookOption/>
                            </Link>
                            <Link to={"https://twitter.com/"}>
                                <BiLogoTwitter />
                            </Link>
                            <Link to={"https://www.linkedin.com/"}>
                                <BiLogoLinkedin />
                            </Link>
                            <Link to={"https://www.linkedin.com/"}>
                                <BiLogoTiktok />
                            </Link>
                            
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
