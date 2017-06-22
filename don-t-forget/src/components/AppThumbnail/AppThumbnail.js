import React, {Component} from 'react';
import {Thumbnail,OverlayTrigger,Tooltip,Glyphicon} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../AppPassword/AppPassword.css';
import './css/AppThumbnail.css';
import {connect} from 'react-redux';
import firebase from 'firebase';
import AppModalThumbnail from './AppModalThumbnail';




class AppThumbnail extends Component {

  constructor(props) {
     super(props);
     this.deletePassword = this.deletePassword.bind(this);
     this.state = {value: this.props.name,showModal: false};
     this.closeAppModal = this.closeAppModal.bind(this);
     this.showAppModal = this.showAppModal.bind(this);
  }

  closeAppModal() {
      this.setState({value:this.state.value,showModal: false});
  }

  showAppModal() {
      this.setState({value:this.state.value,showModal: true});
  }


deletePassword(){
  const {name,deletePass,passwords}=this.props;
  const erase = confirm("Are you sure?");
    if (erase)
      deletePass({namePass:name});

    //delete from firebase database
      const ref = firebase.database().ref(`passwords/${passwords.filter(pass => pass.namePass==name)[0].idPassword}`);
      ref.remove();
}


render() {

  const {name}=this.props;
  const names=["Twitter","GitHub","Instagram","Facebook","Google"];
  let varname="Undefined";

  if (names.indexOf(name)!=-1)
      varname=name;

      const tooltipName = (<Tooltip id="tooltip"><strong>{name}</strong></Tooltip>);
      const tooltipEdit = (<Tooltip id="tooltip"><strong>Edit Password</strong></Tooltip>);
      const tooltipDelete = (<Tooltip id="tooltip"><strong>Delete Password</strong></Tooltip>);
      const tooltipSend = (<Tooltip id="tooltip"><strong>Send an email with the password</strong></Tooltip>);



      return (
          <Thumbnail >
                          <AppModalThumbnail showModalDialog={this.state} close={this.closeAppModal} add={false}/>
              <p>
                <OverlayTrigger placement="top" overlay={tooltipName}>
                  <img src={`../icons/${varname}.png`} alt="70x70" className="AppThumbnailImage"/>
                </OverlayTrigger>
              </p>
              <OverlayTrigger placement="top" overlay={tooltipSend}>
                <span>
                  <Glyphicon className="AppThumbnailButton GlyphiconOk" glyph="glyphicon glyphicon-envelope" />
                </span>
              </OverlayTrigger>

              <OverlayTrigger placement="top" overlay={tooltipEdit}>
                <span onClick={this.showAppModal}>
                  <Glyphicon className="StandardComponent GlyphiconWarning" glyph="glyphicon glyphicon-pencil" />
                </span>
              </OverlayTrigger>

              <OverlayTrigger placement="top" overlay={tooltipDelete}>
                <span onClick={this.deletePassword}>
                  <Glyphicon className="StandardComponent GlyphiconDanger" glyph="glyphicon glyphicon-remove" />
                </span>
              </OverlayTrigger>

          </Thumbnail>

              /*<Thumbnail src="../icons/Plus.png" alt="by tFity">
              GitHub --> by Bo-Yi Wu
              Twitter --> by lonaug
              Facebook $$ Google Instagram --> by wikimedia commons $$ YaNiS2017

              https://facebook.github.io/react/docs/forms.html--> The select Tag
              */

        );

    }
}

var mapStateToProps = function(state) {
    return {passwords: state.passwords}
}

var mapDispatchToProps = function(dispatch) {
  return {
      deletePass: function(password) {
        dispatch({
          type: 'DELETE_PASSWORD',
          password
        })}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AppThumbnail);
