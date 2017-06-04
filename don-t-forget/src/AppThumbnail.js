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
          <Thumbnail >
              <p>
                <OverlayTrigger placement="top" overlay={tooltip}>
                  <img src={`../icons/${name}.png`} alt="70x70" className="AppThumbnailImage"/>
                </OverlayTrigger>
              </p>
              <p>
                <AppPassword value={value} show={show} className="AppThumbnailCommon AppThumbnail"/>
              </p>
                <Button bsStyle="primary" bsSize="small" className="AppThumbnailCommon AppThumbnailButton">Save</Button>

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

export default AppThumbnail;
