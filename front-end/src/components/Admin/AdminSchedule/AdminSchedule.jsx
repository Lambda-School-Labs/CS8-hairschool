import React from 'react';
import './AdminSchedule.css';
import AdminNav from '../AdminNav/AdminNav';

class AdminSchedule extends React.Component {

    render () {
        return (
            <div className="AdminSchedule">
                <AdminNav/>
                <div className="ScheduleHeader">Schedule</div>
                <div className="AdminCalender">Calender Here</div>
                <div className="AppointmentCards"> Appointment Cards Here</div>
            </div>
        )
    }
}

export default AdminSchedule;