import {useState, useEffect} from 'react';
import axios from 'axios';
import "../Styles/Login.css";
import {BsFillArrowUpRightSquareFill} from "react-icons/bs";


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
            <button onClick={login}
                    type="button"
                    className="btn btn-success">Login</button>
                <hr/>
                <a href="/signin" className="register">I'm new!<BsFillArrowUpRightSquareFill/></a>
            </div>
        </form>

        
    )
}

export default Login;
