import React from 'react';
import './AdminFeedback.css';
import AdminNav from '../AdminNav/AdminNav';

class AdminFeedback extends React.Component {

    render () {
        return (
            <div className="AdminFeedback">
                <AdminNav/>
                <div className="StylistCards">
                </div>
            </div>
        )
    }
}

export default AdminFeedback;