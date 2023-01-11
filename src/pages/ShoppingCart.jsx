import React from 'react';

class ShoppingCart extends React.Component {
  state = {
    cartProducts: [],
  };

  render() {
    const { cartProducts } = this.state;
    return (
      <div>
        {cartProducts.length === 0 && (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        )}
      </div>

    );
  }
}

export default ShoppingCart;
