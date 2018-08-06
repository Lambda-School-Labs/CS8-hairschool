import React from 'react';
import './ClientFeedback.css';
import ClientNav from '../ClientNav/ClientNav';
import FeedbackForm from './Formbody';
import FeedbackDrop from './Formhead';
import {Panel, Button} from 'react-bootstrap';


class ClientFeedback extends React.Component {

    render () {
        return (
            <div className="ClientFeedback">
                <ClientNav />

                <div className="AppointmentInfo"> 
                    <FeedbackDrop/>
                </div>

                <div className="FeedbackForm">
                    <Panel className="FeedbackFormat">
                        <Panel.Body>
                            <FeedbackForm/>
                         </Panel.Body>
                    </Panel>
                </div>

                <div className="SubmitButton"></div>
                <Button size="lg" color="primary"> Submit </Button>
            </div>
        )
    }
}

export default ClientFeedback;