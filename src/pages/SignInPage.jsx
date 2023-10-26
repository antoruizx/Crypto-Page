import '../Styles/SignInPage.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function SignInPage() {

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter your name"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Enter your username"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me"/>
            </Form.Group>
            <div>
                <a href="/" type="button" className="btn btn-primary">Signin</a>
            </div>
        </Form>
    );
}

export default SignInPage;
