import React from 'react';
import './ClientSchedule.css';
import ClientNav from '../ClientNav/ClientNav';

class ClientSchedule extends React.Component {

    render () {
        return (
            <div className="ClientSchedule">
               <ClientNav/>
               <div className="Title"> Schedule with Lambda Hair School</div>
               <div className="Services"></div>
               <div className="Stylists"></div>
               <div className="Calender"></div> 
            </div>
        )
    }
}

export default ClientSchedule;