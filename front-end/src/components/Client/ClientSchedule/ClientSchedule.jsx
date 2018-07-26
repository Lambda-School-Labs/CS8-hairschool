import React from 'react';
import './ClientSchedule.css';
import ClientNav from '../ClientNav/ClientNav';

import {Button,Row, Col, Jumbotron, PanelTitle} from 'react-bootstrap';
import './ClientSchedule.css';
import Dropboxx from './Dropbox'; 
import Calendar from './Calendar';



// require('react-datetime');

// const buttStyles = {maxWidth: 400, margin: '0 auto 10px'};

class ClientSchedule extends React.Component {

    render () {
        return (
            
            <div className="ClientSchedule">
                <ClientNav/>
               <div className="Title">
             Schedule with Lambda School 
            </div>
               <div className="Container0">
               
                <div className="Services">

                    <Row Col md={4} sm={6}>
                        
                        <ul>
                        
                            <ul><Button div className= "Button" bsSize="large">Hair $20</Button></ul>
                            <ul><Button div className="Button" bsSize="large">Cut & Color $30</Button></ul>
                            <ul><Button div className= "Button" bsSize="large">Extensions $40</Button></ul>
                            <ul><Button div className= "Button" bsSize="large">Color $20</Button></ul>
                            <ul><Button div className= "Button" bsSize="large">Barbering $20</Button></ul>
                        </ul>
                        
                    
               
            
            <Col md={4} sm={6}> 
                <div className="Dropboxx"> 
                    <Dropboxx/>
               </div>
               </Col>
               
            <Col md={4} sm={6}>
                <div classname="Calendar">
                    <Calendar/>
                </div>
                </Col>
                </Row>
             </div>   
            
               </div>
               
            </div>
        )
    }
}





export default ClientSchedule;