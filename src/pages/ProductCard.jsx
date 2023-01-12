import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div
        key={ product.id }
        data-testid="product"
        type="button"
      >
        <p>{product.title}</p>
        <img
          src={ product.thumbnail }
          alt={ product.title }
        />
        <p>{ product.price }</p>
        <Link to="/cart">detalhes</Link>
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
