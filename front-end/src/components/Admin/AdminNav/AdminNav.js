import React from 'react';
import './AdminNav.css';
import { NavLink } from 'react-router-dom';



class AdminNav extends React.Component {
	
	render() {
		return (
			<div className="AdminNav">
				
				<nav className="sidebar-nav">
					<ul>
						<li style={{listStyleType: "none"}}><NavLink className="navItem" to="/Admin/Schedule" style={{textDecoration: 'none'}} activeStyle={ {background: 'lightBlue' } }> Admin Schedule</NavLink> </li>
						<li style={{listStyleType: "none"}}><NavLink className="navItem" to="/Admin/Feedback" style={{textDecoration: 'none'}} activeStyle={ {background: 'lightBlue' } }> Admin Feedback</NavLink> </li>
					</ul>
				</nav>
				 
			</div>
		)
	}
}

export default AdminNav;