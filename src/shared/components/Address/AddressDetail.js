import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AddressDetail.css'

class AddressDetail extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
      return (
        <div className="fr self-start w-100 pa2 addressBox br3 mb3">
          <div>Carregando...</div>
        </div>
      );
  }
}


export default connect(null, null)(AddressDetail);
