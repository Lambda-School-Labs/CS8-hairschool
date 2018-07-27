import React from 'react';
import './Billing.css';
import ClientNav from '../ClientNav/ClientNav';
import { Row, Col,} from 'reactstrap';

class Billing extends React.Component {

    render () {
        return (
            <div className="Billing">
                <Row>
                    <Col sm="3">
                        <ClientNav/>
                    </Col>
                    <Col sm="9">
                        <div className="PaymentInfo">
                        Payment Info Here
                        </div>
                        <button className="BuyNowButton">Buy Now</button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Billing;