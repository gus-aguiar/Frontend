import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  state = {
    products: [],
  };

  render() {
    const { products } = this.state;
    return (
      <div>
        <form>
          <input type="text" />
          {products.length === 0 && (
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          )}
        </form>
        <Link to="/cart" data-testid="shopping-cart-button"> Carrinho de Compras</Link>
      </div>
    );
  }
}

export default Home;
