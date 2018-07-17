import React from 'react';
import './Settings.css';
import ClientNav from '../ClientNav/ClientNav';
import { Button, Form, FormGroup, FormFeedback, Label, Input, FormText } from 'reactstrap';

class Settings extends React.Component {
    
    render() {
        return (
            <div className="Settings">
                <ClientNav/>
                <Form>

                    <FormGroup className="FormLeft">

                        <FormGroup>
                            <Label for="email">Email: </Label>
                            <Input type="text" name="email" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Phone: </Label>
                            <Input type="text" name="phone" />
                        </FormGroup>
                        <FormGroup className="form-check">
                            <FormGroup className="EmailCheck">
                                <Input type="checkbox" value="" id="defaultCheck1"/>
                                <Label>Emails?</Label>
                            </FormGroup>
                            <FormGroup className="TextCheck">
                                <Input type="checkbox" value="" id="defaultCheck1"/>
                                <Label>Texts?</Label>
                            </FormGroup>
                        </FormGroup>
                        <FormGroup>
                            <Label>Old Password: </Label>
                            <Input type="text" name="phone" />
                        </FormGroup>
                        <FormGroup>
                            <Label>New Password: </Label>
                            <Input type="text" name="phone" />
                        </FormGroup>
                        <Button>Save</Button>

                    </FormGroup>

                    <FormGroup className="FormRight">

                        <FormGroup>
                            <Label for="selectingStylists">Stylists: </Label>
                            <Input type="select" name="stylists" > 
                                <option> Stylist 1</option>
                                <option> Stylist 2</option>
                                <option> Stylist 3</option>
                                <option> Stylist 4</option>
                                <option> Stylist 5</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="selectingStylists">Add Services: </Label>
                            <Input type="select" name="stylists" > 
                                <option> Service 1</option>
                                <option> Service 2</option>
                                <option> Service 3</option>
                                <option> Service 4</option>
                                <option> Service 5</option>
                            </Input>
                        </FormGroup>

                    </FormGroup>
                    

                </Form>
            </div>
        
        )
    }
}

export default Settings;