import React, {Component} from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './css/components/AppThumbnail.css';
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
                        <Col xs={3} md={3}>
                          <AppThumbnail name={password.namePass} />
                        </Col>
                  );
                })}

            <Col xs={3} md={3}>
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
