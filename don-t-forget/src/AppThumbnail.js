import React, {Component} from 'react';
import {Thumbnail,Button,Grid,Row,Col,Radio} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import AppPassword from './AppPassword';
import './css/components/AppThumbnail/AppThumbnail.css';


class AppThumbnail extends Component {

    render() {
      return (

        <Grid>
          <Row>
            <p> <Radio checked readOnly inline className="AppThumbnailRadio"> See Passwords</Radio></p>
          </Row>
          <Row>
            <Col xs={3} md={3}>
              <Thumbnail src="../icons/Google.png" alt="70x70">
                <h3 className="AppThumbnail">Google</h3>
                <p>
                  <AppPassword value="12345678" show="true" className="AppThumbnail"/>
                </p>
                <Button bsStyle="primary" bsSize="small" className="AppThumbnailButton">Save</Button>

              </Thumbnail>

              {/*<Thumbnail src="../icons/Plus.png" alt="by tFity">
              GitHub --> by Bo-Yi Wu
              Twitter --> by lonaug
              Facebook $$ Google Instagram --> by wikimedia commons $$ YaNiS2017

              https://facebook.github.io/react/docs/forms.html--> The select Tag
              */}
            </Col>
            <Col xs={3} md={3}>
              <Thumbnail src="../icons/Plus.png" alt="70x70">
              <select className="AppThumbnailSelect">
                <option value="Google">Google</option>
                <option value="Facebook">Facebook</option>
                <option value="Instagram">Instagram</option>
                <option value="GitHub">GitHub</option>
                <option value="Twitter">Twitter</option>
                <option value="Twitter">Other</option>
              </select>

                <p>
                  <AppPassword value="12345678" show="true" className="AppThumbnail"/>
                </p>
                <Button bsStyle="primary" bsSize="small" className="AppThumbnailButtonAdd">Add New Password</Button>

              </Thumbnail>

              {/*<Thumbnail src="../icons/Plus.png" alt="by tFity">
              GitHub --> by OpenClipart-Vectors
              Twitter --> by lonaug
              Facebook $$ Google Instagram --> by wikimedia commons

              */}
            </Col>

          </Row>
          </Grid>
        );
    }
}

export default AppThumbnail;
