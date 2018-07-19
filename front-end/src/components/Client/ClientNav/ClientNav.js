import React from 'react';
import './ClientNav.css';
import { NavLink } from 'react-router-dom';


class ClientNav extends React.Component {

    render () {
        return (
            <div className="ClientNav">
                <nav> 
                   <NavLink to="/">Home</NavLink>
                   <NavLink to="/User/Schedule" activeStyle={ {background: 'red'} }>Scheduling</NavLink>
                   <NavLink to="/User/Feedback" activeStyle={ {background: 'red'} }>Feedback</NavLink>
                   <NavLink to="/User/Billing" activeStyle={ {background: 'red'} }>Billing</NavLink>
                   <NavLink to="/User/Settings" activeStyle={ {background: 'red'} }>Settings</NavLink>
               </nav>
            </div>
        )
    }
}

export default ClientNav;