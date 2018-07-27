import React from 'react';
import './SignIn.css';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

class SignIn extends React.Component {

    render () {

        return (
            <div className="SignIn">
                <Form>
                    <FormGroup>
                        <Label for="Email"></Label>
                        <Input></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="Password"></Label>
                        <Input></Input>
                    </FormGroup>
                    <Button>Go</Button>
                </Form>
            
            </div>
        )
    }

}