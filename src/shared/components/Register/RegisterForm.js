import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Col } from 'react-bootstrap';
import loginActions from '../../../pages/Login/actions';
import tachyons from 'tachyons';
import './RegisterForm.css';

class RegisterForm extends Component {
  constructor(){
    super();
    this.state={
      email: '',
      fname: '',
      lname: '',
      cpf: '',
      mobile: '',
      password: ''
    }
    this.onRegister = this.onRegister.bind(this)
    this.onGoBack = this.onGoBack.bind(this);
    this.onChangeCPF = this.onChangeCPF.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeFname = this.onChangeFname.bind(this);
    this.onChangeLname = this.onChangeLname.bind(this);
    this.onChangeMobile = this.onChangeMobile.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }
  onRegister() {
    console.log(this.state)
    this.props.onRegisterSubmit(this.state);
  }

  onGoBack(){
    this.props.onGoBack();
  }

  onChangeEmail(e){
    this.setState({email: e.target.value})
  }
  onChangeFname(e){
    this.setState({fname: e.target.value})
  }
  onChangeLname(e){
    this.setState({lname: e.target.value})
  }
  onChangeCPF(e){
    this.setState({cpf: e.target.value})
  }
  onChangeMobile(e){
    this.setState({mobile: e.target.value})
  }
  onChangePassword(e){
    this.setState({password: e.target.value})
  }

  render() {
    return (
      <div className="flex flex-column center justify-between h-100 mv3 box w-100 w-50-ns pa4">
        <div className="f3 fw6 mb3 items-center">
          <i className="material-icons">account_circle</i> Novo Cadastro
        </div>
        <Form className="flex flex-column center w-100 h8" onSubmit={this.onRegister}>
          <Form.Group controlId="formBasicEmail" className="mv2">
            <Form.Label className="flex mv1">e-mail</Form.Label>
            <Form.Control
              type="email"
              placeholder="email@email.com"
              className="flex w-100 self-end"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </Form.Group>
          <div className="flex nameForm justify-between">
            <Form.Group
              controlId="formBasicFname "
              className="mv2 flex flex-column formLine"
            >
              <Form.Label className="flex mv1">nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome"
                className="flex w-100 self-start"
                value={this.state.fname}
                onChange={this.onChangeFname}
              />
            </Form.Group>
            <Form.Group
              controlId="formBasicLname"
              className="mv2 flex flex-column formLine"
            >
              <Form.Label className="flex mv1">sobrenome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Sobrenome"
                className="flex w-100"
                value={this.state.lname}
                onChange={this.onChangeLname}
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
                type="number"
                placeholder="xxx.xxx.xxx-xx"
                className="flex w-100 self-start"
                value={this.state.cpf}
                onChange={this.onChangeCPF}
              />
            </Form.Group>
            <Form.Group
              controlId="formBasicMobile"
              className="mv2 flex flex-column formLine"
            >
              <Form.Label className="flex mv1">celular</Form.Label>
              <Form.Control
                type="number"
                placeholder="(xx) x xxxx-xxxx"
                className="flex w-100"
                value={this.state.mobile}
                onChange={this.onChangeMobile}
              />
            </Form.Group>
          </div>
          
          <Form.Group controlId="formBasicPassword" className="mv2">
            <Form.Label className="flex mv1">senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="No mínimo 6 caracteres"
              className="flex w-100 self-end"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="mv3 pa2 br2 pointer"
            style={{ borderWidth: 'inherit' }}
            onClick={this.register}
          >
            Cadastrar
          </Button>
          <div className="underline pointer link tc" onClick={this.onGoBack}>voltar</div>
        </Form>
      </div>
    );
  }
}

export default connect(null, null)(RegisterForm);
