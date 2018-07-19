import React from 'react';
import './AdminSchedule.css';
import AdminNav from '../AdminNav/AdminNav';

class AdminSchedule extends React.Component {

    render () {
        return (
            <div className="AdminSchedule">
                        <AdminNav/>
                        <h1 className="ScheduleHeader">Schedule</h1>
                        <div className="AdminCalender">Calender Here</div>
                        <div className="AppointmentCards"> Appointment Cards Here</div>
            </div>
        )
    }
}

export default AdminSchedule;