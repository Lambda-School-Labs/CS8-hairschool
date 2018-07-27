import React from 'react';
import './SignIn.css';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

class SignIn extends React.Component {

    render () {

        return (
            <div className="SignIn">
                <Form>
                    <FormGroup>
                        <Label for="Email">Email: </Label>
                        <Input type="text" name="email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Password">Password: </Label>
                        <Input type="text" name="password" />
                    </FormGroup>
                    <Button>Go</Button>
                </Form>
            
            </div>
        )
    }

}

export default SignIn;