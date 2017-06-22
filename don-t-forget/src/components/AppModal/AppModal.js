import React, {Component} from 'react';
import '../App/App.css';
import {connect} from 'react-redux';
import {Modal,Button,Glyphicon} from 'react-bootstrap';
import firebase from 'firebase';
import '../AppPassword/AppPassword.css';


class AppModal extends Component {

  constructor() {
      super();
      this.delete=this.delete.bind(this);
      }

delete(){
  const {showModalDialog , close} = this.props;
  const event=showModalDialog.event;
  const isDelete = confirm("Are you sure?");
    if (isDelete)
        this.deleteEvent(event);
  close();

}

deleteEvent(event){
const { deleteEventFromState } =this.props;

//delete from firebase database
const ref = firebase.database().ref(`events/${event.idEvent}`);
ref.remove();


deleteEventFromState(event);




}


renderForm() {
  const {showModalDialog} = this.props;

if (showModalDialog.event!="")
  return(
<div>
    <p><Glyphicon glyph="glyphicon glyphicon-calendar" /><span>  From   </span><Glyphicon glyph="glyphicon glyphicon-arrow-right" />    {showModalDialog.event.start.toLocaleString()}</p>
    <p><Glyphicon glyph="glyphicon glyphicon-time" /><span>  To   </span><Glyphicon glyph="glyphicon glyphicon-arrow-right" />    {showModalDialog.event.end.toLocaleString()}</p>
</div>


  );
}

    render() {
      const {showModalDialog , close} = this.props;
        return (
          /* My Modal Dialog */
<div>
  <Modal show={showModalDialog.showModal} onHide={close} bsSize="small">
    <Modal.Header closeButton>
      <Modal.Title>{showModalDialog.event.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {this.renderForm()}
      <Button bsStyle="info" onClick={this.delete}> <Glyphicon glyph="glyphicon glyphicon-trash" /> Delete</Button>
      <Button bsStyle="info" onClick={close} className="StandardComponent">Close</Button>
    </Modal.Body>
  </Modal>
</div>

);
}
}

var mapDispatchToProps = function(dispatch) {
  return {
    deleteEventFromState: function(event) {
      dispatch({
        type: 'DELETE_EVENT',
        event
      })
    }
  }
}

export default connect(null,mapDispatchToProps)(AppModal);
