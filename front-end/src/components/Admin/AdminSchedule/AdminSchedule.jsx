import React from 'react';
import './AdminSchedule.css';
import AdminNav from '../AdminNav/AdminNav';
import Calendar from 'react-calendar';
import { Card, CardText, Row, Col, CardHeader, CardFooter, CardBody } from 'reactstrap';

class AdminSchedule extends React.Component {

    render () {
        return (
            <div className="AdminSchedule">
                        <AdminNav/>
                        <h1 className="ScheduleHeader">Schedule</h1>
                        <div className="AdminCalender">
                            <Calendar />
                        </div>
                        <div className="AppointmentCards">
                        <Row>
                            <Col sm="2">
                                <Card>
                                    <CardHeader>9:00am</CardHeader>
                                    <CardBody>
                                        <CardText body>Stylist: Ariel <br/> Client: Cindy <br/> Services: Cut and Blow</CardText>
                                    </CardBody>
                                    <CardFooter>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col sm="2">
                                <Card>
                                    <CardHeader>10:00am</CardHeader>
                                    <CardBody>
                              
                                        <CardText>Stylist: Ariel <br/> Client: Cindy <br/> Services: Cut and Blow</CardText>
                                    </CardBody>
                                    <CardFooter>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col sm="2">
                                <Card>
                                    <CardHeader>12:15pm</CardHeader>
                                    <CardBody>
                               
                                        <CardText body>Stylist: Ariel <br/> Client: Cindy <br/> Services: Cut and Blow</CardText>
                                    </CardBody>
                                    <CardFooter>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col sm="2">
                                <Card>
                                    <CardHeader>5:00pm</CardHeader>
                                    <CardBody>
                                
                                        <CardText>Stylist: Ariel <br/> Client: Cindy <br/> Services: Cut and Blow</CardText>
                                    </CardBody>
                                    <CardFooter>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </CardFooter>
                                </Card>
                            </Col>
                            </Row>
                        </div>
            </div>
        )
    }
}

export default AdminSchedule;