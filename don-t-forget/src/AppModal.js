import React, {Component} from 'react';
import './css/App.css';
import {connect} from 'react-redux';
import {Modal,Button,Glyphicon} from 'react-bootstrap';


class AppModal extends Component {

  constructor() {
      super();
      this.delete=this.delete.bind(this);
      }

delete(){
  const { deleteEvent } =this.props;
  const {showModalDialog , close} = this.props;
  const event=showModalDialog.event;
  const isDelete = confirm("Are you sure?");
    if (isDelete)
        deleteEvent(event);
  close();

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
      <Button onClick={this.delete}> <Glyphicon glyph="glyphicon glyphicon-trash" /> Delete</Button>
      <Button onClick={close}>Close</Button>
    </Modal.Body>
  </Modal>
</div>

);
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

export default connect(null,mapDispatchToProps)(AppModal);
