<<<<<<< HEAD
import React from "react";
import axios from "axios";
import "./SignIn.css";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

class SignIn extends React.Component {
	// constructor to hold data as user types it
	constructor(props) {
		super(props);
        this.login = { username: "", password: "" };
        this.URL = "http://127.0.0.1:8000"; // change this to the heroku link later on
	}

	// method to update this.login with text as user types it into Input fields
	handleInputChange = event => {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.login[name] = value;
	};

    // methodto handle what happens when  the user clicks on the submit button 
	buttonHandler(login, history) {
        let {username, password} = login;
        axios
            // an axios call to the endpoint to login on the server, passing in the email and pasword
			.post(`${this.URL}/rest-auth/login/`, { username, password })
			.then(res => {
                // take the token recieved and set it in localstorage to retrieve later
                localStorage.setItem("auth_token", res.data.key);
                // push the next page to the user after everything is done
				history.push("/User/Schedule");
			})
			.catch(err => {
                // code out the error handling later on
				console.log(err);
			});
	}

	render() {
		return (
			<div className="SignIn">
				<div className="SignInTitle">Sign In</div>

				<Form className="SignInForm">

					<FormGroup>
						<Label for="Email">Username: </Label>
						<Input type="text" name="username" onChange={this.handleInputChange} />
					</FormGroup>

					<FormGroup>
						<Label for="Password">Password: </Label>
						<Input
							type="text"
							name="password"
							onChange={this.handleInputChange}
						/>
					</FormGroup>

					<Button onClick={() => this.buttonHandler(this.login, this.props.history)} type="button">
						Sign In
					</Button>

					<div>
						No account?<Link
							className="link account"
							to="/SignUp"
							style={{ textDecoration: "none" }}
						>
							{" "}
							Sign Up Here{" "}
						</Link>
					</div>
				</Form>
			</div>
		);
	}
}

export default SignIn;
=======
import React from 'react';
import axios from 'axios';
import './SignIn.css';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

class SignIn extends React.Component {

    //holds data as user types it
    constructor (props) {
        super (props);
        this.login = { email:"", password: ""};
        this.URL = "http://127.0.0.1:8000";
        this.state = {
            showNoEmailError: false,
            showNoPasswordError: false
        }
    }

    //updates "this.login" with text as user types it into input fields
    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.login[name] = value;
    }

    //error messages
    showNoEmailError() {
        return <div className="errorMessage"> Sorry! Please enter your email! </div>
    }

    showNoPasswordError() {
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
            <div className="SignIn">

                <div className="SignInTitle">Sign In</div>

                <Form className="SignInForm">
                    <FormGroup>
                        <Label for="Email">Email: </Label>
                        <Input type="text" name="email" onChange={this.handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Password">Password: </Label>
                        <Input type="text" name="password" onChange={this.handleInputChange}/>
                    </FormGroup>
                    {this.state.showNoEmailError ? this.showNoEmailError() : false}
                    {this.state.showNoPasswordError ? this.showNoPasswordError() : false}
                    <Button onClick={() => this.buttonHandler(this.login, this.props.history)} type="button" className="button" color="purple" size="lg"> Sign In </Button>
                    <div>No account?<Link className="link account" to="/SignUp" style={{textDecoration: 'none'}}> Sign Up Here </Link></div>
                </Form>
            
            </div>
        )
    }

}

export default SignIn;
>>>>>>> frontend
