import React, { Component } from 'react';
import { connect } from 'react-redux';
import MaskedInput from 'react-text-mask';
import { Button, Form } from 'react-bootstrap';
import tachyons from 'tachyons';
import './LoginForm.css';

class LoginForm extends Component {
  constructor(props) {
    super();

    this.state = {
      email: props.initialEmail ? props.initialEmail : '',
      emailError: '',
      password: '',
      passwordError: '',
    };
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }
  onChangePassword(e) {
    this.setState({ password: e.target.value, passwordError: '' });
  }
  onChangeEmail(e) {
    this.setState({ email: e.target.value.toLowerCase(), emailError: '' });
  }
  validateForm(e) {
    if (this.state.email === '') {
      this.setState({ emailError: '*campo obrigatório' });
      e.preventDefault();
    } else {
      if (!this.validateEmail()) {
        this.setState({ emailError: 'E-mail inválido' });
        e.preventDefault();
      }
    }
    if (this.state.password === '') {
      this.setState({ passwordError: '*campo obrigatório' });
      e.preventDefault();
    } else {
      if (this.state.password.length < 6) {
        this.setState({
          passwordError: 'Senha deve ter ao menos 6 caracteres',
        });
        e.preventDefault();
      }
    }
    if ((this.state.emailError === '' && this.state.email !== '') && (this.state.passwordError === '' && this.state.password !== '')) {
      this.props.onSubmit({ password: this.state.password, email: this.state.email });
    }
  }
  validateEmail() {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(this.state.email));
  }
  render() {
    return (
      <div className="flex flex-column center fl-ns justify-between h-100 mv3 box pa4 flexForm">
        <div className="f3 fw6 mb3 items-center">
          <i className="material-icons">account_circle</i> Identificação
        </div>
        <Form
          className="flex flex-column center w-100 h8"
          onSubmit={this.validateForm}
          noValidate
        >
          <Form.Group controlId="formBasicEmail" className="mv2">
            <Form.Label className="flex">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Seu email"
              className="flex w-100 self-end mv1"
              value={this.state.email}
              onChange={this.onChangeEmail}
              disabled={this.props.initialEmail ? true : false}
              required
            />
            <Form.Control.Feedback type="invalid" className="errorMessage">
              {this.state.emailError}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mv2">
            <Form.Label className="flex">Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Sua senha"
              className="flex w-100 self-end mv1"
              value={this.state.password}
              onChange={this.onChangePassword}
              required
            />
            <Form.Control.Feedback type="invalid" className="errorMessage">
              {this.state.passwordError}
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
          <div className="underline pointer link tc">esqueci minha senha</div>
        </Form>
      </div>
    );
  }
}

export default connect(null, null)(LoginForm);
