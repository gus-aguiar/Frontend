export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  return fetch(url).then((response) => response.json()).then((data) => data);
}

export async function getProductsFromCategoryAndQuery(query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  return fetch(url).then((response) => response.json()).then((data) => data);
}

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
