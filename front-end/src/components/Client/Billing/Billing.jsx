import React from 'react';
import './Billing.css';
import ClientNav from '../ClientNav/ClientNav';

class Billing extends React.Component {

    render () {
        return (
            <div className="Billing">
                <ClientNav/>
                <div className="PaymentInfo"></div>
                <div className="BuyNowButton"></div>
            </div>
        )
    }
}

export default Billing;