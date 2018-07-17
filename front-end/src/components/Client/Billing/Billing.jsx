import React from 'react';
import './Billing.css';
import ClientNav from '../ClientNav/ClientNav';

class Billing extends React.Component {

    render () {
        return (
            <div className="Billing">
                <ClientNav/>
                <div className="PaymentInfo">
                Payment Info Here
                </div>
                <button className="BuyNowButton">Buy Now</button>
            </div>
        )
    }
}

export default Billing;