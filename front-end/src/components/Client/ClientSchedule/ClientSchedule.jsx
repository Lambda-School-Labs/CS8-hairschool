import React from 'react';
import './ClientSchedule.css';
import ClientNav from '../ClientNav/ClientNav';
import DatePicker from 'react-date-picker';
import {Button} from 'reactstrap';

require('react-datetime');


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
            </div>
        )
    }
}





export default ClientSchedule;