import React, { Component } from 'react';
import { connect } from 'react-redux';
import MaskedInput from 'react-text-mask';
import { Button, Form } from 'react-bootstrap';
import tachyons from 'tachyons';
import './EmailForm.css';

class EmailForm extends Component {
  constructor(){
    super();
    this.validateForm = this.validateForm.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      customerEmail: '',
      emailError: '',
    }
  }
  validateForm(e){
    e.preventDefault();
    if (this.state.customerEmail == ''){
      this.setState({emailError: 'Email é um campo obrigatório!'})
    }
    else {
      if (!this.validateEmail()){
        this.setState({emailError: 'O e-mail informado não é válido!'})
      }
      else {
        this.props.onEmailFormSubmit(this.state);
      }
    }
  }
  validateEmail() {
    console.log('validateEmail')
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(this.state.customerEmail));
  }
  onChange(e){
    this.setState({customerEmail: e.target.value});
  }
  render() {
    return (
      <div className="flex flex-column center fl-ns justify-between h-100 mv3 box pa4 w-100 w-50-ns">
        <div className="f3 fw6 mb3 items-center">
          <i className="material-icons">account_circle</i> Identificação
        </div>
        <div className="">Para finalizar a compra, informe seu e-mail.</div>
        <Form className="flex flex-column center w-100 h8" onSubmit={this.validateForm} noValidate>
          <Form.Group controlId="formBasicEmail" className="mv2">
            <Form.Label className="flex">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Seu email"
              className="flex w-100 self-end mv1"
              value={this.state.email}
              onChange={this.onChange}
            />
             <Form.Control.Feedback type="invalid" className="errorMessage">
              {this.state.emailError}
            </Form.Control.Feedback>
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
