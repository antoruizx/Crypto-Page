import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import logo from "../assets/img/logo-reed.png";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid navbar-brand">
                <Link href="/" className="navbar-brand"><img src={logo} alt=""/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to={""} >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/products"} >Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/aboutUs"} >About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/contactUs"} >Contact Us</Link>
                        </li>
                        <li className="nav-item boton">
                            <Link className="nav-link" to={"/login"} >Login/Signin</Link>
                        </li>
                    </ul>               
                </div>
            </div>
        </nav>
    );
};
