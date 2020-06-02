import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Col } from 'react-bootstrap';
import loginActions from '../../actions';
import tachyons from 'tachyons';
import './RegisterForm.css';

class RegisterForm extends Component {
  render() {
    return (
      <div className="flex flex-column center justify-between h-100 mv3 box pa4 flexForm">
        <div className="f3 fw6 mb3 items-center">
          <i className="material-icons">account_circle</i> Novo Cadastro
        </div>
        <Form className="flex flex-column center w-100 w-50-ns h8">
          <Form.Group controlId="formBasicEmail" className="mv2">
            <Form.Label className="flex mv1">e-mail</Form.Label>
            <Form.Control
              type="email"
              placeholder="email@email.com"
              className="flex w-100 self-end"
            />
          </Form.Group>
          <div className="flex nameForm justify-between">
            <Form.Group
              controlId="formBasicFname "
              className="mv2 flex flex-column formLine"
            >
              <Form.Label className="flex mv1">nome</Form.Label>
              <Form.Control
                type="fName"
                placeholder="Nome"
                className="flex w-100 self-start"
              />
            </Form.Group>
            <Form.Group
              controlId="formBasicLname"
              className="mv2 flex flex-column formLine"
            >
              <Form.Label className="flex mv1">sobrenome</Form.Label>
              <Form.Control
                type="lname"
                placeholder="Sobrenome"
                className="flex w-100"
              />
            </Form.Group>
          </div>
          <div className="flex nameForm justify-between">
            <Form.Group
              controlId="formBasicCPF "
              className="mv2 flex flex-column formLine"
            >
              <Form.Label className="flex mv1">CPF</Form.Label>
              <Form.Control
                type="cpf"
                placeholder="xxx.xxx.xxx-xx"
                className="flex w-100 self-start"
              />
            </Form.Group>
            <Form.Group
              controlId="formBasicMobile"
              className="mv2 flex flex-column formLine"
            >
              <Form.Label className="flex mv1">celular</Form.Label>
              <Form.Control
                type="mobile"
                placeholder="(xx) x xxxx-xxxx"
                className="flex w-100"
              />
            </Form.Group>
          </div>
          
          <Form.Group controlId="formBasicPassword" className="mv2">
            <Form.Label className="flex mv1">senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="No mínimo 6 caracteres"
              className="flex w-100 self-end"
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="mv3 pa2 br2"
            style={{ borderWidth: 'inherit' }}
          >
            Cadastrar
          </Button>
          <div className="underline pointer link tc">voltar</div>
        </Form>
      </div>
    );
  }
}

export default connect(null, null)(RegisterForm);
