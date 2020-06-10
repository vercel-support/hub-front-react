import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

function MiniCart(props) {
  const quantity = props.quantityItens;
  return (
    <div className="f2 link dib mr3 mr4-ns">
      <Link to="/carrinho" className="white dim">
      <i className="material-icons" >shopping_cart</i>
      </Link>
       {/* <Counter><CounterText>{quantity > 0 && quantity < 99? quantity : quantity >= 99 ? '99+' : ''} </CounterText></Counter> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    quantityItens: state.cart.totalQuantity,
  };
};

export default connect(mapStateToProps)(MiniCart);
