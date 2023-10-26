import {useState} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
    const [count, setCount] = useState(0)


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
        <form action="/login" method="POST">
            <label >Username</label>
            <input type="text" name="username" id="username"/>

            <label >Password</label>
            <input type="password" name="password" id="password"/>
            
            <div>
              <a href="/" type="button" className="btn btn-primary">Login</a>
              <a href="/signin" type="button" className="btn btn-success">I'm new!</a>
            </div>
        </form>

        
    )
}

export default Login;
