import React, {Component} from 'react';
import FormDrop1 from './Formdrop1';
import FormDrop2 from './Formdrop2';
import axios from 'axios';
import Checkbox2 from './Checkbox2';
import {Button, ButtonGroup, Glyphicon, Row, Col, Form, FormGroup, FormControl, ButtonToolbar, ToggleButtonGroup, ToggleButton, ControlLabel} from 'react-bootstrap'


class FeedbackForm extends Component {
    constructor(props) {
        super (props);
        this.state = {
            stylist:"",
            service:"",

            consultationRating:"",
            consultationFeedback:"",
            customerServiceRating:"",
            customerServiceFeedback:"",
            timeRating:"",
            timeFeedback:"",
            stylingRating:"",
            stylingFeedback:"",
            overallRating:"",
            overallFeedback:""
        }

        this.addFeedbackCard = this.addFeedbackCard.bind(this);
        this.updateStylist = this.updateStylist.bind(this);
        this.updateService = this.updateService.bind(this);
        this.updateConsultationRating = this.updateConsultationRating.bind(this);
        this.updateConsultationFeedback = this.updateConsultationFeedback.bind(this);
        this.updateCustomerServiceRating = this.updateCustomerServiceRating.bind(this);
        this.updateCustomerServiceFeedback = this.updateCustomerServiceFeedback.bind(this);
        this.updateTimeRating = this.updateTimeRating.bind(this);
        this.updateTimeFeedback = this.updateTimeFeedback.bind(this);
        this.updateStylingRating = this.updateStylingRating.bind(this);
        this.updateStylingFeedback = this.updateStylingFeedback.bind(this);
        this.updateOverallRating = this.updateOverallRating.bind(this);
        this.updateOverallFeedback = this.updateOverallFeedback.bind(this);
    };

    addFeedbackCard = (event) => {
        event.preventDefault();
        //add code to create the feedback card using the api
        axios
            .post('http://localhost:3000/Admin/Feedback', this.state)
    

        this.setState({
            stylist:"",
            service:"",
            
            consultationRating:"",
            consultationFeedback:"",
            customerServiceRating:"",
            customerServiceFeedback:"",
            timeRating:"",
            timeFeedback:"",
            stylingRating:"",
            stylingFeedback:"",
            overallRating:"",
            overallFeedback:""            
        });
    };


    updateStylist(data) {
        this.setState({
            stylist: data
        });
    }

    updateService(event) {
        this.setState({
            service: event.target.value
        })
    }

    //Consultation rating & feedback
    updateConsultationRating(event) {
        this.setState({
            consultationRating: event.target.value
        })
    }
    updateConsultationFeedback(event) {
        this.setState({
            consultationFeedback: event.target.value
        })
    }
    //Customer Service rating & feedback
    updateCustomerServiceRating(event) {
        this.setState({
            customerServiceRating: event.target.value
        })
    }
    updateCustomerServiceFeedback(event) {
        this.setState({
            customerServiceFeedback: event.target.value
        })
    }
    //Time rating & feedback
    updateTimeRating(event) {
        this.setState({
            timeRating: event.target.value
        })
    }
    updateTimeFeedback(event) {
        this.setState({
            timeFeedback: event.target.value
        })
    }
    //Styling rating & feedback
    updateStylingRating(event) {
        this.setState({
            stylingRating: event.target.value
        })
    }
    updateStylingFeedback(event) {
        this.setState({
            stylingFeedback: event.target.value
        })
    }
    //Overall rating & feedback
    updateOverallRating(event) {
        this.setState({
            overallRating: event.target.value
        })
    }
    updateOverallFeedback(event) {
        this.setState({
            overallFeedback: event.target.value
        })
    }
    
    

