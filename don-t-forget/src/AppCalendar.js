import React, {Component} from 'react';
import './css/App.css';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {connect} from 'react-redux';
import AppModal from './AppModal';

BigCalendar.momentLocalizer(moment);

class AppCalendar extends Component {

    constructor() {
        super();
        this.state = {showModal: false,event:""};
        this.selectEvent = this.selectEvent.bind(this);
        this.closeAppModal = this.closeAppModal.bind(this);
        this.showAppModal = this.showAppModal.bind(this);

    }

    closeAppModal() {
        this.setState({showModal: false,event:""});
    }

    showAppModal(event) {
        this.setState({showModal: true,event});
    }

    selectEvent(slotInfo) {
        const {addEvent} = this.props;

        const title = prompt("Please enter a title for your event", "My Event");
        if (title != null) {
            const start = slotInfo.start.toLocaleString();
            const end = slotInfo.end.toLocaleString();
            let allDay = true;
            if (start.localeCompare(end))
                allDay = false;

            const myEvent = {
                'title': title,
                'allDay': allDay,
                'start': slotInfo.start,
                'end': slotInfo.end
            }

            addEvent(myEvent);

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

        /*onSelectEvent={event => alert()}
                     */
        );
    }
}

var mapStateToProps = function(state) {
    return {events: state.events}
}

var mapDispatchToProps = function(dispatch) {
    return {
        addEvent: function(event) {
            dispatch({type: 'ADD_EVENT', event})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppCalendar);
