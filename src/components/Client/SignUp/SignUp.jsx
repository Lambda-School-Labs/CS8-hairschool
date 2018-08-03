import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

class SignUp extends React.Component {

    //holds data as user types it
    constructor (props) {
        super (props);
        this.signup = { email:"", password: "", password:""};
        this.URL = "http://127.0.0.1:8000";
        this.state = {
            showInvalidEmailError: false,
            showInvalidPasswordError: false
        }
    }

    //updates "this.signup" with text as user types it into input fields
    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.signup[name] = value;
    }

    showInvalidEmailError() {
        return <div className="errorMessage"> Sorry! Please enter your email! </div>
    }

    showInvalidPasswordError() {
        return <div className="errorMessage"> Sorry! Please enter a valid password! </div>
    }

    buttonHandler(login, history) {
        let {email, password} = login;
        if (email === "") this.setState({ showNoEmailError: true});
        if (password === "") this.setState({ showNoPasswordError: true});
        axios
            //axios call to the endpoint to login on the server passing in email and password
            .post(`${this.URL}/rest-auth/login`, { email, password })
            .then(res => {
                //if no error take the token recieved and set it in localstorage to retrieve later
                localStorage.setItem("auth_token", res.data.key);
                //push the next page to user once successful and the token has been recieved and stored in localStorage
                history.push("")            
                })
            .catch(err => {
                console.log(err)
            })
        }

    render () {

        return (
            <div className="SignUp">

                <div className="container">
                    <div className="SignUpTitle">Sign Up</div>
                    
                    <Form className="SignUpForm">
                        <FormGroup>
                            <Label for="Email">Email: </Label>
                            <Input type="text" name="email" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Password">Password: </Label>
                            <Input type="text" name="password" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="ConfirmPassword">Confrim Password: </Label>
                            <Input type="text" name="password" />
                        </FormGroup>
                        <Button className="button" color="purple" size="lg"><Link className="link signin" to="/SignIn" style={{textDecoration: 'none'}}> Sign Up </Link></Button>
                        <div>Have an account?<Link className="link account" to="/SignIn" style={{textDecoration: 'none'}}> Sign In Here </Link></div>
                   </Form>
                </div>
            
            </div>
        )
    }

}

export default SignUp;