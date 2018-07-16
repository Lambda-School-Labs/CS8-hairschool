import React from 'react';
import './AdminSchedule.css';

class AdminSchedule extends React.Component {

    render () {
        return (
            <div className="AdminSchedule">
                {/*Navigation*/}
                <div className="ScheduleHeader"></div>
                <div className="AdminCalender"></div>
                <div className="AppointmentCards"></div>
            </div>
        )
    }
}