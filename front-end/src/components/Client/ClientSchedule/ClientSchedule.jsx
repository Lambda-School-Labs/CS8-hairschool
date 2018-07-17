import React from 'react';
import './ClientSchedule.css';
import ClientNav from '../ClientNav/ClientNav';

class ClientSchedule extends React.Component {

    render () {
        return (
            <div className="ClientSchedule">
               <ClientNav/>
               <div className="Title"> Schedule with Lambda Hair School</div>
               <div className="Services">Service Cards Here</div>
               <div className="Stylists"> Drop down Stylist List Here</div>
               <div className="Calender"> Calender and Times here</div> 
            </div>
        )
    }
}

export default ClientSchedule;