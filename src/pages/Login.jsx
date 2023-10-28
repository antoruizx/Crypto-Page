import {useState, useEffect} from 'react';
import axios from 'axios';
import "../Styles/Login.css";
import {BsFillArrowUpRightSquareFill} from "react-icons/bs";


function Login() {
    const [formValues, setFormValues] = useState({username: [], password: []})

    const handleChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        });
    }

    useEffect(() => {
        axios.get("http://mongodb://127.0.0.1:27017/userSystem/users").then(response => setFormValues(response.data));
    }, []);

    const getUser = async () => {
        const users = await axios.get("http://mongodb://127.0.0.1:27017/userSystem/users")
        console.log(users.data);
    }

    const login = async (form) => {
        const user = {
            username: form.username,
            password: form.password
        }
        const login = await axios.post("http://mongodb://127.0.0.1:27017/userSystem/users", user)
        console.log(login);
    } 
    getUser();

    return (
        <form>
            <label>Username</label>
            <input type="text" value={
                    formValues.username
                }
                onChange={handleChange}
                name="username"
                id="username"/>

            <label>Password</label>
            <input value={
                    formValues.password
                }
                onChange={handleChange}
                type="password"
                name="password"
                id="password"/>

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
