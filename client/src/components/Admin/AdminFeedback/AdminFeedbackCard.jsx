import React from 'react';
import { Card, CardTitle, CardText, Row, Col, CardHeader, CardFooter, CardBody } from 'reactstrap';

const AdminFeedbackCard = (props) => {

    return (
        <Card>
            <CardHeader>Stylist:{props.stylist}</CardHeader>
            <CardBody>
                <CardTitle>Services:{props.services}</CardTitle>
                <CardText>Consultation Rating:{props.consultaionRating}</CardText>
                <CardText>Consultation Feedback:{props.consultaitionFeedback}</CardText>
                <CardText>Customer Service Rating:{props.customerServiceRating}</CardText>
                <CardText>Customer Service Feedback:{props.customerServiceFeedback}</CardText>
                <CardText>Time Rating:{props.timeRating}</CardText>
                <CardText>Time Feedback:{props.timeFeedback}</CardText>
                <CardText>Styling Rating:{props.stylingRating}</CardText>
                <CardText>Styling Feedback:{props.stylingFeedback}</CardText>
                <CardText>Overall Rating:{props.overallRating}</CardText>
                <CardText>Overall Feedback:{props.overallFeedback}</CardText>
            </CardBody>
            <CardFooter>
                <small className="text-muted">Last updated 3 mins ago</small>
            </CardFooter>
        </Card>
    )
}

export default AdminFeedbackCard;