import React from 'react';
import PropTypes from 'prop-types';

class ProductDetail extends React.Component {
  handleClick = async () => {
    const { history } = this.props;
    return history.push('/cart');
  };

  render() {
    const { location: { state: product } } = this.props;
    console.log(product);
    return (
      <div key={ product.id } data-testid="product" type="button">
        <p>{product.title}</p>
        <img
          src={ product.thumbnail }
          alt={ product.title }
        />
        <p>{ product.price }</p>
        <button
          type="button"
          onClick={ this.handleClick }
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
