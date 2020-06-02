import React, { Component } from 'react';
import { connect } from 'react-redux';
import MaskedInput from 'react-text-mask';
import { Button, Form } from 'react-bootstrap';
import tachyons from 'tachyons';
import './EmailForm.css';

class EmailForm extends Component {
  constructor(){
    super();
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      email: ''
    }
  }
  onFormSubmit(){
    this.props.onEmailFormSubmit(this.state);
  }
  onChange(e){
    this.setState({email: e.target.value});
  }
  render() {
    return (
      <div className="flex flex-column center fl-ns justify-between h-100 mv3 box pa4 w-100 w-50-ns">
        <div className="f3 fw6 mb3 items-center">
          <i className="material-icons">account_circle</i> Identificação
        </div>
        <div className="">Para finalizar a compra, informe seu e-mail.</div>
        <Form className="flex flex-column center w-100 h8" onSubmit={this.onFormSubmit}>
          <Form.Group controlId="formBasicEmail" className="mv2">
            <Form.Label className="flex">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Seu email"
              className="flex w-100 self-end mv1"
              value={this.state.email}
              onChange={this.onChange}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="mv3 pa2 br2"
            style={{ borderWidth: 'inherit' }}
          >
            Entrar
          </Button>
        </Form>
      </div>
    );
  }
}

export default connect(null, null)(EmailForm);
