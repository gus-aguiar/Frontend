import React from 'react';
import ProductCardonCart from './ProductCardonCart';

class ShoppingCart extends React.Component {
  state = {
    cartProducts: [],
  };

  componentDidMount() {
    const dataCart = localStorage.getItem('produtoSalvo');
    this.setState({
      cartProducts: dataCart ? JSON.parse(dataCart) : [],
    });
  }

  render() {
    const { cartProducts } = this.state;
    return (
      <div>
        {cartProducts.length === 0
          ? (
            <p data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </p>
          )
          : cartProducts.map((product) => (
            (<ProductCardonCart key={ product.id } product={ product } />)
          ))}
      </div>

    );
  }
}

export default ShoppingCart;
