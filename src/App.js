import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/cart" component={ ShoppingCart } />
      <Route
        exact
        path="/productdetail/:id"
        render={ (props) => <ProductDetail { ...props } /> }
      />
    </Switch>
  );
}

export default App;
