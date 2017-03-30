import React, {Component} from 'react';
import './css/App.css';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.momentLocalizer(moment);

class AppCalendar extends Component {
    render() {
        return (

          /* My Calendar */
           <div>
             <BigCalendar className="Calendar"  events={[]}/>
           </div>

);
}
}

export default AppCalendar;
