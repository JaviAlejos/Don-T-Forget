import React, {Component} from 'react';
import {Thumbnail,Button,OverlayTrigger,Tooltip} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import AppPassword from './AppPassword';
import './css/components/AppThumbnail/AppThumbnail.css';


class AppThumbnail extends Component {

    render() {
      const {show,value,name}=this.props;
      const tooltip = (<Tooltip id="tooltip"><strong>{name}</strong></Tooltip>);

      return (
          <OverlayTrigger placement="top" overlay={tooltip}>
            <Thumbnail src={`../icons/${name}.png`} alt="70x70">
                <p>
                  <AppPassword value={value} show={show} className="AppThumbnail"/>
                </p>
                <Button bsStyle="primary" bsSize="small" className="AppThumbnailButton">Save</Button>

              </Thumbnail>
          </OverlayTrigger>

              /*<Thumbnail src="../icons/Plus.png" alt="by tFity">
              GitHub --> by Bo-Yi Wu
              Twitter --> by lonaug
              Facebook $$ Google Instagram --> by wikimedia commons $$ YaNiS2017

              https://facebook.github.io/react/docs/forms.html--> The select Tag
              */

        );
    }
}

export default AppThumbnail;
