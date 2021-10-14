import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Table, Button } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import "./ProductsOwn.css";
import { useHistory } from "react-router";

export const ProductsOwn = ({ showOnlyPublished }) => {
  const history = useHistory();
  const { products } = useSelector((state) => state.productsOwn);
  const [productsToShow, setProductsToShow] = useState(products);

  const headers = Object.keys(productsToShow?.[0]);

  useEffect(() => {
    if (showOnlyPublished) {
      setProductsToShow(products.filter((product) => product.published));
    } else {
      setProductsToShow(products);
    }
  }, [showOnlyPublished]);

  const onHandleEdit = () => {
    history.push("/editor");
  };

  return (
    <div className="container">
      <Table striped bordered hover>
        <thead>
          <tr>
            {headers.map((title, idx) => (
              <th key={idx}>{title}</th>
            ))}
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {productsToShow.map((product, idx) => {
            return (
              <tr key={idx}>
                {Object.values(product).map((value, i) => {
                  if (typeof value === "boolean") {
                    return value ? <td key={i}>✔</td> : <td key={i}></td>;
                  }
                  return <td key={i}>{value}</td>;
                })}
                <td>
                  <div className="text-center mb-4">
                    <Button variant="primary" onClick={onHandleEdit}>
                      <BiEdit />
                    </Button>
                  </div>
                  <div className="text-center">
                    <Button variant="danger">
                      <MdDeleteForever />
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductsOwn;
