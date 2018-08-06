import React, {Component} from 'react';
import Select from 'react-select';
import { Row, Col } from 'reactstrap';
import './ClientFeedback.css'

const stylists = [
    {value: 'maria', label:'Maria'},
    {value: 'wyatt',label:'Wyatt'},
    {value: 'isabella',label:'Isabella'},
    {value: 'vanessa',label:'Vanessa'},
    {value: 'harmony',label:'Harmony'},
    {value: 'naomi',label:'Naomi'},
    {value: 'deidre',label:'Deidre'},
    {value: 'teayana',label:'Teayana'},
    {value: 'lara',label:'Lara'},
    {value: 'seun',label:'Seun'},
    {value: 'divya',label:'Divya'},
    {value: 'savannah',label:'Savannah'},
    {value: 'troy',label:'Troy'},
    {value: 'kimberly',label:'Kimberly'}
]

const services = [
    {value: 'haircut', label:'Haircut'},
    {value: 'cut & color', label:'Cut & Color'},
    {value: 'extensions', label:'Extensions'},
    {value: 'color', label:'Color'},
    {value: 'barbering', label:'Barbering'},
]



class FeedbackDrop extends Component {
    
    state ={
        selectedStylist: null,
        selectedService: null,

    }

    handleChange = selectedStylist => {
        this.setState({selectedStylist});
        console.log('Stylist selected:', selectedStylist)

    }

    handleChange = selectedService => {
        this.setState({selectedService});
        console.log('Service selected:', selectedService)

    }


    render(){

        const {selectedStylist} = this.state;
        const {selectedService} = this.state;

        return(
            <div className="Feedback">
                <Row> 
                    <Col sm="6">
                        <div className="Feedback-stylist">
                            <Select placeholder="Stylists"                              
                                onChange={this.handleChange}
                                value={selectedStylist}
                                options={stylists}/>
                        </div>   
                    </Col>
                    <Col sm="6">
                        <div className="Feedback-services">
                            <Select placeholder="Services"
                                onChange={this.handleChange}
                                value={selectedService}
                                isMulti
                                options={services}
                                className="multiServices" />
                        </div>
                    </Col>
                    
                </Row>
            </div>

            )
    }
}

export default FeedbackDrop