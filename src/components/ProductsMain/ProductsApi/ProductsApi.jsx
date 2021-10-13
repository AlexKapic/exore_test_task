import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import {
  getProducts,
  getLimitedProducts,
} from "../../../store/productsApi/actions";
import { useSelector } from "react-redux";

export const ProductsApi = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state);
  console.log(products);
  useEffect(() => {
    dispatch(getLimitedProducts(8));
  }, []);

  return (
    <div className="container">
      {products?.length &&
        products.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
    </div>
  );
};

export default ProductsApi;
