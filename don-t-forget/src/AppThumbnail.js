import React, {Component} from 'react';
import {Thumbnail,Button,Grid,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css';


class AppThumbnail extends Component {

    render() {
      return (

        <Grid>
            <Row>
            <Col xs={3} md={3}>
              <Thumbnail src="../icons/Google.png" alt="70x70">
                <h3 className="AppThumbnail">Google</h3>
                <p>
                   <input className="AppThumbnailInput" type="text" placeholder="Password" value="12345678"/>


  {/*                 <ReactPasswordStrength  https://www.npmjs.com/package/react-password-strength
  className="customStyling"
  style={{ display: 'none' }}
  minLength={5}
  minScore={2}
  scoreWords={['weak', 'okay', 'good', 'strong', 'stronger']}
  changeCallback={foo}
  inputProps={{ name: "password_input", autocomplete: "off" }}
/> */}
                </p>
                <p>
                  <Button bsStyle="primary">Edit</Button>&nbsp;
                  <Button bsStyle="default">Generate</Button>
                </p>
              </Thumbnail>
            </Col>
            </Row>
          </Grid>
        );
    }
}

export default AppThumbnail;
