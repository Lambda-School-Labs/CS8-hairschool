import React from 'react';
import './AdminFeedback.css';
import AdminNav from '../AdminNav/AdminNav';
import { Card, CardDeck, CardTitle, CardText, Row, Col, CardHeader, CardFooter, CardBody } from 'reactstrap';

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
                        <CardDeck>
                            
                        </CardDeck>
                     </Row>
                    </div> {/* Cards */}

                </Col>                    
             </Row>
            </div>
        )
    }
}

export default AdminFeedback;