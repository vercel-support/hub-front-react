import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import ProductDetail from './pages/ProductDetail';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/detalhe-do-produto" component={ProductDetail} />
      </Switch>
    </BrowserRouter>
  );
}
