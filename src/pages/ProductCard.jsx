import PropTypes from 'prop-types';
import React from 'react';

class ProductCard extends React.Component {
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
