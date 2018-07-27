import React from 'react';
import './ClientSchedule.css';
import ClientNav from '../ClientNav/ClientNav';
import { Row, Col,} from 'reactstrap';

class ClientSchedule extends React.Component {

    render () {
        return (
            <div className="ClientSchedule">
                <Row>
                    <Col sm="3">
                        <ClientNav/>
                    </Col>
                    <Col sm="3">
                        <div className="Title"> Schedule with Lambda Hair School</div>                   
                        <div className="Services">Service Cards Here</div>
                        <div className="Stylists"> Drop down Stylist List Here</div>
                        <div className="Calender"> Calender and Times here</div> 
                    </Col>
               </Row>
            </div>
        )
    }
}

export default ClientSchedule;