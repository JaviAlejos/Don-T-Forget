import React, {Component} from 'react';
import {Thumbnail,Button,OverlayTrigger,Tooltip} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import AppPassword from './AppPassword';
import './css/components/AppThumbnail/AppThumbnail.css';


class AppThumbnailForm extends Component {

    render() {
      const {show,value,name}=this.props;
      const tooltip = (<Tooltip id="tooltip"><strong>Click +</strong> to add password</Tooltip>);

      return (
        <OverlayTrigger placement="right" overlay={tooltip}>
          <Thumbnail src="../icons/Plus.png" alt="70x70" hover="texto al pasar el raton">
            <p>
              <AppPassword value="12345678" show={show} className="AppThumbnail"/>
            </p>
            <select className="AppThumbnail">
              <option value="Google">Google</option>
              <option value="Facebook">Facebook</option>
              <option value="Instagram">Instagram</option>
              <option value="GitHub">GitHub</option>
              <option value="Twitter">Twitter</option>
              <option value="Twitter">Other</option>
            </select>
          </Thumbnail>
      </OverlayTrigger>

              /*<Thumbnail src="../icons/Plus.png" alt="by tFity">
              GitHub --> by OpenClipart-Vectors
              Twitter --> by lonaug
              Facebook $$ Google Instagram --> by wikimedia commons

              */
        );
    }
}

export default AppThumbnailForm;
