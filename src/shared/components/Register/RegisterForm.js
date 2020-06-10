import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Col } from 'react-bootstrap';
import InputMask from 'react-input-mask';
import tachyons from 'tachyons';
import './RegisterForm.css';

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      fname: '',
      lname: '',
      cpf: '',
      mobile: '',
      password: '',
      emailError: '',
      fnameError: '',
      lnameError: '',
      cpfError: '',
      mobileError: '',
      passwordError: '',
    };
    this.onRegister = this.onRegister.bind(this);
    this.onGoBack = this.onGoBack.bind(this);
    this.onChangeCPF = this.onChangeCPF.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeFname = this.onChangeFname.bind(this);
    this.onChangeLname = this.onChangeLname.bind(this);
    this.onChangeMobile = this.onChangeMobile.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.validateCPF = this.validateCPF.bind(this);
    this.validateMobile = this.validateMobile.bind(this);
  }
  onRegister() {
    console.log(this.state);
    this.props.onRegisterSubmit(this.state);
  }

  onGoBack() {
    this.props.onGoBack();
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value, emailError: '' });
  }
  onChangeFname(e) {
    this.setState({ fname: e.target.value, fnameError: '' });
  }
  onChangeLname(e) {
    this.setState({ lname: e.target.value, lnameError: '' });
  }
  onChangeCPF(e) {
    this.setState({ cpf: e.target.value, cpfError: '' });
  }
  onChangeMobile(e) {
    this.setState({ mobile: e.target.value, mobileError: '' });
  }
  onChangePassword(e) {
    this.setState({ password: e.target.value, passwordError: '' });
  }
  validateForm(e) {
    e.preventDefault();
    if (this.state.email === '') {
      this.setState({ emailError: '*campo obrigatório' });
    } else {
      if (!this.validateEmail()) {
        this.setState({ emailError: 'E-mail inválido' });
      }
    }
    if (this.state.fname === '') {
      this.setState({ fnameError: '*campo obrigatório' });
    }
    if (this.state.lname === '') {
      this.setState({ lnameError: '*campo obrigatório' });
    }
    if (this.state.cpf === '') {
      this.setState({ cpfError: '*campo obrigatório' });
    } else {
      if (!this.validateCPF()) {
        this.setState({ cpfError: 'CPF inválido' });
      }
    }
    if (this.state.mobile === '') {
      this.setState({ mobileError: '*campo obrigatório' });
    } else {
      if (!this.validateMobile()) {
        this.setState({ mobileError: 'Número de telefone inválido' });
      }
    }
    if (this.state.password === '') {
      this.setState({ passwordError: '*campo obrigatório' });
    } else {
      if (this.state.password.length < 6) {
        this.setState({
          passwordError: 'Senha deve ter ao menos 6 caracteres',
        });
      }
    }
    if (
      this.state.emailError === '' &&
      this.state.email !== '' &&
      this.state.passwordError === '' &&
      this.state.password !== ''
    ) {
      this.props.onSubmit({
        password: this.state.password,
        email: this.state.email,
        fname: this.state.fname,
        lname: this.state.lname,
        cpf: this.state.cpf,
        mobile: this.state.mobile,
      });
    }
  }
  validateEmail() {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(this.state.email));
  }
  validateCPF() {
    const re = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    return re.test(String(this.state.cpf));
  }
  validateMobile() {
    const mobile = this.state.mobile.split("_");
    return mobile.length == 1 ;
  }
  componentDidMount(){
    this.setState({email: this.props.userEmail})
  }
  render() {
    return (
      <div className="flex flex-column center justify-between h-100 mv3 box w-100 w-50-ns pa4">
        <div className="f3 fw6 mb3 items-center">
          <i className="material-icons">account_circle</i> Novo Cadastro
        </div>
        <Form
          className="flex flex-column center w-100 h8"
          onSubmit={this.validateForm}
          noValidate
        >
          <Form.Group controlId="formBasicEmail" className="mv2">
            <Form.Label className="flex mv1">e-mail</Form.Label>
            <Form.Control
              type="email"
              placeholder="email@email.com"
              className="flex w-100 self-end"
              value={this.state.email}
              onChange={this.onChangeEmail}
              disabled={this.props.userEmail? true : false}
            />
            <Form.Control.Feedback type="invalid" className="errorMessage">
              {this.state.emailError}
            </Form.Control.Feedback>
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
              <Form.Control.Feedback type="invalid" className="errorMessage">
                {this.state.fnameError}
              </Form.Control.Feedback>
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
              <Form.Control.Feedback type="invalid" className="errorMessage">
                {this.state.lnameError}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="flex nameForm justify-between">
            <Form.Group
              controlId="formBasicCPF "
              className="mv2 flex flex-column formLine"
            >
              <Form.Label className="flex mv1">CPF</Form.Label>
              <InputMask mask="999.999.999-99" maskChar="_" className="flex w-100 self-start"
                value={this.state.cpf}
                onChange={this.onChangeCPF}
                  id="cpf"
                />
              {/* {() => <Form.Control
                type="id"
                placeholder="xxx.xxx.xxx-xx"
                className="flex w-100 self-start"
                value={this.state.cpf}
                onChange={this.onChangeCPF}
              />}
              </InputMask> */}
              <Form.Control.Feedback type="invalid" className="errorMessage">
                {this.state.cpfError}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              controlId="formBasicMobile"
              className="mv2 flex flex-column formLine"
            >
              <Form.Label className="flex mv1">celular</Form.Label>
              <InputMask mask="(99) 9 9999-9999" maskChar="_" className="flex w-100"
                value={this.state.mobile}
                onChange={this.onChangeMobile} id="mobile" />
              {/* <Form.Control
                type="phone"
                placeholder="(xx) x xxxx-xxxx"
                className="flex w-100"
                value={this.state.mobile}
                onChange={this.onChangeMobile}
              /> */}
              <Form.Control.Feedback type="invalid" className="errorMessage">
                {this.state.mobileError}
              </Form.Control.Feedback>
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
            <Form.Control.Feedback type="invalid" className="errorMessage">
              {this.state.passwordError}
            </Form.Control.Feedback>
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
          <div className="underline pointer link tc" onClick={this.onGoBack}>
            voltar
          </div>
        </Form>
      </div>
    );
  }
}



export default connect(null, null)(RegisterForm);
