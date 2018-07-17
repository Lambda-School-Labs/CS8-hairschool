import React from 'react';
import './AdminSchedule.css';
import AdminNav from '../AdminNav/AdminNav';

class AdminSchedule extends React.Component {

    render () {
        return (
            <div className="AdminSchedule">
                <AdminNav/>
                <div className="ScheduleHeader"></div>
                <div className="AdminCalender"></div>
                <div className="AppointmentCards"></div>
            </div>
        )
    }
}

export default AdminSchedule;