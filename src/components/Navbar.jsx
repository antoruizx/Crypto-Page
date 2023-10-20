import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Reed</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link className="nav-link" to={""} >Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to={"/coins"} >Products</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to={"/aboutUs"} >About us</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to={"/contact"} >Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
