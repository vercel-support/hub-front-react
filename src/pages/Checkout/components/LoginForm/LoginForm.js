import React, { Component } from 'react';
import { connect } from 'react-redux';
import MaskedInput from 'react-text-mask';
import { Button, Form } from 'react-bootstrap';
import loginActions from '../../actions';
import tachyons from 'tachyons';
import './LoginForm.css';

class Login extends Component {
  render() {
    return (
      <div className="flex flex-column center fl-ns justify-between h-100 mv3 box pa4 flexForm">
        <div className="f3 fw6 mb3 items-center">
          <i className="material-icons">account_circle</i> Identificação
        </div>
        <Form className="flex flex-column center w-100 h8">
          <Form.Group controlId="formBasicEmail" className="mv2">
            <Form.Label className="flex">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Seu email"
              className="flex w-100 self-end"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mv2">
            <Form.Label className="flex">Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Sua senha"
              className="flex w-100 self-end"
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
          <div className="underline pointer link tc">esqueci minha senha</div>
        </Form>
      </div>
    );
  }
}

export default connect(null, null)(Login);
