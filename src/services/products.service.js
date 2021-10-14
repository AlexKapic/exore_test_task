class Products {
  constructor({ http }) {
    this._http = http;
  }

  getProducts() {
    return this._http.load("/products", {});
  }

  getLimitedProducts(limit) {
    return this._http.load(`/products?limit=${limit}`, {});
  }

  getOneProduct(id) {
    return this._http.load(`/products/${id}`, {});
  }

  createProduct(product) {}
}

export { Products };
