import React, {Component} from 'react';
import './css/App.css'
import {connect} from 'react-redux';
import {Modal,Button,Glyphicon} from 'react-bootstrap';
import firebase from 'firebase';
import AppPassword from './AppPassword';

class AppModalThumbnail extends Component {

  constructor(props) {
      super(props);
      this.state = {password:''};
      this.handleFieldChange = this.handleFieldChange.bind(this);
      this.handlePassword=this.handlePassword.bind(this);
      this.initializeDatabase(props);
    }

    handleFieldChange(password) {
      this.setState({password});
    }

    initializeDatabase(props){
      const {user,passwords} = props;
      if(!passwords.length){
        // Find all password whose user is me.
        const ref = firebase.database().ref("passwords");
        ref.orderByChild("user").equalTo(user.user.email).on("child_added", snapshot=>{

          //Add password to the redux state
        const myPassword = {
                'namePass' : snapshot.child("value").val(),
                'pass': snapshot.child("password").val(),
                'idPassword': snapshot.child("idPassword").val()
            };

          this.props.addPass(myPassword);
        });

      }
    }


handlePassword(){
  const {close,add} = this.props;
    if (add)
      this.otherName();
    else {
      this.editPassword();
    }

  close();
}

otherName(){
  const {showModalDialog} = this.props;

if (this.state.password!=undefined){
  if (this.state.password.length<4)
    alert("you need a password at least 4 characters long")
  else {
    if (showModalDialog.value=="Other"){
        const other = prompt("Please enter a name for your password", "Don't Forget");
        if (other != null)
            this.addPassword(other);
          } else {
                const add = confirm("Are you sure?");
                if (add)
                  this.addPassword(showModalDialog.value);
                }
      }
  }
}


addPassword(namePass){
const exist = this.props.passwords.findIndex(pass => pass.namePass === namePass);
  if(exist<0){
    const {user} = this.props;
    //Add password to the firebase database
    const refer=firebase.database().ref('passwords');
    const id=refer.push();
    const myPassword = {
          'value' : namePass,
          'password': this.state.password,
          'idPassword':id.key,
          'user':user.user.email
      }

    id.set(myPassword);
  }
}

editPassword(){
  const {editPass,passwords}=this.props;
//  const edit = confirm("Are you sure?");
    /*if (edit)
        editPass({namePass:showModalDialog.value,pass:this.state.password});

    //update from firebase database
      const ref = firebase.database().ref(`passwords/${passwords.filter(pass => pass.namePass==showModalDialog.value)[0].idPassword}`);
      ref.update({password:this.state.password});*/

}


render() {
      const {showModalDialog , close} = this.props;
        return (
          /* My Modal Dialog */

            <Modal show={showModalDialog.showModal} onHide={close} bsSize="small">
              <Modal.Header closeButton>
                <Modal.Title>My Password</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Button bsSize="small" bsStyle="info" onClick={this.handlePassword}>OK</Button>
                <AppPassword show={true} handleFieldChange={this.handleFieldChange}/>
              </Modal.Body>
            </Modal>


);
}
}


var mapStateToProps = function(state) {
    return {user:state.user,passwords: state.passwords}
}

var mapDispatchToProps = function(dispatch) {
  return {
    addPass: function(password) {
      dispatch({
        type: 'ADD_PASSWORD',
        password
      })},
      editPass: function(password) {
        dispatch({
          type: 'UPDATE_PASSWORD',
          password
        })},
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AppModalThumbnail);