    render(){

        return(
            <div className="Formheader">
           
            <Form>
                <div className="AppointmentInfo"> 
                    <Row>
                        <Col sm="6">
                            <FormDrop1 
                                updateStylistCallback={this.updateStylist.bind(this)}
                            />
                        </Col>
                        <Col sm="6">
                            <FormDrop2
                                updateServiceCallback={this.updateService.bind(this)}    
                             />
                        </Col>
                    </Row>
                </div>
                               
                <Row className="StarGuide">     
                    <div className="StarItem"><Glyphicon glyph="star"/> = Needs Improvement</div>
                    <div className="StarItem"><Glyphicon glyph="star"/><Glyphicon glyph="star"/> = Fair Service</div>
                    <div className="StarItem"><Glyphicon glyph="star"/><Glyphicon glyph="star"/><Glyphicon glyph="star"/> = Great Service</div>
                </Row>

                <Row className="FeedbackForm">
                    <Col sm="6">
                            <Checkbox2>
                                <Glyphicon className="needsImprovement" glyph="star"/>
                            </Checkbox2>
                            <Checkbox2 >
                                <Glyphicon className="fairService" glyph="star"/>
                            </Checkbox2>
                            <Checkbox2 >
                                <Glyphicon className="greatService" glyph="star"/>
                            </Checkbox2>                                         
                            <ControlLabel> Consultation </ControlLabel>
                            <FormControl 
                                type="text"
                                onChange={this.updateConsultationFeedback}
                                value={this.state.consultationFeedback}
                                placeholder="Consultation Feedback"          
                            /> 
                        
                        <FormGroup className="CustomerService">
                            <Checkbox2>
                                <Glyphicon className="needsImprovement" glyph="star"/>
                            </Checkbox2>
                            <Checkbox2 >
                                <Glyphicon className="fairService" glyph="star"/>
                            </Checkbox2>
                            <Checkbox2 >
                                <Glyphicon className="greatService" glyph="star"/>
                            </Checkbox2>                               
                            <ControlLabel>Customer Serivce</ControlLabel>
                            <FormControl 
                                    type="text"
                                    onChange={this.updateCustomerServiceFeedback}
                                    value={this.state.customerServiceFeedback}
                                    placeholder="Customer Service Feedback"                                   
                            /> 
                        </FormGroup>
                    
                        <FormGroup className="Time">
                            <Checkbox2>
                                <Glyphicon className="needsImprovement" glyph="star"/>
                            </Checkbox2>
                            <Checkbox2 >
                                <Glyphicon className="fairService" glyph="star"/>
                            </Checkbox2>
                            <Checkbox2 >
                                <Glyphicon className="greatService" glyph="star"/>
                            </Checkbox2>
                            <ControlLabel>On Time?</ControlLabel>
                            <FormControl 
                                type="text"
                                onChange={this.updateTimeFeedback}
                                value={this.state.timeFeedback}
                                placeholder=" Time Feedback"                               
                            /> 
                        </FormGroup>
                        </Col>
                        <Col sm="6">
                        <FormGroup className="Styling"> 
                            <Checkbox2>
                                <Glyphicon className="needsImprovement" glyph="star"/>
                            </Checkbox2>
                            <Checkbox2 >
                                <Glyphicon className="fairService" glyph="star"/>
                            </Checkbox2>
                            <Checkbox2 >
                                <Glyphicon className="greatService" glyph="star"/>
                            </Checkbox2>  
                            <ControlLabel>Styling </ControlLabel>
                            <FormControl 
                               type="text"
                               onChange={this.updateStylingFeedback}
                               value={this.state.stylingFeedback}
                               placeholder="Styling Feedback"                          
                            />
                        </FormGroup> 
                   
                        <FormGroup className="OverallScore">
                            <Checkbox2>
                                <Glyphicon className="needsImprovement" glyph="star"/>
                            </Checkbox2>
                            <Checkbox2 >
                                <Glyphicon className="fairService" glyph="star"/>
                            </Checkbox2>
                            <Checkbox2 >
                                <Glyphicon className="greatService" glyph="star"/>
                            </Checkbox2> 
                            <ControlLabel>Overall Score </ControlLabel>
                            <FormControl 
                                type="text"
                                onChange={this.updateOverallFeedback}
                                value={this.state.overallFeedback}
                                placeholder="Overall Feedback"                               
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