import React from 'react';
import './LandingPage.css';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';
import Hair1 from '../images/hair1.jpg';
import Hair2 from '../images/hair2.jpg';
import Hair3 from '../images/hair3.jpg';
import Hair4 from '../images/hair4.jpg';
import Hair5 from '../images/hair5.jpg';


class LandingPage extends React.Component {

    render() {
        return (
            <div className="LandingPage">
                <div className="carousel">
                    <StyleRoot>
                        <Coverflow 
                            displayQuantityOfSide={2} 
                            navigation={true}
                            enableHeading={false}
                            infiniteScroll={true} 
                            media={{
                                '@media (max-width: 900px)': {
                                    width: '600px',
                                    height: '520px'
                                },
                               
                                '@media (min-width: 900px)': {
                                    width: '960px',
                                    height: '420px'
                                }
                            }}>
                                <img src={Hair1} alt='Photo1'/>
                                <img src={Hair2} alt='Photo1'/>
                                <img src={Hair3} alt='Photo1'/>
                                <img src={Hair4} alt='Photo1'/>
                                <img src={Hair5} alt='Photo1'/>
                        </Coverflow>
                    </StyleRoot>
                </div>
                <div className="text"> Welcome To Lambda Hair School,</div>
                <button className="scheduleButton">Schedule</button>
            </div>
        )
    }
}

export default LandingPage;