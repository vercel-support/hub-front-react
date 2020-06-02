import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import IdentifyLogin from './pages/IdentifyLogin';
import IdentifyRegister from './pages/IdentifyRegister';
import CheckoutAddress from './pages/CheckoutAddress';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/detalhe-do-produto" component={ProductDetail} />
        <Route path="/carrinho" component={Cart} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/checkout/identificacao" component={Checkout} />
        <Route path="/checkout/login" component={IdentifyLogin} />
        <Route path="/checkout/registrar" component={IdentifyRegister} />
        <Route path="/checkout/endereco" component={CheckoutAddress} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
