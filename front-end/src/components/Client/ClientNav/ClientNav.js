import React from 'react';
import './ClientNav.css';
import { NavLink } from 'react-router-dom';
import {Navbar, Nav, NavItem, Col, Panel, NavbarBrand} from 'react-bootstrap';

//<NavLink to="/User/Feedback" activeStyle={ {color: 'red'} }>Feedback</NavLink>
//<NavLink to="/User/Billing" activeStyle={ {color: 'red'} }>Billing</NavLink>
//<NavLink to="/User/Settings" activeStyle={ {color: 'red'} }>Settings</NavLink>

class ClientNav extends React.Component {

    render () {
        return (
            <div className="ClientNav">
                
                <Navbar>
                    
                    <Nav>
                    <Navbar.Toggle/>
                    
                   <NavItem eventKey={1} href='/'> Home</NavItem>
                   <NavItem eventKey={2} href='/User/Schedule'>  Scheduling </NavItem> 
                   <NavItem eventKey={3} href='/User/Feedback'> Feedback</NavItem>
                   <NavItem eventKey={4} href='/User/Billing'> Billing</NavItem>
                   <NavItem eventKey={5} href='/User/Settings'> Settings</NavItem>
                   
                   </Nav>
                
                </Navbar>
                
                   
            </div>
        )
    }
}

export default ClientNav;