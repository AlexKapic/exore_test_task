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

  const headers = productsToShow.length && Object.keys(productsToShow?.[0]);

  useEffect(() => {
    if (showOnlyPublished) {
      setProductsToShow(products.filter((product) => product.published));
    } else {
      setProductsToShow(products);
    }
  }, [showOnlyPublished]);

  const onHandleEdit = (id) => {
    history.push(`/editor/${id}`);
  };

  return (
    <div className="container">
      {productsToShow && productsToShow.length ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              {headers.map((title, idx) => {
                if (title !== "id") {
                  return <th key={idx}>{title}</th>;
                }
              })}
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>
            {productsToShow.map((product) => {
              return (
                <tr key={product.id}>
                  {Object.keys(product).map((key, i) => {
                    if (typeof product[key] === "boolean") {
                      return product[key] ? (
                        <td key={i}>✔</td>
                      ) : (
                        <td key={i}></td>
                      );
                    } else if (key !== "id") {
                      return <td key={i}>{product[key]}</td>;
                    }
                  })}
                  <td>
                    <div className="text-center mb-4">
                      <Button
                        variant="primary"
                        onClick={() => onHandleEdit(product.id)}
                      >
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
      ) : (
        <div>There are no products</div>
      )}
    </div>
  );
};

export default ProductsOwn;
