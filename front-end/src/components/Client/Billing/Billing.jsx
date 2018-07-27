import React, {Component} from 'react';
import './Billing.css';
import ClientNav from '../ClientNav/ClientNav';
import {Button, Panel, PanelHeader} from 'react-bootstrap';
import Billing2 from './Billingform';

class Billing extends Component {

    render () {
        return (
            <div className="Billing">
                <ClientNav/>
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
                <Button size="large" className="BuyNowButton">Buy Now</Button>
            </div>
        )
    }
}

export default Billing;