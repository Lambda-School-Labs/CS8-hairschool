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

const Dates = [':(']

const time = [
    {value: 'sad face', label:':('},
   
]



class FeedbackDrop extends Component {
    state ={
        selectedOption: null,
        isSearchable: true,

    }

    handleChange = selectedOption => {
        this.setState({selectedOption});
        console.log('Option selected:',selectedOption)

    }


    render(){

        const {selectedOption} = this.state;

        return(
            <div className="Feedback">
                <Row> 
                    <Col sm="3">
                        <div className="Feedback-stylist">
                            <Select placeholder="Stylists"
                                value={selectedOption}
                                onChange={this.handleChange}
                                options={stylists}/>
                        </div>   
                    </Col>
                    <Col sm="3">
                        <div className="Feedback-services">
                            <Select placeholder="Service"
                                value={selectedOption}
                                onChange={this.handleChange}
                                options={services}/>
                        </div>
                    </Col>
                    <Col sm="3">
                        <div className="Feedback-date">
                            <Select placeholder="Date"
                                value={selectedOption}
                                onChange={this.handleChange}
                                options={Dates}/>
                        </div>
                    </Col>
                    <Col sm="3">
                        <div className="Feedback-time">
                            <Select placeholder="Time"
                                value={selectedOption}
                                onChange={this.handleChange}
                                options={time}/>
                        </div>
                    </Col>
                </Row>
            </div>

            )
    }
}

export default FeedbackDrop