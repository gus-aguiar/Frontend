import React from 'react';

class Home extends React.Component {
  state = {
    products: [],
  };

  render() {
    const { products } = this.state;
    return (
      <form>
        <input type="text" />
        {products.length === 0 && (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        )}
      </form>
    );
  }
}

export default Home;
