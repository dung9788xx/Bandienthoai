import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './js/container/cart/Cart';
import Home from './js/container/home/Home';
import Page404 from './js/container/pageNotFound/Page404';
import ProductDetail from './js/container/productDetail/ProductDetail';

function Root() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductDetail} />
        <Route exact path="/cart" component={Cart} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}

export default Root;
