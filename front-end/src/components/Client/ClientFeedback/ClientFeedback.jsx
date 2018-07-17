import React from 'react';
import './ClientFeedback';
import ClientNav from '../ClientNav/ClientNav';

class ClientFeedback extends React.Component {

    render () {
        return (
            <div className="ClientFeedback">
                <ClientNav />
                <div className="AppointmentInfo"> 
                Appointment Info Here: Stylist Dropdown, Service Dropdown, Date Dropdown, Time Dropdown
                </div>
                <div className="FeedbackForm">
                Feedback Form Here: Consultation, On time, Styling, Customer Service, Overall score
                </div>
                <div className="SubmitButton"></div>
            </div>
        )
    }
}

export default ClientFeedback;