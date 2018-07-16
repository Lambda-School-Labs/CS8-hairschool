import React from 'react';
import './Settings.css';

class Settings extends React.Component {
    
    render() {
        return (
            <div className="Settings">
                {/*Navigation*/}
                <form>
                    <div className="FormLeft">
                        <label>
                            Email:
                            <input type="text" name="email" />
                        </label>
                        <label>
                            Phone:
                            <input type="text" name="phone" />
                        </label>
                        <div className="form-check">
                            <div className="EmailCheck">
                                <input type="checkbox" value="" id="defaultCheck1"/>
                                <label>Emails?</label>
                            </div>
                            <div className="TextCheck">
                                <input type="checkbox" value="" id="defaultCheck1"/>
                                <label>Texts?</label>
                            </div>
                        </div>
                    </div>
                    

                </form>
            </div>
        
        )
    }
}