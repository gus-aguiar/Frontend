import PropTypes from 'prop-types';
import React from 'react';

class ProductCardonCart extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div key={ product.id } data-testid="product">
        <p data-testid="shopping-cart-product-name">{product.title}</p>
        <img
          src={ product.thumbnail }
          alt={ product.title }
        />
        <p>{ product.price }</p>
        <p data-testid="shopping-cart-product-quantity">{ product.quantity }</p>
      </div>

    );
  }
}

ProductCardonCart.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
};

export default ProductCardonCart;
