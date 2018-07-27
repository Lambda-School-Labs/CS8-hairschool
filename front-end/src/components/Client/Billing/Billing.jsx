import React, {Component} from 'react';
import './Billing.css';
import ClientNav from '../ClientNav/ClientNav';
import { Row, Col,} from 'reactstrap';
import {Button, Panel, PanelHeader} from 'react-bootstrap';
import Billing2 from './Billingform';

class Billing extends Component {

    render () {
        return (
            <div className="Billing">
                <Row>
                    <Col sm="3">
                        <ClientNav/>
                    </Col>
                    <Col sm="9">
                        <div className="PaymentInfo">
                        <Panel>
                            <Panel.Heading>
                                Payment Info 
                            </Panel.Heading>
                            <Panel.Body>
                                <Billing2/>
                            </Panel.Body>
                        </Panel>
                        </div>
                        <button className="BuyNowButton">Buy Now</button>
                    </Col>
                </Row>
               
            </div>
        )
    }
}

export default Billing;