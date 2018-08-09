import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import axios from 'axios';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  
  }
  async submit(ev) {
    ev.preventDefault();
    const url = process.env.NODE_ENV === 'production'
      ? 'http://lambdahairschool.com'
      : 'http://localhost:8000';
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let response = await axios.post(`${url}/stripe/subscribe/`, {
        source: await token.id,
        amount: 2000,
        currency: 'usd',
    });
  
    if (response.ok) this.setState({complete: true});
    else console.log(response);
  }
  
  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
  
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }

  
}

export default injectStripe(CheckoutForm);