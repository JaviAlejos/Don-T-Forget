import React, {Component} from 'react';
import {Thumbnail,OverlayTrigger,Tooltip} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './css/components/AppThumbnail.css';
import {connect} from 'react-redux';
import firebase from 'firebase';
import AppModalThumbnail from './AppModalThumbnail';


class AppThumbnailForm extends Component {

  constructor(props) {
     super(props);
     this.state = {value: 'Google',showModal: false};
     this.handleChange = this.handleChange.bind(this);
     this.closeAppModal = this.closeAppModal.bind(this);
     this.showAppModal = this.showAppModal.bind(this);

    }


  handleChange(event) {
   this.setState({value: event.target.value,showModal: this.state.showModal});
  }

  closeAppModal() {
      this.setState({value:this.state.value,showModal: false});
  }

  showAppModal(event) {
      this.setState({value:this.state.value,showModal: true});
  }

    render() {
      const {show}=this.props;
      const tooltip = (<Tooltip id="tooltip"><strong>Click +</strong> to add password</Tooltip>);

      return (

          <Thumbnail>
            <p>
              <OverlayTrigger placement="right" overlay={tooltip}>
                <img src="../icons/Plus.png" alt="70x70"className="AppThumbnailImage" onClick={this.showAppModal}/>
              </OverlayTrigger>
            </p>
            <p>
              <AppModalThumbnail showModalDialog={this.state} close={this.closeAppModal} add={true}/>
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

export default AppThumbnailForm;
