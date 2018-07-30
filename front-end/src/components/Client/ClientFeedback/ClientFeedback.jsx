import React from 'react';
import './ClientFeedback.css';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import ClientNav from '../ClientNav/ClientNav';
import FeedbackForm from './Formbody';
import FeedbackDrop from './Formhead';
import {Panel, Button} from 'react-bootstrap';


class ClientFeedback extends React.Component {

    render () {
        return (
            <div className="ClientFeedback">
                <nav className="App-header">
                        <Link className="link signup" to="/SignUp" style={{textDecoration: 'none'}}> Sign Up </Link>
                        <Link className="link signin" to="/SignIn" style={{textDecoration: 'none'}}> Sign In </Link>
                        <Link className="link DAsignin" to="/Admin/Schedule" style={{textDecoration: 'none'}}> Demo Admin </Link>
                </nav>
                <Row className="Container">
                    <Col sm="2">
                        <ClientNav />
                    </Col>
                    <Col sm="9" className="FeedbackContainer">
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
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ClientFeedback;