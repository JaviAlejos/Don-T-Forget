import React, {Component} from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './css/AppThumbnail.css';
import AppThumbnail from './AppThumbnail';
import AppThumbnailForm from './AppThumbnailForm';
import {connect} from 'react-redux';


class AppThumbnaiList extends Component {

    render() {
      return (
        <Grid>
          <Row>
            {
                this.props.passwords.map(password=>{
                      return (
                        <Col xs={4} md={4}>
                          <AppThumbnail name={password.namePass} />
                        </Col>
                  );
                })}

            <Col xs={4} md={4}>
              <AppThumbnailForm/>
            </Col>
          </Row>
          </Grid>
        );
    }
}

var mapStateToProps=function(state) {
  return {
    passwords:state.passwords
  }
}

export default connect(mapStateToProps)(AppThumbnaiList);
