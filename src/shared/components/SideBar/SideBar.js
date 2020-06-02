import React, { Component } from 'react';
import { connect } from 'react-redux';
import tachyons from 'tachyons';
import CartListItems from '../../../pages/Cart/components/CartListItems/CartListItems'
import './SideBar.css';

let itemsView = []

class SideBar extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
      itemsView = []
    const items = this.props.storageItems;
    const selectedItems = this.props.cartItems;
    items.forEach((item) => {
      const selected = selectedItems.filter((sItem) => sItem.sku == item.sku);
      console.log(selected);
      item.quantity = selected[0].quantity;
      itemsView.push(item);
    });
    console.log(itemsView.length);
      return (
        <div className="self-start pa2 br3 mb3">
          <div className="flex f4 b">
            Resumo
          </div>
          <div className="center mv3">
              {itemsView.length > 0
                ? itemsView.map((item) => (
                    <CartListItems
                      name={item.name}
                      quantity={item.quantity}
                      price={item.price}
                      image={item.image}
                      specialPrice={item.specialPrice}
                      finalPrice={item.finalPrice}
                      formatedPrice={item.formatedPrice}
                      key={item.sku}
                      sku={item.sku}
                      className=""
                    />
                  ))
                : 'Falha ao exibir o items do carrinho'}
            </div>
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
    storageItems: state.cart.storageItems,
  };
};

export default connect(mapStateToProps)(SideBar);
