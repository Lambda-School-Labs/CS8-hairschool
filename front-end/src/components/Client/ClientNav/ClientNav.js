import React from 'react';
import './ClientNav.css';
import { NavLink } from 'react-router-dom';



class ClientNav extends React.Component {

    render () {
        return (
            <div className="ClientNav">
                <nav> 
                   <NavLink to="/">Home</NavLink>
                   <NavLink to="/User/Schedule" activeStyle={ {color: 'red'} }>Scheduling</NavLink>
                   <NavLink to="/User/Feedback" activeStyle={ {color: 'red'} }>Feedback</NavLink>
                   <NavLink to="/User/Billing" activeStyle={ {color: 'red'} }>Billing</NavLink>
                   <NavLink to="/User/Settings" activeStyle={ {color: 'red'} }>Settings</NavLink>
               </nav>
            </div>
        )
    }
}

export default ClientNav;