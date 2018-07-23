import React from 'react';
import './AdminFeedback.css';
import AdminNav from '../AdminNav/AdminNav';
import { Card, CardTitle, CardText, Row, Col, CardHeader, CardFooter, CardBody } from 'reactstrap';

class AdminFeedback extends React.Component {

    render () {
        return (
            <div className="AdminFeedback">
             <Row>
                <Col sm="3">
                    <AdminNav/>
                </Col>
                <Col sm="9">

                    <div className="Cards">
                     <Row>
                         <Col sm="3">
                            <Card>
                                <CardHeader>Stylist: Ariel</CardHeader>
                                <CardBody>
                                    <CardTitle>Great Service</CardTitle>
                                    <CardText body>This is the feedback this stylist got back from the customer</CardText>
                                </CardBody>
                                <CardFooter>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </CardFooter>
                            </Card>
                         </Col>
                         <Col sm="3">
                            <Card>
                                <CardHeader>Stylist: Bianca</CardHeader>
                                <CardBody>
                                    <CardTitle>Bianca was Awesome</CardTitle>
                                    <CardText>This is the feedback this stylist got back from the customer</CardText>
                                </CardBody>
                                <CardFooter>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </CardFooter>
                            </Card>
                         </Col>
                         <Col sm="3">
                            <Card>
                                <CardHeader>Stylist: Ariel</CardHeader>
                                <CardBody>
                                    <CardTitle>Great Service</CardTitle>
                                    <CardText body>This is the feedback this stylist got back from the customer</CardText>
                                </CardBody>
                                <CardFooter>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </CardFooter>
                            </Card>
                         </Col>
                         <Col sm="3">
                            <Card>
                                <CardHeader>Stylist: Bianca</CardHeader>
                                <CardBody>
                                    <CardTitle>Bianca was Awesome</CardTitle>
                                    <CardText>This is the feedback this stylist got back from the customer</CardText>
                                </CardBody>
                                <CardFooter>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </CardFooter>
                            </Card>
                         </Col>
                     </Row>
                    </div> {/* Cards */}

                </Col>                    
             </Row>
            </div>
        )
    }
}

export default AdminFeedback;