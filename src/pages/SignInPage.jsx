import { useEffect, useState } from "react"
import axios from "axios";
import '../Styles/SignInPage.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const URL = "mongodb:http://127.0.0.1:27017/userSystem"

function SignInPage() {
    const getUser = async () => {
        const users = await axios.get("http://127.0.0.1:8000/users")
        console.log(users.data);
    }

    const login = async (form) => {
        const user = {
            username: form.username,
            password: form.password
        }
        const login = await axios.post("http://127.0.0.1:8000/login", user)
        console.log(login);
    } 
    getUser();
      
    return (
        <>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label name="name">Name</Form.Label>
                <Form.Control type="name" placeholder="Enter your name"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label name="username">Username</Form.Label>
                <Form.Control type="text" name="username"  placeholder="Enter your username"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label name="password">Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me"/>
            </Form.Group>
            <div>
            <a href="/signin" type="button" className="btn btn-success">Signin</a>
            </div>
        </Form>
        </>
        
    );
}

export default SignInPage;
