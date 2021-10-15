import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Image } from "react-bootstrap";
import { RatingStar } from "rating-star";
import { getOneProduct } from "../../store/productsApi/actions";
import { useParams } from "react-router";
import "./Product.css";

export const Product = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.productsApi);
  const params = useParams();

  useEffect(() => {
    if (params?.id) dispatch(getOneProduct(params.id));
  }, [params, dispatch]);

  return (
    <div className="container d-flex">
      <div className="product-image">
        <Image src={product.image} fluid />
      </div>
      <div className="product-info">
        <div className="info-block">
          <div className="info text-center h3">{product.title}</div>
        </div>
        <div className="info-block">
          <div className="info-title">Category</div>
          <div className="info">{product.category}</div>
        </div>
        <div className="info-block">
          <div className="info-title">Description</div>
          <div className="info">{product.description}</div>
        </div>
        <div className="info-block">
          <div className="info-title">Price</div>
          <div className="info">{product.price}$</div>
        </div>
        <div className="info-block">
          <div className="info-title">Rating</div>
          <RatingStar
            size={30}
            rating={product && product.rating && product.rating.rate}
            colors={{ rear: "transparent" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
