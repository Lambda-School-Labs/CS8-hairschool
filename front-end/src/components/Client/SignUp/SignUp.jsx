import React from 'react';
import './SignUp.css';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

class SignUp extends React.Component {

    render () {

        return (
            <div className="SignUp">
                <Form>
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
                    <Button>Go</Button>
                </Form>
            
            </div>
        )
    }

}

export default SignUp;