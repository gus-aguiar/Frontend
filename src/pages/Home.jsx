import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import ProductCard from './ProductCard';

class Home extends React.Component {
  state = {
    products: [],
    categories: [],
    search: '',
    result: [],
    category: '',
    infoReady: false,
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
    const searchResult = await api.getProductsFromCategoryAndQuery('', search);
    this.setState({ result: searchResult.results });
  };

  handleClickTwo = async (event) => {
    event.preventDefault();
    this.setState({ category: event.target.id });
    const { category } = this.state;
    const categoryResult = await api.getProductsFromCategoryAndQuery(category, '');
    this.setState({
      result: categoryResult.results,
      infoReady: true, });
  };

  render() {
    const { products, categories, result, infoReady } = this.state;
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
              <button
                type="button"
                data-testid="category"
                onClick={ this.handleClickTwo }
                id={ category.id }
              >
                {category.name}
              </button>
            </div>
          )
        ))}
        ;
        {result.length > 0 && infoReady
          ? result.map((product) => (
            (<ProductCard key={ product.id } product={ product } />)
          )) : <p>Nenhum produto foi encontrado</p>}
      </div>
    );
  }
}

export default Home;
