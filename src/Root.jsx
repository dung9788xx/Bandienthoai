import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './js/components/screens/Home';
import Page404 from './js/components/screens/Page404';
import ProductDetail from './js/components/screens/productDetail/ProductDetail';

function Root() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductDetail} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}

export default Root;
