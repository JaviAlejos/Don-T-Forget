import React, {Component} from 'react';
import './css/App.css';
import {connect} from 'react-redux';
import {Modal,Button} from 'react-bootstrap';


class AppModal extends Component {

  constructor() {
      super();
      this.delete=this.delete.bind(this);
      this.edit=this.edit.bind(this);
    }

delete(){
  const { deleteEvent } =this.props;
  const {showModalDialog , close} = this.props;
  const event=showModalDialog.event;
  const isDelete = confirm(`delete ${event.title}?`);
    if (isDelete)
        deleteEvent(event);
  close();

}

edit(){
  //const { editEvent } =this.props;
  const {showModalDialog , close} = this.props;
  const event=showModalDialog.event;


}


renderForm() {
  const {showModalDialog} = this.props;
debugger;
  /*const myEvent = {
      'title': title,
      'allDay': allDay,
      'start': slotInfo.start,
      'end': slotInfo.end
  }*/

if (showModalDialog.event!="")
  return(
<div>
    <h4>{showModalDialog.event.title}</h4>
    <p>{showModalDialog.event.start.toLocaleString()}</p>
    <p>{showModalDialog.event.end.toLocaleString()}</p>
</div>


  );
}

    render() {
      const {showModalDialog , close} = this.props;
        return (
          /* My Modal Dialog */
<div>
  <Modal show={showModalDialog.showModal} onHide={close}>
    <Modal.Header closeButton>
      <Modal.Title>Selected Event</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {this.renderForm()}
      <Button onClick={this.edit}>Edit</Button>
      <Button onClick={this.delete}>Delete</Button>
      <Button onClick={close}>Close</Button>
    </Modal.Body>
  </Modal>
</div>

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
    deleteEvent: function(event) {
      dispatch({
        type: 'DELETE_EVENT',
        event
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AppModal);
