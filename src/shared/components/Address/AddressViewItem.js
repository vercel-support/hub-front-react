import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import tachyons from 'tachyons';

class AddressViewItem extends Component {
  render() {
    return (
      <div className="flex flex-column center justify-between h-100 mv3 box pa2 flexForm">
        <div className="f4 fw6 mb3 items-center">
          <i className="material-icons">location_on</i> Endereços Cadastrados
        </div>
        <AddressDetail />
      </div>
    );
  }
}

export default connect(null, null)(AddressViewItem);
