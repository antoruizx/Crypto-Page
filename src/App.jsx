import '../Styles/App.css';
import axios from "axios";
import bcryptjs from "bcryptjs";


function App() {
  const [count, setCount] = useState(0)

  const getUser = async () => {
    const users = await axios.get("http://127.0.0.1:8000/users")
    console.log(users.data);
  }
  const encrypt = (password) => {
    const salt = bcryptjs.genSaltSync(10);
    return bcryptjs.hashSync(password, salt);
  }
  console.log(encrypt("hola"));
  const login = async () => {
    const user = {
      username: "user1",
      password: "user1"
    }
    const login = await axios.post("http://127.0.0.1:8000/login", user)
    console.log(login);
  }
  getUser();
  return (
    <form>
        <label>User</label>
        <input type="text" name="" id="" />
        <label htmlFor="">Password</label>
        <input type="password" />
        <button type="button" class="btn btn-success">Success</button>

    </form>
  );
}

export default App;