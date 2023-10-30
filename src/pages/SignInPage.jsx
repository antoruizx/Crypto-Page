import { useState } from "react"
import axios from "axios";
import '../Styles/SignInPage.css';
import Form from 'react-bootstrap/Form';

function SignInPage() {

    const [datos, setDatos] = useState({
        username: "",
        password: "",
    });

    const handleInputChange = (e) => {
        let { key, value } = e.target;
        let newDatos = {...datos, [key]: value};
        setDatos(newDatos);
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(!e.target.checkValidity()){
            console.log("no enviar");
        }else {
            let res = await axios.post("http://localhost:8000/users", datos);
            console.log("¡Registro existoso! Bienvenidx");
        }
    };
      
    return (
        <>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label key="username" onChange={handleInputChange} value={datos.username}>Username</Form.Label>
                <Form.Control type="text" name="username"  placeholder="Enter your username"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label key="password" onChange={handleInputChange} value={datos.password}>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me"/>
            </Form.Group>
            <div>
            <button
                    type="submit"
                    className="btn btn-success">Signin</button>
            </div>
        </Form>
        </>
        
    );
}

export default SignInPage;
