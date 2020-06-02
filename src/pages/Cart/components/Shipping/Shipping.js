import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, Link, Value } from './styles';
import './Shipping.css';

class Shipping extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: '',
    };
    this.onShippingSelect.bind(this);
    this.getShipping.bind(this);
  }

  getShipping() {
    if (this.props.cart.loading) {
      const reqBody = {
        postalCode: this.props.cart.cep,
        items: [
          {
            sku: '',
            quantity: '',
            price: '',
            specialPrice: '',
          },
        ],
        storeId: this.props.cart.storeId,
      };
      fetch('http://localhost:3000/api/V2/shipping', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqBody),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.status != 200) {
            console.log(response);
            this.props.setError('Falha para obter dados dos produtos.');
          } else {
            this.props.setCartItems(response.data);
          }
        })
        .catch((err) => {
          this.props.setError('Não foi possível conectar com o servidor');
          console.log(err);
        })
        .finally(this.props.endLoading());
    }
  }

  onShippingSelect(value) {
    this.setState({ selectedOption: value });
    this.props.onShippingSelect(value);
  }

  render() {
    const cep = this.props.cep;
    const shipping = this.props.shipping;
    if (shipping.expressDelivery || shipping.economicalDelivery)
      return (
        <div className="fr self-start w-100 w-34-l pa2 shippingBox br3 mb3">
          <div className="flex items-center justify-between w-90">
            <i className="material-icons" style={{color: '#2983B9' }}>location_on</i>
            <div className="">
              <Text>Entregar em</Text>
              <Link className="pointer link" onClick={this.props.onChangeCEP}>(alterar cep)</Link>
            </div>
            <Value>{cep}</Value>
          </div>
          <div className="flex flex-column justify-around">
            {shipping.expressDelivery && shipping.expressDelivery.available ? (
              <div className="shippingOption w-100 flex pa1 justify-between mv1 br1 pointer">
                <input
                  type="radio"
                  value="express"
                  checked={
                    this.state.selectedOption == 'express' ? true : false
                  }
                  onChange={() => this.onShippingSelect('express')}
                  className="pointer link"
                />
                <div
                  className="w-70"
                  onClick={() => this.onShippingSelect('express')}
                >
                  Expressa em até {shipping.expressDelivery.time}{' '}
                  {shipping.expressDelivery.timeUnits == 'hours'
                    ? ' horas'
                    : shipping.expressDelivery.timeUnits == 'days'
                    ? ' dias úteis'
                    : null}
                </div>
                <div className="w-20 tr">
                  {shipping.expressDelivery.price > 0
                    ? 'R$ ' + shipping.expressDelivery.price
                    : 'Grátis'}
                </div>
              </div>
            ) : null}
            {shipping.economicalDelivery &&
            shipping.economicalDelivery.available ? (
              <div className="shippingOption w-100 flex pa1 justify-between  mv1 br1 pointer">
                <input
                  type="radio"
                  value="economic"
                  checked={
                    this.state.selectedOption == 'economic' ? true : false
                  }
                  onChange={() => this.onShippingSelect('economic')}
                  className="pointer link"
                />
                <div
                  className="w-70"
                  onClick={() => this.onShippingSelect('economic')}
                >
                  Econômica em até {shipping.economicalDelivery.time}{' '}
                  {shipping.economicalDelivery.timeUnits == 'hours'
                    ? ' horas'
                    : shipping.economicalDelivery.timeUnits == 'days'
                    ? ' dias úteis'
                    : null}
                </div>
                <div className="w-20 tr">
                  {shipping.economicalDelivery.price > 0
                    ? 'R$ ' + shipping.economicalDelivery.price
                    : 'Grátis'}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      );
    else
      return (
        <div className="fr self-start w-100 w-34-l pa2 shippingBox br3 mb3">
          <Text>Carregando...</Text>
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    cep: state.cart.cep,
    shipping: state.cart.shipping,
  };
};

export default connect(mapStateToProps)(Shipping);
