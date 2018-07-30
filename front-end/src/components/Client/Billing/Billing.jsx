import React, {Component} from 'react';
import './Billing.css';
import ClientNav from '../ClientNav/ClientNav';
import { Link } from 'react-router-dom';
import { Row, Col,} from 'reactstrap';
import {Button, Panel, PanelHeader} from 'react-bootstrap';
import Billing2 from './Billingform';

class Billing extends Component {

    render () {
        return (
            <div className="Billing">

                <nav className="App-header">
                        <Link className="link signup" to="/SignUp" style={{textDecoration: 'none'}}> Sign Up </Link>
                        <Link className="link signin" to="/SignIn" style={{textDecoration: 'none'}}> Sign In </Link>
                        <Link className="link DAsignin" to="/Admin/Schedule" style={{textDecoration: 'none'}}> Demo Admin </Link>
                </nav> 
                <Row className="Container">
                    <Col sm="3">
                        <ClientNav/>
                    </Col>
                    <Col sm="9">
                        <div className="Title"> Billing </div>
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