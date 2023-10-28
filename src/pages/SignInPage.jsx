import { useEffect, useState } from "react"
import axios from "axios";
import '../Styles/SignInPage.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const URL = "mongodb:http://127.0.0.1:27017/userSystem"

function SignInPage() {

    const [formValues , setFormValues] = useState({
        name: "anto",
        username: "anto23",
        password: "1234"
    })

    const handleChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        });
    }

    useEffect(() => {
        axios.get(`${URL}/1`).then(response => setFormValues(response.data));
    },[]);


      
    return (
        <>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label name="name">Name</Form.Label>
                <Form.Control type="name" placeholder="Enter your name" value={formValues.name} onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label name="username">Username</Form.Label>
                <Form.Control type="text" name="username" value={formValues.username} onChange={handleChange} placeholder="Enter your username"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label name="password">Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" value={formValues.password} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me"/>
            </Form.Group>
            <div>
                <Button type="button" className="btn btn-primary">Signin</Button>
            </div>
        </Form>
        </>
        
    );
}

export default SignInPage;
