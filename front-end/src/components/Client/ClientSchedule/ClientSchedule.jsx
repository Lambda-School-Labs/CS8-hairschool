import React from 'react';
import './ClientSchedule.css';
import ClientNav from '../ClientNav/ClientNav';
import DatePicker from 'react-date-picker';
import {Button, ButtonGroup, Row, Col, Clearfix, Dropdown, DropdownButton, ButtonToolbar, MenuItem} from 'react-bootstrap';
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
               <div className="Title"> Schedule with Lambda Hair School</div>
               <div className="Container0">
               <Row className="Services">
                    <div Col xs={12} md={8}>
                        <ul>
                            <ul><Button div className= "Button" bsSize="large">Hair $20</Button></ul>
                            <ul><Button div className="Button" bsSize="large">Cut & Color $30</Button></ul>
                            <ul><Button div className= "Button" bsSize="large">Extensions $40</Button></ul>
                            <ul><Button div className= "Button" bsSize="large">Color $20</Button></ul>
                            <ul><Button div className= "Button" bsSize="large">Barbering $20</Button></ul>
                        </ul>
                    </div>
               </Row>
               
               <Row className="Stylists"> 
               <Col xs={6} md={4}>
               <Dropboxx/>
               </Col>
               </Row>

             

               <Calendar/>
               </div> 
               Calendar HERE WITH TIMES 
               
               
            </div>
        )
    }
}





export default ClientSchedule;