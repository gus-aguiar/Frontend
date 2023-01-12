import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class Home extends React.Component {
  state = {
    products: [],
    categories: [],
    search: '',
    result: [],
  };

  async componentDidMount() {
    const result = await api.getCategories();
    this.setState({ categories: result });
  }

  handleChange = ({ target }) => {
    this.setState({ search: target.value });
  };

  handleClick = async (event) => {
    event.preventDefault();
    const { search } = this.state;
    const result = await api.getProductsFromCategoryAndQuery(search);
    this.setState({ result: result.results });
  };

  render() {
    const { products, categories, result } = this.state;
    console.log(result);
    return (
      <div>
        <form>
          <input
            type="text"
            data-testid="query-input"
            onChange={ this.handleChange }
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.handleClick }
          >
            Buscar

          </button>
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
        {result.length > 0
          ? result.map((product) => (
            (
              <div key={ product.id } data-testid="product">
                <p>{product.title}</p>
                <img
                  src={ product.thumbnail }
                  alt={ product.title }
                />
                <p>{ product.price }</p>
              </div>
            )
          )) : <p>Nenhum produto foi encontrado</p>}
      </div>
    );
  }
}

export default Home;
