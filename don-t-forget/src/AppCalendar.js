import React, {Component} from 'react';
import './css/App.css';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {connect} from 'react-redux';

BigCalendar.momentLocalizer(moment);

class AppCalendar extends Component {

  constructor() {
      super();
      this.selectEvent=this.selectEvent.bind(this);
      this.deleteEvent=this.deleteEvent.bind(this);

  }


selectEvent(slotInfo){
const { addEvent } =this.props;

  const title = prompt("Please enter a title for your event", "My Event");
      if (title != null) {
        const start=slotInfo.start.toLocaleString();
        const end=slotInfo.end.toLocaleString();
        let allDay=true;
          if (start.localeCompare(end))
            allDay=false;

        const myEvent={
          'title': title,
          'allDay': allDay,
          'start': slotInfo.start,
          'end': slotInfo.end
        }

        addEvent(myEvent);

  }
}

deleteEvent(event){
const { deleteEvent } =this.props;

  const isDelete = confirm(`delete ${event.title}?`);
    if (isDelete)
        deleteEvent(event);


}


    render() {
const { events } =this.props;
        return (

          /* My Calendar */
           <div>
             <BigCalendar selectable defaultView='week' onSelectSlot={this.selectEvent} onSelectEvent={this.deleteEvent} className="Calendar"  events={events}/>
           </div>


                     /*onSelectEvent={event => alert()}
                     */
);
}
}


var mapStateToProps=function(state) {
  return {
    events:state.events
  }
}


var mapDispatchToProps = function(dispatch) {
  return {
    addEvent: function(event) {
      dispatch({
        type: 'ADD_EVENT',
        event
      })
    },
    deleteEvent: function(event) {
      dispatch({
        type: 'DELETE_EVENT',
        event
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AppCalendar);
