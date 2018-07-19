import React, { Component } from 'react';
import './App.css';
import { Link, Switch, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import ClientSchedule from './components/Client/ClientSchedule/ClientSchedule';
import ClientFeedback from './components/Client/ClientFeedback/ClientFeedback';
import Billing from './components/Client/Billing/Billing';
import Settings from './components/Client/Settings/Settings';
import AdminSchedule from './components/Admin/AdminSchedule/AdminSchedule';
import AdminFeedback from './components/Admin/AdminFeedback/AdminFeedback';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="#"> User Sign Up </Link>
          <Link to="/User/Schedule"> User Sign In </Link>
          <Link to="/Admin/Schedule"> Admin Sign In </Link>
        </header>
        
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          
          <Route path="/User/Schedule" component={ClientSchedule}/>
          <Route path="/User/Feedback" component={ClientFeedback}/>
          <Route path="/User/Billing" component={Billing}/>
          <Route path="/User/Settings" component={Settings}/>
         
          <Route path="/Admin/Schedule" component={AdminSchedule}/>
          <Route path="/Admin/Feedback" component={AdminFeedback}/>
        </Switch>

      </div>
    );
  }
}

export default App;
