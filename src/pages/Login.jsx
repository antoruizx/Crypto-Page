import { Link } from 'react-router-dom';
import axios from 'axios';
import "../Styles/Login.css";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import { useState } from 'react';

function Login() {
    const [datos, setDatos] = useState({
        username: "",
        password: ""
    });

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        let newDatos = {...datos, [name]: value};
        setDatos(newDatos);
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(!e.target.checkValidity()){
            console.log("no enviar");
        }else {
            let res = await axios.post("http://localhost:8000/login", datos);
            console.log("¡Ingreso exitoso!");
        }
    };
   
    return (
        <form onSubmit={handleSubmit}>
            <label >Username</label>
            <input type="text" name="username" id="username" onChange={handleInputChange} value={datos.username} />

            <label >Password</label>
            <input type="password" name="password" id="password" onChange={handleInputChange} value={datos.password}/>
            
            <div>
            <button
                    type="submit"
                    className="btn btn-success">Login</button>
                <hr/>
                    <Link className="register" to={"/signin"} >I'm new!<BsFillArrowUpRightSquareFill /></Link>
            </div>
        </form>

        
    )
}

export default Login;
