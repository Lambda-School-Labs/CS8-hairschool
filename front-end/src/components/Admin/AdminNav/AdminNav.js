import React from 'react';
import './AdminNav.css';
import { NavLink } from 'react-router-dom';



class AdminNav extends React.Component {
    
    render() {
        return (
            <div className="AdminNav col-sm-3">
                
                    <nav className="sidebar-nav">
                        <NavLink className="navItem" to="/Admin/Schedule" style={{textDecoration: 'none'}} activeStyle={ {background: 'yellow' } }>Admin Schedule</NavLink>
                        <NavLink className="navItem" to="/Admin/Feedback" style={{textDecoration: 'none'}} activeStyle={ {background: 'yellow' } }>Admin Feedback</NavLink>
                    </nav>
                 
            </div>
        )
    }
}

export default AdminNav;