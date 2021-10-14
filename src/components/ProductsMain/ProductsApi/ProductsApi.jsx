import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import {
  getProducts,
  getLimitedProducts,
} from "../../../store/productsApi/actions";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";

export const ProductsApi = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state);

  const onButtonClick = (items) => {
    if (items) {
      dispatch(getLimitedProducts(items));
    } else {
      dispatch(getProducts());
    }
  };

  useEffect(() => {
    dispatch(getLimitedProducts(8));
  }, []);

  return (
    <div className="container">
      <div className="d-flex flex-row justify-content-center mx-4">
        <Button onClick={() => onButtonClick(8)} className="mx-4 mb-4">
          8 Products
        </Button>
        <Button onClick={() => onButtonClick(16)} className="mx-4 mb-4">
          16 Products
        </Button>
        <Button onClick={() => onButtonClick()} className="mx-4 mb-4">
          All products
        </Button>
      </div>
      <div className="row justify-content-center">
        {products?.length &&
          products.map((product) => {
            return <ProductCard key={product.id} {...product} />;
          })}
      </div>
    </div>
  );
};

export default ProductsApi;
