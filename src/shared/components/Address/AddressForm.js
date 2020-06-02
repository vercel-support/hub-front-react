import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import tachyons from 'tachyons';

class AddressForm extends Component {
  render() {
    return (
      <div className="flex flex-column center justify-between h-100 mv3 box pa4 flexForm">
        <Form className="flex flex-column center w-100 w-50-ns h8">
          <div className="f4 fw6 mb3 items-center">
            <i className="material-icons">add_location</i> Novo Endereço
          </div>
          <Form.Group controlId="formBasicCEP" className="mv2">
            <Form.Label className="flex mv1">CEP</Form.Label>
            <Form.Control
              type="cep"
              placeholder="00000-000"
              className="flex w-100 self-end"
            />
          </Form.Group>
          <Form.Group controlId="formBasicStreet" className="mv2">
            <Form.Label className="flex mv1">Rua</Form.Label>
            <Form.Control
              type="stName"
              placeholder=""
              className="flex w-100 self-end"
            />
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
              />
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
              />
            </Form.Group>
          </div>
          <Form.Group controlId="formBasicData" className="mv2">
            <Form.Label className="flex mv1">Complemento</Form.Label>
            <Form.Control
              type="addDescription"
              placeholder=""
              className="flex w-100 self-end"
            />
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
              />
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
              />
            </Form.Group>
          </div>
          <Form.Group controlId="formBasicClient" className="mv2">
            <Form.Label className="flex mv1">Nome do destinatário</Form.Label>
            <Form.Control
              type="clientName"
              placeholder="Nome de quem vai receber o produto"
              className="flex w-100 self-end"
            />
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
