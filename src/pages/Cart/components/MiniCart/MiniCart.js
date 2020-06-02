import React from 'react';
import { connect } from 'react-redux';
import { CartIcon, Counter, CounterText } from './styles';

function MiniCart(props) {
  const quantity = props.quantityItens;
  return (
    <CartIcon>
      c
       <Counter><CounterText>{quantity > 0 && quantity < 99? quantity : quantity >= 99 ? '99+' : ''} </CounterText></Counter>
    </CartIcon>
  );
}

const mapStateToProps = (state) => {
  return {
    quantityItens: state.cart.totalQuantity,
  };
};

export default connect(mapStateToProps)(MiniCart);
