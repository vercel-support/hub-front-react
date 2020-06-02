import React, { Component } from 'react';
import { cartActions } from '../../actions';
import { connect } from 'react-redux';
import {
  Price,
  ProdutoIndiponivel,
  SpecialPrice,
  Quantity,
  Select,
  Option,
} from './styles';
import tachyons from 'tachyons';
import './CartListItems.css';

class CartListItems extends Component {
  constructor() {
    super();
    this.removeItem.bind(this);
    this.formatOptions.bind(this);
    this.formatQuantity.bind(this);
    this.state = {
      quantity: 0,
      sku: null,
      specialPrice: null,
      price: null,
      unavailable: false,
    }
  }
  removeItem(sku) {
    this.props.onDeleteItem(sku);
  }
  formatOptions(quantity){
    let options = [];
    for (var i = 0; i <= quantity; i++) {
      options.push(<Option value={i} key={i} selected={i === this.state.quantity? true : false}> {i} </Option>);
    }
    return options;
  };
  formatQuantity(quantity){
    if (quantity > 0) return <Select className="self-end pointer" onChange={this.onChangeQuantity.bind(this)}>{this.formatOptions(quantity)}</Select>;
    else 
    {
      return (
      <ProdutoIndiponivel className="w-10-ns w-80 self-end justify-between">
        {quantity}
      </ProdutoIndiponivel>)
    }
  };
  onChangeQuantity(event){
    this.props.onSelectQuantity(this.state, parseInt(event.target.value));
  }
  componentDidMount() {
    this.setState({quantity: 1, sku: this.props.sku, price: this.props.price, specialPrice: this.props.specialPrice})
  }
  render() {
    let Quantity = this.formatQuantity(this.props.quantity);
    return (
      <div className="w-100 w-60-l flex flex-wrap pa2 justify-between box br3 mb2 shadow-5">
        <img src={this.props.image} className="w-10 h2" />
        <div className="w-90 tl">
          <div className="w-100 tl productName">{this.props.name}</div>
          <div className="details w-100 flex">
            <div className="prices w-60 mt2">
              <div>
                {this.props.formatedPrice ? <Price>{this.props.formatedPrice}</Price> : null}
                <SpecialPrice>{this.props.finalPrice}</SpecialPrice>
              </div>
            </div>
            <div className="actions flex w-40 justify-between">
              {Quantity}
              <div
                onClick={() => this.removeItem(this.props.sku)}
                className="w-5-ns self-end pointer link w-20 self-end"
              >
                <i className="material-icons">delete</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};
export default connect(null, mapDispatchToProps)(CartListItems);
