import React from 'react';
import './ClientSchedule.css';
import ClientNav from '../ClientNav/ClientNav';

import {Button,Row, Col, Grid, Jumbotron, PanelTitle} from 'react-bootstrap';
import './ClientSchedule.css';
import Dropboxx from './Dropbox'; 
import Calendar from './Calendar';



// require('react-datetime');

// const buttStyles = {maxWidth: 400, margin: '0 auto 10px'};

class ClientSchedule extends React.Component {

    render () {
        return (
        
            <div className="ClientSchedule">
            <Grid>
                
                        <div className="Title">Schedule with Lambda School 
                            </div>
            
                            <div className="Container0">

                            <Row>
                                <Col sm={3} >
                                    <ClientNav/>
                                </Col>
                            
               
                                    <div className="Services">
                                    
                                        <Col md={0}>
                                            <ul className="Buttons">

                                                <ul><Button div className= "Button" bsSize="large">Hair $20</Button></ul>
                                                <ul><Button div className="Button" bsSize="large">Cut & Color $30</Button></ul>
                                                <ul><Button div className= "Button" bsSize="large">Extensions $40</Button></ul>
                                                <ul><Button div className= "Button" bsSize="large">Color $20</Button></ul>
                                                <ul><Button div className= "Button" bsSize="large">Barbering $20</Button></ul>
                                            </ul>
                                         </Col>
                                        <Col > 
                                                <div className="Dropboxx"> 
                                                    <Dropboxx/>
                                                </div>
                                        </Col>
                                        <Col >
                                                <div classname="Calendar">
                                                        <Calendar/>
                                                </div>
                                        </Col>
                                    
                                    </div>   
                                </Row>
                            </div>
                  </Grid>
            </div>
        
            
        )
    }
}





export default ClientSchedule;