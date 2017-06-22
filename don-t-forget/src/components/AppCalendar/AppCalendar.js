import React, {Component} from 'react';
import './AppCalendar.css';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {connect} from 'react-redux';
import AppModal from '../AppModal/AppModal';
import firebase from 'firebase';

BigCalendar.momentLocalizer(moment);

class AppCalendar extends Component {

    constructor(props) {
        super(props);
        this.initializeDatabase(props);
        this.state = {showModal: false,event:""};
        this.selectEvent = this.selectEvent.bind(this);
        this.closeAppModal = this.closeAppModal.bind(this);
        this.showAppModal = this.showAppModal.bind(this);

    }

    initializeDatabase(props){
      const {user,addEventToState,events} = props;
      if(!events.length){
        // Find all events whose user is me.
        const ref = firebase.database().ref("events");
        ref.orderByChild("user").equalTo(user.user.email).on("child_added", snapshot=>{

          //Add Event to the redux state
          const start=new Date(moment(snapshot.child("start").val(),"DD-MM-YYYY HH:mm"));
          const end=new Date(moment(snapshot.child("end").val(),"DD-MM-YYYY HH:mm"));
          const myEvent = {
                'title': snapshot.child("title").val(),
                'allDay': snapshot.child("allDay").val(),
                'start': start,
                'end': end,
                'idEvent': snapshot.child("idEvent").val()
                }

          addEventToState(myEvent);
        });

      }
    }

    closeAppModal() {
        this.setState({showModal: false,event:""});
    }

    showAppModal(event) {
        this.setState({showModal: true,event});
    }


    addEvent(slotInfo,title,allDay){
      const {user} = this.props;
      //Add event to the firebase database
      const refer=firebase.database().ref('events');
      const id=refer.push();
      const myEventString = {
            'title': title,
            'allDay': allDay,
            'start': slotInfo.start.toLocaleString(),
            'end': slotInfo.end.toLocaleString(),
            'idEvent':id.key,
            'user':user.user.email
        }

      id.set(myEventString);
    }



    selectEvent(slotInfo) {
        const title = prompt("Please enter a title for your event", "My Event");
        if (title != null) {
            const start = slotInfo.start.toLocaleString();
            const end = slotInfo.end.toLocaleString();
            let allDay = true;
            if (start.localeCompare(end))
                allDay = false;
            this.addEvent(slotInfo,title,allDay);

  }
    }


    render() {
        const {events} = this.props;
        return (

        /* My Calendar */
        <div>
         <AppModal showModalDialog={this.state} close={this.closeAppModal}/>
         <BigCalendar selectable defaultView='week' onSelectSlot={this.selectEvent} onSelectEvent={this.showAppModal} className="Calendar" events={events} />
      </div>

        );
    }
}

var mapStateToProps = function(state) {
    return {user:state.user,events: state.events}
}

var mapDispatchToProps = function(dispatch) {
    return {
        addEventToState: function(event) {
            dispatch({type: 'ADD_EVENT', event})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppCalendar);
