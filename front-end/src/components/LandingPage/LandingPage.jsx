import React from 'react';
import './LandingPage.css';

class LandingPage extends React.Component {
    render() {
        return (
            <div className="LandingPage">
                <div className="carousel"> Carousel Here </div>
                <div className="text"> Paragraph Here</div>
                <button className="scheduleButton">Schedule</button>
            </div>
        )
    }
}

export default LandingPage;