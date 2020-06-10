import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import InputMask from 'react-input-mask';
import tachyons from 'tachyons';

class AddressForm extends Component {
  constructor() {
    super();
    this.state = {
      cep: '',
      cepError: '',
      stName: '',
      stNameError: '',
      stNumber: '',
      stNumberError: '',
      suburb: '',
      suburbError: '',
      addDescription: '',
      addDescriptionError: '',
      city: '',
      cityError: '',
      state: '',
      stateError: '',
      receiver: '',
      receiverError: '',
    };
    this.onAddDescriptionChange = this.onAddDescriptionChange.bind(this);
    this.onStNameChange = this.onStNameChange.bind(this);
    this.onStNumberChange = this.onStNumberChange.bind(this);
    this.onSuburbChange = this.onSuburbChange.bind(this);
    this.onCityChange = this.onCityChange.bind(this);
    this.onStateChange = this.onStateChange.bind(this);
    this.onReceiverChange = this.onReceiverChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.validateCEP = this.validateCEP.bind(this);
  }

  onCepChange(e) {
    this.setState({ cep: e.target.value, cepError: '' });
  }
  onStNameChange(e) {
    this.setState({ stName: e.target.value, stNameError: '' });
  }
  onStNumberChange(e) {
    this.setState({ stNumber: e.target.value, stNumberError: '' });
  }
  onSuburbChange(e) {
    this.setState({ suburb: e.target.value, suburbError: '' });
  }
  onAddDescriptionChange(e) {
    this.setState({ addDescription: e.target.value, addDescriptionError: '' });
  }
  onCityChange(e) {
    this.setState({ city: e.target.value, cityError: '' });
  }
  onStateChange(e) {
    this.setState({ state: e.target.value, stateError: '' });
  }
  onReceiverChange(e) {
    this.setState({ receiver: e.target.value, receiverError: '' });
  }
  validateForm(e) {
    e.preventDefault();
    console.log('validateForm');
    if (this.state.cep == ''){
      this.setState({ cepError: 'CEP é obrigatório!' });
    }
    else if (!this.validateCEP) {
      this.setState({ cepError: 'O CEP informado é inválido!' });
    }
    if (this.state.stName == ''){
      this.setState({ stNameError: 'Rua é obrigatório!' });
    }
    if (this.state.stNumber == ''){
      this.setState({ stNumberError: 'Número é obrigatório!' });
    }
    if (this.state.suburb == ''){
      this.setState({ suburbError: 'Bairro é obrigatório!' });
    }
    if (this.state.city == ''){
      this.setState({ cityError: 'Cidade é obrigatório!' });
    }
    if (this.state.state == ''){
      this.setState({ stateError: 'Estado é obrigatório!' });
    }
    if (this.state.receiver == ''){
      this.setState({ receiverError: 'Destinatário é obrigatório!' });
    }

  }
  validateCEP() {
    console.log('validatecep');
    var re = /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/;
    re.test(this.state.cep);
  }
  render() {
    return (
      <div className="flex flex-column center justify-between h-100 mv3 box pa4 flexForm">
        <Form
          className="flex flex-column center w-100 w-50-ns h8"
          noValidate
          onSubmit={this.validateForm}
        >
          <div className="f4 fw6 mb3 items-center">
            <i className="material-icons">add_location</i> Novo Endereço
          </div>
          <Form.Group controlId="formBasicCEP" className="mv2">
            <Form.Label className="flex mv1">CEP</Form.Label>
            <InputMask
              mask="99999-999"
              maskChar="_"
              className="flex w-100 self-start"
              value={this.state.cep}
              onChange={this.onCepChange.bind(this)}
              id="cep"
            />
            <Form.Control.Feedback type="invalid" className="errorMessage">
              {this.state.cepError}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formBasicStreet" className="mv2">
            <Form.Label className="flex mv1">Rua</Form.Label>
            <Form.Control
              type="stName"
              placeholder=""
              className="flex w-100 self-end"
              value={this.state.stName}
              onChange={this.onStNameChange}
            />
            <Form.Control.Feedback type="invalid" className="errorMessage">
              {this.state.stNameError}
            </Form.Control.Feedback>
          </Form.Group>
          <div className="flex nameForm justify-between">
            <Form.Group
              controlId="formBasicFname "
              className="mv2 flex flex-column formLine"
            >
              <Form.Label className="flex mv1">Número</Form.Label>
              <Form.Control
                type="stNumber"
                placeholder="Número"
                className="flex w-100 self-start"
                value={this.state.stNumber}
                onChange={this.onStNumberChange}
              />
              <Form.Control.Feedback type="invalid" className="errorMessage">
                {this.state.stNumberError}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              controlId="formBasicSuburb"
              className="mv2 flex flex-column formLine"
            >
              <Form.Label className="flex mv1">Bairro</Form.Label>
              <Form.Control
                type="suburb"
                placeholder="Bairro"
                className="flex w-100"
                value={this.state.suburb}
                onChange={this.onSuburbChange}
              />
              <Form.Control.Feedback type="invalid" className="errorMessage">
                {this.state.suburbError}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          <Form.Group controlId="formBasicData" className="mv2">
            <Form.Label className="flex mv1">Complemento</Form.Label>
            <Form.Control
              type="addDescription"
              placeholder=""
              className="flex w-100 self-end"
              value={this.state.addDescription}
              onChange={this.onAddDescriptionChange}
            />
            <Form.Control.Feedback type="invalid" className="errorMessage">
              {this.state.addDescriptionError}
            </Form.Control.Feedback>
          </Form.Group>
          <div className="flex nameForm justify-between">
            <Form.Group
              controlId="formBasicCity "
              className="mv2 flex flex-column formLine"
            >
              <Form.Label className="flex mv1">Cidade</Form.Label>
              <Form.Control
                type="city"
                placeholder="Cidade"
                className="flex w-100 self-start"
                value={this.state.city}
                onChange={this.onCityChange}
              />
              <Form.Control.Feedback type="invalid" className="errorMessage">
                {this.state.cityError}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              controlId="formBasicState"
              className="mv2 flex flex-column formLine"
            >
              <Form.Label className="flex mv1">Estado</Form.Label>
              <Form.Control
                type="state"
                placeholder="Bairro"
                className="flex w-100"
                value={this.state.state}
                onChange={this.onStateChange}
              />
              <Form.Control.Feedback type="invalid" className="errorMessage">
                {this.state.stateError}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          <Form.Group controlId="formBasicClient" className="mv2">
            <Form.Label className="flex mv1">Nome do destinatário</Form.Label>
            <Form.Control
              type="receiver"
              placeholder="Nome de quem vai receber o produto"
              className="flex w-100 self-end"
              value={this.state.receiver}
              onChange={this.onReceiverChange}
            />
            <Form.Control.Feedback type="invalid" className="errorMessage">
              {this.state.receiverError}
            </Form.Control.Feedback>
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="mv3 pa2 br2"
            style={{ borderWidth: 'inherit' }}
          >
            Entregar nesse endereço
          </Button>
        </Form>
      </div>
    );
  }
}

export default connect(null, null)(AddressForm);
