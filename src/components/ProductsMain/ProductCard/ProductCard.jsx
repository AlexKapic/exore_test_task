import { Card } from "react-bootstrap";

export const ProductCard = ({ title, price, image }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Price {price}$</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
