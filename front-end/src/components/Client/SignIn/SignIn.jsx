import React from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

class SignIn extends React.Component {

    render () {

        return (
            <div className="SignIn">

                <div className="SignInTitle">Sign In</div>
                <Form className="SignInForm">
                    <FormGroup>
                        <Label for="Email">Email: </Label>
                        <Input type="text" name="email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Password">Password: </Label>
                        <Input type="text" name="password" />
                    </FormGroup>
                    <Button className="button" color="purple" size="lg"><Link className="link signin" to="/User/Schedule" style={{textDecoration: 'none'}}> Sign In </Link></Button>
                    <div>No account?<Link className="link account" to="/SignUp" style={{textDecoration: 'none'}}> Sign Up Here </Link></div>
                </Form>
            
            </div>
        )
    }

}

export default SignIn;