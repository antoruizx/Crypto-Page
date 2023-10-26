import { useState } from 'react';
import axios from 'axios';

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
    <form>
        <label>Username</label>
        <input type="text" name="" id="" />
        <label htmlFor="">Password</label>
        <input type="password" />
        <button type="button" className="btn btn-success">Login</button>
    </form>
  )
}

export default Login;