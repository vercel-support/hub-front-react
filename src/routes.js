import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './shared/components/Header/Header'
import Main from './pages/Main';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Login from './pages/Login';
// import Checkout from './pages/Checkout';
import CheckoutEmail from './pages/CheckoutEmail';
import IdentifyLogin from './pages/IdentifyLogin';
import IdentifyRegister from './pages/IdentifyRegister';
import CheckoutAddress from './pages/CheckoutAddress';
import CollapsibleMenu from './shared/components/CollapsibleMenu/CollapsibleMenu';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Header} />
      </Switch>
      <Switch>
        <Route path="/" component={CollapsibleMenu} />
      </Switch>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/detalhe-do-produto" component={ProductDetail} />
        <Route path="/carrinho" component={Cart} />
        {/* <Route path="/checkout" exact component={Checkout} /> */}
        <Route path="/checkout/identificacao" component={CheckoutEmail} />
        <Route path="/checkout/login" component={IdentifyLogin} />
        <Route path="/checkout/registrar" component={IdentifyRegister} />
        <Route path="/checkout/endereco" component={CheckoutAddress} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
