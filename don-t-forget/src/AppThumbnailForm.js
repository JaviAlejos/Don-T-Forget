import React, {Component} from 'react';
import {Thumbnail,Button,OverlayTrigger,Tooltip} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import AppPassword from './AppPassword';
import './css/components/AppThumbnail/AppThumbnail.css';
import {connect} from 'react-redux';


class AppThumbnailForm extends Component {

  constructor(props) {
     super(props);
     this.state = {value: 'Google',password:''};
     this.handleChange = this.handleChange.bind(this);
     this.otherName = this.otherName.bind(this);
     this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleChange(event) {
   this.setState({value: event.target.value,password:this.state.password});
  }

  handleFieldChange(password) {
    this.setState({value:this.state.value,password});
  }

  otherName(event){
    if (this.state.value=="Other"){
        const other = prompt("Please enter a name for your password", "Don't Forget");
        if (other != null)
            this.addPassword(other);
    } else {
      const add = confirm("Are you sure?");
        if (add)
          this.addPassword(this.state.value);
        }
    }


  addPassword(namePass){
    const pass=this.state.password;
    this.props.addPass({namePass,pass});
  }

    render() {
      const {show}=this.props;
      const tooltip = (<Tooltip id="tooltip"><strong>Click +</strong> to add password</Tooltip>);

      return (

          <Thumbnail>
            <p>
              <OverlayTrigger placement="right" overlay={tooltip}>
                <img src="../icons/Plus.png" alt="70x70"className="AppThumbnailImage" onClick={this.otherName}/>
              </OverlayTrigger>
            </p>
            <p>
              <AppPassword show={show} className="AppThumbnailCommon AppThumbnail" handleFieldChange={this.handleFieldChange} />
            </p>
            <select value={this.state.value} onChange={this.handleChange} className="AppThumbnailCommon AppThumbnail">
              <option value="Google">Google</option>
              <option value="Facebook">Facebook</option>
              <option value="Instagram">Instagram</option>
              <option value="GitHub">GitHub</option>
              <option value="Twitter">Twitter</option>
              <option value="Other">Other</option>
            </select>
          </Thumbnail>

          /*<Thumbnail src="../icons/Plus.png" alt="by tFity">
              GitHub --> by OpenClipart-Vectors
              Twitter --> by lonaug
              Facebook $$ Google Instagram --> by wikimedia commons
              */
        );
    }
}


var mapDispatchToProps = function(dispatch) {
  return {
    addPass: function(password) {
      dispatch({
        type: 'ADD_PASSWORD',
        password
      })}
    }
}
export default connect(null,mapDispatchToProps)(AppThumbnailForm);
