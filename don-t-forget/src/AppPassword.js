import React, { Component } from 'react';
import zxcvbn from "zxcvbn";
import generator from "generate-password";
import {Glyphicon,OverlayTrigger,Popover,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './css/components/AppPassword.css';

class AppPassword extends Component {

  constructor(props) {
    super(props);
    const { value } =props;
    if(value)
      this.state = {password:value};
    else
      this.state = {password:""};

    this.generatePassword=this.generatePassword.bind(this);

  }

  handlePassChange = (event) => {
    this.setState({ password: event.target.value });
    if (this.props.handleFieldChange!=undefined)
      this.props.handleFieldChange(event.target.value);
  };

  generatePassword(){
    let { length,numbers,symbols,uppercase } =this.props;
    if (typeof length === 'undefined' || !length)
      length=10;
    if (typeof uppercase === 'undefined' || !uppercase)
      uppercase="true";

    const pass=generator.generate({ length,numbers,symbols,uppercase });
    this.setState({password:pass});
    if (this.props.handleFieldChange!=undefined)
      this.props.handleFieldChange(pass);
  }

  popoverGeneratePassword(){
        return (
          <Popover id="popover-trigger-hover-focus" title="Generate Password">
            <span>Do you need a password?</span>
            <Button bsSize="small" className="StandardComponent" bsStyle="warning" onClick={this.generatePassword}>Generate</Button>
          </Popover>
    );}


renderInput(){
  const { show,className,classNameGlyphicon} =this.props;
  var component;

  const res=zxcvbn(this.state.password);
  const score=res.score;

  switch (score) {
    case 0:
    case 1:
        component= <Glyphicon className={`StandardComponent GlyphiconDanger ${classNameGlyphicon}`} glyph="glyphicon glyphicon-remove"/>; break;
      case 2:
        component= <Glyphicon className={`StandardComponent GlyphiconWarning ${classNameGlyphicon}`} glyph="glyphicon glyphicon-warning-sign"/>; break;
      case 3:
      case 4:
        component= <Glyphicon className={`StandardComponent GlyphiconOk ${classNameGlyphicon}`}   glyph="glyphicon glyphicon-ok"/>;break;
    }

    let placeholder=""
    if(this.state.password)
      placeholder="";
    else
      placeholder="password";

    if (!show)
      return (
        <div>
          <input type="password" placeholder={placeholder} value={this.state.password} onChange={this.handlePassChange} className={className}/>
            {component}
        </div>
      );
    else
      return (
        <div>
        <input type="text" placeholder={placeholder} value={this.state.password} onChange={this.handlePassChange} className={className}/>
        {component}
      </div>
    );
  }

render() {
    const popover=this.popoverGeneratePassword();
    return (
        <OverlayTrigger delayHide={700} placement="bottom" overlay={popover}>
          {this.renderInput()}
        </OverlayTrigger>
    );
  }
}

export default AppPassword;
