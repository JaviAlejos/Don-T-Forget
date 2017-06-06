import React, {Component} from 'react';
import {Thumbnail,Button,OverlayTrigger,Tooltip} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import AppPassword from './AppPassword';
import './css/components/AppThumbnail/AppThumbnail.css';
import {connect} from 'react-redux';



class AppThumbnail extends Component {

  constructor(props) {
     super(props);
     this.state = {password:''};
     this.handleFieldChange = this.handleFieldChange.bind(this);
     this.editPassword = this.editPassword.bind(this);
     this.deletePassword = this.deletePassword.bind(this);
  }

handleFieldChange(password) {
    this.setState({value:this.state.value,password});
  }

editPassword(){
  const {name,editPass}=this.props;
  const edit = confirm("Are you sure?");
    if (edit)
        editPass({namePass:name,pass:this.state.password});


}

deletePassword(){
  const {name,deletePass}=this.props;
  const erase = confirm("Are you sure?");
    if (erase)
      deletePass({namePass:name,pass:this.state.password});

}

render() {
      const {show,value,name}=this.props;
      const names=["Twitter","GitHub","Instagram","Facebook","Google"];
      let varname="Undefined";

      if (names.indexOf(name)!=-1)
          varname=name;

      const tooltip = (<Tooltip id="tooltip"><strong>{name}</strong></Tooltip>);

      return (
          <Thumbnail >
              <p>
                <OverlayTrigger placement="top" overlay={tooltip}>
                  <img src={`../icons/${varname}.png`} alt="70x70" className="AppThumbnailImage"/>
                </OverlayTrigger>
              </p>
              <p>
                <AppPassword value={value} show={show} className="AppThumbnailCommon AppThumbnail" handleFieldChange={this.handleFieldChange}/>
              </p>
                <Button bsStyle="primary" bsSize="small" className="AppThumbnailCommon AppThumbnailButton" onClick={this.editPassword}>Save</Button>
                <Button bsStyle="primary" bsSize="small" className="AppThumbnailCommon" onClick={this.deletePassword}>Delete</Button>

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



var mapDispatchToProps = function(dispatch) {
  return {
    editPass: function(password) {
      dispatch({
        type: 'UPDATE_PASSWORD',
        password
      })},
      deletePass: function(password) {
        dispatch({
          type: 'DELETE_PASSWORD',
          password
        })},
    }
}
export default connect(null,mapDispatchToProps)(AppThumbnail);
