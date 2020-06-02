import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import tachyons from 'tachyons';

class GoToRegister extends Component {
  constructor(){
    super();
    this.onButtonClick = this.onButtonClick.bind(this);
  }
    onButtonClick(){
        this.props.onSignUpClick();
    }
  render() {
    return (
      <div className="flex flex-column center fr-ns justify-between h-100 mv3 box pa4 flexForm">
          <div className="f3 fw6 mb3 items-center">
            <i className="material-icons" >account_circle</i> Cadastro
          </div>
        <div>Criar nova conta, com outro e-mail</div>
        <Button
          variant="primary"
          type="submit"
          className="mv3 pa2 br2"
          style={{ borderWidth: 'inherit' }}
          onClick={() => this.onButtonClick()}
        >
          Faça seu Cadastro
        </Button>
      </div>
    );
  }
}

export default connect(null, null)(GoToRegister);
