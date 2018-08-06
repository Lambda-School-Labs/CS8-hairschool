import React from 'react';
import './AdminSchedule.css';
import AdminNav from '../AdminNav/AdminNav';
import Calendar from 'react-calendar';
import FullCalendar from 'fullcalendar-reactwrapper';
import { Card, CardText, Row, Col, CardHeader, CardFooter, CardBody } from 'reactstrap';

class AdminSchedule extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        events:[
                    {
                        title: 'All Day Event',
                        start: '2018-07-01'
                    },
                    {
                        title: 'Long Event',
                        start: '2018-07-07',
                        end: '2018-07-10'
                    },
                    {
                        id: 999,
                        title: 'Samantha Hair Cut',
                        start: '2018-07-09T16:00:00'
                    },
                    {
                        id: 999,
                        title: 'Ashley Hair Color',
                        start: '2018-07-16T16:00:00'
                    },
                    {
                        title: 'Bianca Prom Hair',
                        start: '2018-07-11',
                        end: '2018-07-13'
                    },
                    {
                        title: 'Meeting',
                        start: '2018-07-12T10:30:00',
                        end: '2018-07-12T12:30:00'
                    },
                    {
                        title: 'Birthday Party',
                        start: '2018-07-13T07:00:00'
                    },
                    {
                        title: 'Click for Google',
                        url: 'http://google.com/',
                        start: '2018-07-28'
                    },
                    {
                        title: 'Cut and Blow',
                        start: '2018-07-12T10:30:00',
                        end: '2018-07-12T12:30:00'
                    }

                ],		
        }
      }

        render () {
        return (
            <div className="AdminSchedule">
                    <Row>
                        <Col sm="3">
                            <AdminNav/>
                        </Col>
                        <Col sm="7">
                            <h1 className="ScheduleHeader">Schedule</h1>
                            <div className="AdminCalendar">
                            <FullCalendar
                                id = "your-custom-ID"
                                header = {{
                                    left: 'prev,next today myCustomButton',
                                    center: 'title',
                                    right: 'month,basicWeek,basicDay,list'
                                }}
                                defaultDate={'2018-07-12'}
                                navLinks= {true} // can click day/week names to navigate views
                                editable= {true}
                                eventLimit= {true} // allow "more" link when too many events
                                events = {this.state.events}	
                            />
                            </div>
                        </Col>
                        <Col sm="2">
                        <div className="AppointmentCards">
                                <Card>
                                    <CardHeader>9:00am</CardHeader>
                                    <CardBody>
                                        <CardText body>Stylist: Ariel <br/> Client: Cindy <br/> Services: Cut and Blow</CardText>
                                    </CardBody>
                                    <CardFooter>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </CardFooter>
                                </Card>
                                <Card>
                                    <CardHeader>10:00am</CardHeader>
                                    <CardBody>
                              
                                        <CardText>Stylist: Ariel <br/> Client: Cindy <br/> Services: Cut and Blow</CardText>
                                    </CardBody>
                                    <CardFooter>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </CardFooter>
                                </Card>
                                <Card>
                                    <CardHeader>12:15pm</CardHeader>
                                    <CardBody>
                               
                                        <CardText body>Stylist: Ariel <br/> Client: Cindy <br/> Services: Cut and Blow</CardText>
                                    </CardBody>
                                    <CardFooter>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </CardFooter>
                                </Card>
                                <Card>
                                    <CardHeader>5:00pm</CardHeader>
                                    <CardBody>
                                        <CardText>Stylist: Ariel <br/> Client: Cindy <br/> Services: Cut and Blow</CardText>
                                    </CardBody>
                                    <CardFooter>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </CardFooter>
                                </Card>
                            </div>
                        </Col>
                    </Row>
            </div>
        )
    }
}

export default AdminSchedule; 

{/*
class AdminSchedule extends React.Component { 

    state = {
        date: new Date(),
      }
    
      onChange = date => this.setState({ date })
    
      render() {
        return (
            <div className="AdminSchedule">
                    <Row>
                        <Col sm="3">
                            <AdminNav/>
                        </Col>
                        <Col sm="7">
                            <h1 className="ScheduleHeader">Schedule</h1>
                            <div className="AdminCalendar">
                            <Calendar
                                onChange={this.onChange}
                                value={this.state.date}
                            />
                            </div>
                        </Col>
                        <Col sm="2">
                        <div className="AppointmentCards">
                                <Card>
                                    <CardHeader>9:00am</CardHeader>
                                    <CardBody>
                                        <CardText body>Stylist: Ariel <br/> Client: Cindy <br/> Services: Cut and Blow</CardText>
                                    </CardBody>
                                    <CardFooter>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </CardFooter>
                                </Card>
                                <Card>
                                    <CardHeader>10:00am</CardHeader>
                                    <CardBody>
                              
                                        <CardText>Stylist: Ariel <br/> Client: Cindy <br/> Services: Cut and Blow</CardText>
                                    </CardBody>
                                    <CardFooter>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </CardFooter>
                                </Card>
                                <Card>
                                    <CardHeader>12:15pm</CardHeader>
                                    <CardBody>
                               
                                        <CardText body>Stylist: Ariel <br/> Client: Cindy <br/> Services: Cut and Blow</CardText>
                                    </CardBody>
                                    <CardFooter>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </CardFooter>
                                </Card>
                                <Card>
                                    <CardHeader>5:00pm</CardHeader>
                                    <CardBody>
                                        <CardText>Stylist: Ariel <br/> Client: Cindy <br/> Services: Cut and Blow</CardText>
                                    </CardBody>
                                    <CardFooter>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </CardFooter>
                                </Card>
                            </div>
                        </Col>
                    </Row>
            </div>
          
        );
      }
    
}

export default AdminSchedule;
*/}