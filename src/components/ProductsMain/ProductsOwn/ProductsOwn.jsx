import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button, Spinner } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import "./ProductsOwn.css";
import { useHistory } from "react-router";
import { deleteProduct } from "../../../store/productsOwn/actions";
import DeleteModal from "../../../common/components/DeleteModal/DeleteModal";
import { toast } from "react-toastify";

export const ProductsOwn = ({ showOnlyPublished }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { products, preloader } = useSelector((state) => state.productsOwn);
  const [productsToShow, setProductsToShow] = useState(products);
  const [modalShow, setModalShow] = useState(false);
  const [idForDelete, setIdForDelete] = useState();

  const headers = productsToShow.length && Object.keys(productsToShow?.[0]);

  useEffect(() => {
    if (showOnlyPublished) {
      setProductsToShow(products.filter((product) => product.published));
    } else {
      setProductsToShow(products);
    }
  }, [showOnlyPublished, products]);

  const onHandleEdit = (id) => {
    history.push(`/editor/${id}`);
  };

  const onHandleDelete = () => {
    dispatch(deleteProduct(idForDelete))
      .unwrap()
      .then(() => {
        toast.warn("Product was deleted");
        setModalShow(false);
      });
  };

  const prepareDelete = (id) => {
    setModalShow(true);
    setIdForDelete(id);
  };

  return (
    <>
      {preloader ? (
        <div className="d-flex justify-content-center align-items-center h-100">
          <Spinner animation="border" variant="dark" />
        </div>
      ) : (
        <div className="container">
          {productsToShow && productsToShow.length ? (
            <Table striped bordered hover>
              <thead>
                <tr>
                  {headers.map((title, idx) => {
                    if (title !== "id") {
                      return <th key={idx}>{title}</th>;
                    }
                    return null;
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
                        return null;
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
                          <Button
                            variant="danger"
                            onClick={() => prepareDelete(product.id)}
                          >
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
          <DeleteModal
            modalShow={modalShow}
            hide={() => setModalShow(false)}
            onDelete={() => onHandleDelete()}
          />
        </div>
      )}
    </>
  );
};

export default ProductsOwn;
