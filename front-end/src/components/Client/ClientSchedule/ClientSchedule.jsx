import React from 'react';
import './ClientSchedule.css';
import ClientNav from '../ClientNav/ClientNav';
import DatePicker from 'react-date-picker';
import {Button} from 'reactstrap';

require('react-datetime');


import {Button,Row, Col, Grid, Jumbotron, PanelTitle} from 'react-bootstrap';
import './ClientSchedule.css';
import Dropboxx from './Dropbox'; 
import Calendar from './Calendar';



// require('react-datetime');

// const buttStyles = {maxWidth: 400, margin: '0 auto 10px'};

class ClientSchedule extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date (),
            
        }
       
    
    }

    onChange = date => this.setState({date})
    
   
    render () {
        return (
        
            <div className="ClientSchedule">
<<<<<<< HEAD
            
                <Row>
                
                    <Col sm={3}  >
                        <ClientNav/>
                    </Col>
                    
                <Col sm={9}>
                
                    <div className="Title">Schedule with Lambda School </div>
                 
                    <div className="Services">

                            <Row>
                                <Col sm={4}>
                                            <ul className="Buttons">

                                                <li><Button div className= "Button" bsSize="large">Hair $20</Button></li>
                                                <li><Button div className="Button" bsSize="large">Cut & Color $30</Button></li>
                                                <li><Button div className= "Button" bsSize="large">Extensions $40</Button></li>
                                                <li><Button div className= "Button" bsSize="large">Color $20</Button></li>
                                                <li><Button div className= "Button" bsSize="large">Barbering $20</Button></li>
                                            </ul>
                                        </Col>
                                         
                                        <Col sm={4}>
                                                <div className="Dropboxx"> 
                                                    <Dropboxx/>
                                                </div>
                                        </Col>
                                        <Col sm={4}>
                                                <div classname="Calendar">
                                                        <Calendar/>
                                                </div>
                                        </Col>
                                    </Row>
                                </div> 
                </Col> 
                                </Row>
                           
                  
=======
               <ClientNav/>
               <div className="Title"> Schedule with Lambda Hair School</div>
               <div className="Container0">
               <div className="Services">
               <ul><button>Hair $20</button></ul>
               <Button color="success" size="large"> Cut & Color </Button>
               <ul><Button color="success" size="large"> Extenstions $40 </Button></ul>
               <ul><Button> Color $20 </Button></ul>
               <ul><Button> Barbering </Button></ul>
               </div>
               <div className="Stylists"> Drop down Stylist List Here</div>
               <div className="Calender"> <DatePicker
               onChange={this.onChange}
               value={this.state.date}
               />
               </div> 
               Calendar HERE WITH TIMES 
               </div>
>>>>>>> master
            </div>
        
            
        )
    }
}





export default ClientSchedule;