import { HttpMethod, ContentType } from "../common/constants/http";

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

  createProduct(product) {
    return this._http.load("/products", {
      method: HttpMethod.POST,
      payload: JSON.stringify(product),
      contentType: ContentType.JSON,
    });
  }

  updateProduct(product) {
    return this._http.load(`/products/${product.id}`, {
      method: HttpMethod.PUT,
      payload: JSON.stringify(product),
      contentType: ContentType.JSON,
    });
  }
}

export { Products };
