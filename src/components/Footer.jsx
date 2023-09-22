import logoFacebook from "../assets/img/facebook.png";
import logoInstagram from "../assets/img/instagram.png";
import logoTwitter from "../assets/img/twitter.png";
import logoLinkedin from "../assets/img/linkedin.png";

export default function Footer() {
    return (
        <footer className="page-footer font-small pt-4 footer">
            <div className="container-fluid text-center text-md-left pt-5 mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase">Contact Information</h5>
                        <p>+54 9 381 555555</p>
                        <p>info@cryptoexchange.com</p>
                        <p>Crisostomo Alvarez 700, San Miguel de Tucumán.</p>
                    </div>
                    <div className="col-md-3 mb-md-0 mb-3 footer-links">
                        <a href="#!">
                            <img src={logoFacebook}
                                alt="facebook-logo"/>
                        </a>
                        <a href="#!">
                            <img src={logoInstagram}
                                alt="instagram-logo"/>
                        </a>
                        <a href="#!">
                            <img src={logoTwitter}
                                alt="twitter-logo"/>
                        </a>
                        <a href="#!">
                            <img src={logoLinkedin}
                                alt="linkedin-logo"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3">
                © 2023 Copyright
                <a href="">cryptoexchange.com</a>
            </div>
        </footer>

    );
};


/* 
const Footer = () => {
    return(
        <>
        </>
    );
};  
*/
