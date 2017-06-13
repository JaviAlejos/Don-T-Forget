import React, {Component} from 'react';
import {Grid,Row,Col,Radio} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './css/components/AppThumbnail/AppThumbnail.css';
import AppThumbnail from './AppThumbnail';
import AppThumbnailForm from './AppThumbnailForm';
import {connect} from 'react-redux';


class AppThumbnaiList extends Component {

  constructor() {
    super();
    this.state = {password:false};
    this.showPassword=this.showPassword.bind(this);
  }

showPassword(event){
  this.setState({ password:!this.state.password});
}


    render() {
      return (

        <Grid>
          <Row>
            <p> <Radio checked={this.state.password} inline className="AppThumbnailRadio" onClick={this.showPassword}> See Passwords</Radio></p>
          </Row>
          <Row>

              {
                this.props.passwords.map(password=>{
                    if (password.namePass!='')
                      return (
                        <Col xs={3} md={3}>
                          <AppThumbnail show={this.state.password} value={password.pass} name={password.namePass} />
                        </Col>
                  );
                })}


            <Col xs={3} md={3}>
              <AppThumbnailForm show={this.state.password}/>
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
