import React, {Component} from 'react';
import {Form, FormGroup, FormControl, HelpBlock, ControlLabel} from 'react-bootstrap';

class Billing2 extends Component {
    constructor(props){
        super(props);
            this.handleChange = this.handleChange.bind(this);

            this.state={
               value:''
            };
        

        }

        getValidationState() {
            const length = this.state.value;
            if (length > 14 ) return 'success';
            else if (length < 0) return 'error';
            return null;
        }

        

       handleChange(e) {
            this.setState({value: e.target.value});
        }

    

        // getValidationState1() {
        // const length = this.state.value.length;
        // if (length = 3) return 'success';
        // else if (length < 0) return 'error';
        // return null;
        // }

        

    render(){
        return(
            <div className="Billform">
            
            <Form>
            <FormGroup
            controlId="BillingForm"
            // validationState={this.getValidationState()}
            />

            <FormControl
                type="text"
                value={this.state.value}
                placeholder="CC#"
                onChange={this.handleChange}
                validationState={this.getValidationState()}

            />

        
            <FormControl
                type="text"
                value={this.state.value}
                placeholder="EXP"
                onChange={this.handleChange}
                validationState={this.getValidationState()}
            />
            <FormControl
                type="text"
                value={this.state.value}
                placeholder="CVV"
                onChange={this.handleChange}
                
            />

            <HelpBlock> Thank You! </HelpBlock>

            </Form>
            </div>
        )
    }
}

export default Billing2;