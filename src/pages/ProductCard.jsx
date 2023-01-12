import PropTypes from 'prop-types';
import React from 'react';

class ProductCard extends React.Component {
  addProductToCart = () => {
    const { product: { title, thumbnail, price, id } } = this.props;
    const produtoSalvo = localStorage.getItem('produtoSalvo');
    const arrayProduct = produtoSalvo ? JSON.parse(produtoSalvo) : [];
    arrayProduct.push({ title, thumbnail, price, id, quantity: 1 });
    localStorage.setItem('produtoSalvo', JSON.stringify(arrayProduct));
  };

  render() {
    const { product } = this.props;
    return (
      <div key={ product.id } data-testid="product">
        <p>{product.title}</p>
        <img
          src={ product.thumbnail }
          alt={ product.title }
        />
        <p>{ product.price }</p>
        <button
          type="button"
          data-testid="product-add-to-cart"
          className="button-add-cart"
          onClick={ this.addProductToCart }
        >
          Adicionar ao Carrinho
        </button>
      </div>

    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
