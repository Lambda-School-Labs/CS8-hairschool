import React from 'react';
import './ClientFeedback';
import ClientNav from '../ClientNav/ClientNav';

class ClientFeedback extends React.Component {

    render () {
        return (
            <div className="ClientFeedback">
                <ClientNav />
                <div className="AppointmentInfo"></div>
                <div className="FeedbackForm"></div>
                <div className="SubmitButton"></div>
            </div>
        )
    }
}

export default ClientFeedback;