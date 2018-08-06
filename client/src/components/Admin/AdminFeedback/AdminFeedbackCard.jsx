import React from 'react';
import { Card, CardTitle, CardText, Row, Col, CardHeader, CardFooter, CardBody } from 'reactstrap';

const AdminFeedbackCard = (props) => {

    return (
        <Card>
            <CardHeader>{props.stylist}</CardHeader>
            <CardBody>
                <CardTitle>Bianca was Awesome</CardTitle>
                <CardText>This is the feedback this stylist got back from the customer</CardText>
            </CardBody>
            <CardFooter>
                <small className="text-muted">Last updated 3 mins ago</small>
            </CardFooter>
        </Card>
    )
}

export default AdminFeedbackCard;