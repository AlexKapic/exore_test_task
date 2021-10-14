import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ProductCard.css";

export const ProductCard = ({ title, price, image, id }) => {
  return (
    <Card className="m-2 col-lg-3 col-md-4 col-12 p-2 product-card">
      <Link to={`/products/${id}`}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className="text-truncate">{title}</Card.Title>
          <Card.Text>Price {price}$</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default ProductCard;
