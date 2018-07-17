import React from 'react';
import './AdminNav.css';
import { NavLink } from 'react-router-dom';

class AdminNav extends React.Component {
    
    render() {
        return (
            <div className="AdminNav">
                <nav>
                    <NavLink to="/Admin/Schedule" activeStyle={ {color: 'red' } }>Admin Schedule</NavLink>
                    <NavLink to="/Admin/Feedback" activeStyle={ {color: 'red' } }>Admin Feedback</NavLink>
                </nav>
            </div>
        )
    }
}

export default AdminNav;