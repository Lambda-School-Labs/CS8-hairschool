import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

class SignUp extends React.Component {

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