import React from 'react';
import './ClientFeedback';
import ClientNav from '../ClientNav/ClientNav';
import { Row, Col,} from 'reactstrap';

class ClientFeedback extends React.Component {

    render () {
        return (
            <div className="ClientFeedback">
                <Row>
                    <Col sm="3">
                        <ClientNav />
                    </Col>
                    <Col sm="9">
                        <div className="AppointmentInfo"> 
                        Appointment Info Here: Stylist Dropdown, Service Dropdown, Date Dropdown, Time Dropdown
                        </div>
                        <div className="FeedbackForm">
                        Feedback Form Here: Consultation, On time, Styling, Customer Service, Overall score
                        </div>
                        <div className="SubmitButton"></div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ClientFeedback;