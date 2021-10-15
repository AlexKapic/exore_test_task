import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import {
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../store/productsOwn/actions";
import "./Creation.css";
import { useHistory, useParams } from "react-router";
import { useState } from "react";
import DeleteModal from "../../common/components/DeleteModal/DeleteModal";

export const Creation = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const { products } = useSelector((state) => state.productsOwn);
  const [modalShow, setModalShow] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const editedProduct =
    params.id && products.find((product) => product.id === params.id);

  const onSubmit = (data) => {
    if (params.id) {
      dispatch(updateProduct({ ...editedProduct, ...data }))
        .unwrap()
        .then(() => {
          reset();
          history.goBack();
        });
    } else {
      dispatch(createProduct({ ...data, createdAt: Date.now() }))
        .unwrap()
        .then(() => reset());
    }
  };

  const onDelete = () => {
    dispatch(deleteProduct(params.id))
      .unwrap()
      .then(() => history.goBack());
  };

  return (
    <div className="container">
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="position-absolute top-50 start-50 translate-middle w-50"
      >
        <h1 className="text-center">
          {params.id ? "Edit product" : "New product"}
        </h1>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            defaultValue={params.id && editedProduct && editedProduct.title}
            {...register("title", {
              required: true,
              minLength: 3,
              maxLength: 100,
            })}
          />
          {errors.title && (
            <p className="form-alert">Minimum 3 letters, maximum 100 letters</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Description"
            defaultValue={
              params.id && editedProduct && editedProduct.description
            }
            {...register("description", {
              required: true,
              minLength: 10,
              maxLength: 300,
            })}
          />
          {errors.description && (
            <p className="form-alert">
              Minimum 10 letters, maximum 300 letters
            </p>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Price"
            defaultValue={params.id && editedProduct && editedProduct.price}
            {...register("price", { required: true, min: 1, max: 1000000 })}
          />
          {errors.price && (
            <p className="form-alert">Minimum 1, maximum 1000000</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Published"
            defaultChecked={
              params.id && editedProduct && editedProduct.published === true
            }
            {...register("published")}
          />
        </Form.Group>
        <div className="d-flex justify-content-evenly">
          <Button className="w-25" variant="success" type="submit">
            {params.id && editedProduct ? "Save" : "Create"}
          </Button>
          {!editedProduct ? (
            <Button
              className="w-25"
              variant="warning"
              type="button"
              onClick={() => reset()}
            >
              Clear form
            </Button>
          ) : (
            <Button
              className="w-25"
              variant="danger"
              type="button"
              onClick={() => setModalShow(true)}
            >
              Delete
            </Button>
          )}
        </div>
      </Form>
      <DeleteModal
        modalShow={modalShow}
        hide={() => setModalShow(false)}
        onDelete={() => onDelete()}
      />
    </div>
  );
};

export default Creation;
