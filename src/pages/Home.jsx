import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class Home extends React.Component {
  state = {
    products: [],
    categories: [],
  };

  async componentDidMount() {
    const result = await api.getCategories();
    this.setState({ categories: result });
  }

  render() {
    const { products, categories } = this.state;
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
        {categories.map((category) => (
          (
            <div key={ category.id }>
              <button type="button" data-testid="category">{category.name}</button>
            </div>
          )
        ))}
        ;
      </div>
    );
  }
}

export default Home;
