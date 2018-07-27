import React from 'react';
import './ClientNav.css';
import { NavLink } from 'react-router-dom';


class ClientNav extends React.Component {

    render () {
        return (
            <div className="ClientNav">
                <nav> 
                    <ul>
                    <li style={{listStyleType: "none"}}> <NavLink className="navHome" to="/">Home</NavLink> </li>
                    <li style={{listStyleType: "none"}}> <NavLink className="navItem" to="/User/Schedule" activeStyle={ {background: 'lightBlue'} }>Scheduling</NavLink> </li>
                    <li style={{listStyleType: "none"}}> <NavLink className="navItem" to="/User/Feedback" activeStyle={ {background: 'lightBlue'} }>Feedback</NavLink></li>
                    <li style={{listStyleType: "none"}}> <NavLink className="navItem" to="/User/Billing" activeStyle={ {background: 'lightBlue'} }>Billing</NavLink></li>
                    <li style={{listStyleType: "none"}}> <NavLink className="navItem" to="/User/Settings" activeStyle={ {background: 'lightBlue'} }>Settings</NavLink></li>
                    </ul>
               </nav>
            </div>
        )
    }
}

export default ClientNav;