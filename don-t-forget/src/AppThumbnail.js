import React, {Component} from 'react';
import {Thumbnail,Button,Grid,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import AppPassword from './AppPassword';
import './css/App.css';


class AppThumbnail extends Component {

    render() {
      return (

        <Grid>
            <Row>
            <Col xs={3} md={3}>
          {/*    <Thumbnail src="../icons/Undefined.png" alt="by Maklay62">*/}
          {/*<Thumbnail src="../icons/Plus.png" alt="by tFity">
          GitHub --> by OpenClipart-Vectors
          Twitter --> by lonaug
          Facebook $$ Google Instagram --> by wikimedia commons

          */}
          <Thumbnail src="../icons/Google.png" alt="70x70">
                <h3 className="AppThumbnail">Google</h3>

  {/*                 <ReactPasswordStrength  https://www.npmjs.com/package/react-password-strength
  className="customStyling"
  style={{ display: 'none' }}
  minLength={5}
  minScore={2}
  scoreWords={['weak', 'okay', 'good', 'strong', 'stronger']}
  changeCallback={foo}
  inputProps={{ name: "password_input", autocomplete: "off" }}
/> */}
                <p>
                  <AppPassword value="12345678" show="true" className="AppThumbnail"/>
                </p>
                <Button bsStyle="primary" bsSize="small" className="AppThumbnail">Save</Button>
              </Thumbnail>
            </Col>
            </Row>
          </Grid>
        );
    }
}

export default AppThumbnail;
