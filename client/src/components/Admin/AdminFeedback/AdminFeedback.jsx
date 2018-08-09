import React from 'react';
import axios from 'axios';
import './AdminFeedback.css';
import { Link } from 'react-router-dom'
import AdminFeedbackCard from './AdminFeedbackCard';
import AdminNav from '../AdminNav/AdminNav';
import { Card, CardDeck, CardTitle, CardText, Row, Col, CardHeader, CardFooter, CardBody } from 'reactstrap';

class AdminFeedback extends React.Component {


    
    state = {
        feedbackCards: [],

        stylist:"",
        service:"",

        consultationRating:"",
        consultationFeedback:"",
        customerServiceRating:"",
        customerServiceFeedback:"",
        timeRating:"",
        timeFeedback:"",
        stylingRating:"",
        stylingFeedback:"",
        overallRating:"",
        overallFeedback:""
    }

    
    componentDidMount() {
        this.getFeedbackCards();
    }

    getFeedbackCards() {
        axios
            .get('http://localhost:3000/Admin/Feedback')
            .then(response => response.data)
            .then( feedbackCards => { this.setState({feedbackCards}) } )
            .catch(error => {console.error(`Server Error: ${error}`) } );
    }

    deleteSmurf(id) {
        console.log(id)
        axios
            .delete(`http://localhost:3000/Admin/Feedback/${id}`)
            .then( () => { this.getFeedbackCard(); } );
    }
   

   
    render () {
        return (
            <div className="AdminFeedback">
            <nav className="App-header">
                        <Link className="link signup" to="/" style={{textDecoration: 'none'}}> Home </Link>
                        <Link className="link signin" to="/SignIn" style={{textDecoration: 'none'}}> Logout </Link>
            </nav>
             <Row>
                <Col sm="2">
                    <AdminNav/>
                </Col>
                <Col sm="9">
                    <h1>Client Feedback</h1>
                    <div className="Cards">
                     <Row>

                        <CardDeck>
                            {this.state.feedbackCards.map((feedbackCard) => {
                                return <AdminFeedbackCard 
                                    deleteFeedbackCard={this.deleteFeedbackCard} 
                                    id={feedbackCard.id}
                                    stylist={feedbackCard.stylist}
                                    service={feedbackCard.service}
                                    consultationRating={feedbackCard.consultationRating}
                                    consultationFeedback={feedbackCard.consultationFeedback}
                                    customerServiceRating={feedbackCard.customerServiceRating}
                                    customerServiceFeedback={feedbackCard.customerServiceFeedback}
                                    timeRating={feedbackCard.timeRating}
                                    timeFeedback={feedbackCard.timeFeedback}
                                    stylingRating={feedbackCard.stylingRating}
                                    stylingFeedback={feedbackCard.stylingFeedback}
                                    overallRating={feedbackCard.overallRating}
                                    overallFeedback={feedbackCard.overallFeedback}
                                    key={feedbackCard.id}
                                    />
                            })}
                        </CardDeck>
                     </Row>
                    </div> {/* Cards */}

                </Col>                    
             </Row>
            </div>
        )
    }
}

export default AdminFeedback;