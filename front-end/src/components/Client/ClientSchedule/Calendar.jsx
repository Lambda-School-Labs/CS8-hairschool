import React, {Component} from 'react';
import DateTimePicker from 'react-datetime-picker';

class Calendar extends Component{
    state ={
        date: new Date(),
        isCalendarOpen: true,
        isClockOpen: true,
    }

onChange = date => this.setState({date})

render() {
    return (
        <div classname="Scheduler">
        <DateTimePicker
        onChange={this.onChange}
        value={this.state.date}
        />
    </div>
    );
}
}

export default Calendar