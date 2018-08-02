import React, {Component} from 'react';
import {Button, ButtonGroup, Glyphicon, Panel, Row, Col, Form, FormGroup, FormControl, HelpBlock, ControlLabel} from 'react-bootstrap'


class FeedbackForm extends Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
    
        this.state = {
            
            value:'',

        };

    } 


        getValidationState() {
            const length = this.state.value.length;
            if (length > 3) return 'success';
            else if (length < 0) return 'error';
            return null;
        }
      
        handleChange(e) {
            this.setState({value: e.target.value});
        }
    

    render(){

        return(
            <div className="Formheader">
           
            <Form>
                <Row className="StarGuide"> 
               
                    <div className="StarItem"><Glyphicon glyph="star"/> = Needs Improvement</div>
                    <div className="StarItem"><Glyphicon glyph="star"/><Glyphicon glyph="star"/> = Fair Service</div>
                    <div className="StarItem"><Glyphicon glyph="star"/><Glyphicon glyph="star"/><Glyphicon glyph="star"/> = Great Service</div>
                
                </Row>
                <Row className="FeedbackForm">
                    <Col sm="6">
                        <FormGroup
                            controlId="Consultation"
                            validationState={this.getValidationState()}>
                            <ButtonGroup classname="star-rating">
                                <Button bsSize="large">
                                    <Glyphicon glyph="star"/>
                                </Button>
                                <Button bsSize="large">
                                    <Glyphicon glyph="star"/>
                                </Button>
                                <Button bsSize="large">
                                    <Glyphicon glyph="star"/>
                                 </Button>
                            </ButtonGroup>                   
                            <ControlLabel>Consultation </ControlLabel>
                            <FormControl 
                                        type="text"
                                        value={this.state.value}
                                        placeholder="Notes"
                                        onChange={this.handleChange}
                            /> 
                        </FormGroup>
                        
                        <FormGroup
                            controlId="CustomerService"
                            validationState={this.getValidationState()}>  
                            <ButtonGroup classname="star-rating">
                                <Button bsSize="large">
                                    <Glyphicon glyph="star"/>
                                </Button>
                                <Button bsSize="large">
                                    <Glyphicon glyph="star"/>
                                </Button>
                                <Button bsSize="large">
                                    <Glyphicon glyph="star"/>
                                </Button>
                            </ButtonGroup>                             
                            <ControlLabel>Customer Serivce </ControlLabel>
                            <FormControl 
                                    type="text"
                                    value={this.state.value}
                                    placeholder="Notes"
                                    onChange={this.handleChange}
                            /> 
                        </FormGroup>
    
                        <FormGroup
                            controlId="Time"
                            validationState={this.getValidationState()}> 
                            <ButtonGroup classname="star-rating">
                                <Button bsSize="large">
                                    <Glyphicon glyph="star"/>
                                </Button>
                                <Button bsSize="large">
                                    <Glyphicon glyph="star"/>
                                </Button>
                                <Button bsSize="large">
                                    <Glyphicon glyph="star"/>
                                </Button>
                            </ButtonGroup>
                            <ControlLabel>On Time? </ControlLabel>
                            <FormControl 
                                type="text"
                                value={this.state.value}
                                placeholder="Notes"
                                onChange={this.handleChange}
                            /> 
                        </FormGroup>
                    </Col>
                    <Col sm="6">
                    <FormGroup
                        controlId="Styling"
                        validationState={this.getValidationState()}> 
                        <ButtonGroup classname="star-rating">
                            <Button bsSize="large">
                                <Glyphicon glyph="star"/>
                            </Button>
                            <Button bsSize="large">
                                <Glyphicon glyph="star"/>
                            </Button>
                            <Button bsSize="large">
                                <Glyphicon glyph="star"/>
                            </Button>
                        </ButtonGroup>
                        <ControlLabel>Styling </ControlLabel>
                        <FormControl 
                           type="text"
                           value={this.state.value}
                           placeholder="Notes"
                           onChange={this.handleChange}
                        />
                    </FormGroup> 

                    <FormGroup
                        controlId="Overall"
                        validationState={this.getValidationState()}> 
                        <ButtonGroup classname="star-rating">
                            <Button bsSize="large">
                                 <Glyphicon glyph="star"/>
                            </Button>
                            <Button bsSize="large">
                                <Glyphicon glyph="star"/>
                            </Button>
                            <Button bsSize="large">
                                <Glyphicon glyph="star"/>
                            </Button>
                        </ButtonGroup>
                        <ControlLabel>Overall Score </ControlLabel>
                        <FormControl 
                            type="text"
                            value={this.state.value}
                            placeholder="Notes"
                            onChange={this.handleChange}
                        />
                    </FormGroup> 
                    </Col>

                    <button className="FeedbackButton"> Submit </button>
                    
                
                </Row>
                
            </Form>
            </div>
        )
    }


    }
    
    export default FeedbackForm