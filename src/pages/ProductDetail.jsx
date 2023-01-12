import React from 'react';
import PropTypes from 'prop-types';

class ProductDetail extends React.Component {
  handleClick = () => {
    const { history } = this.props;
    return history.push('/cart');
  };

  render() {
    const { location: { state: product } } = this.props;
    console.log(product);
    return (
      <div key={ product.id } type="button">
        <p data-testid="product-detail-name">{product.title}</p>
        <img
          src={ product.thumbnail }
          alt={ product.title }
          data-testid="product-detail-image"
        />
        <p data-testid="product-detail-price">{ product.price }</p>
        <button
          type="button"
          onClick={ this.handleClick }
          data-testid="shopping-cart-button"
        >
          Carrinho de Compras

        </button>
      </div>

    );
  }
}

ProductDetail.propTypes = {
  location: PropTypes.string.isRequired,
  history: PropTypes.string.isRequired,
};

export default ProductDetail;
