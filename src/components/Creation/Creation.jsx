import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { createProduct } from "../../store/productsOwn/actions";
import "./Creation.css";

export const Creation = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(createProduct({ ...data, createdAt: Date.now() }))
      .unwrap()
      .then(() => reset());
  };

  return (
    <div className="container">
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="position-absolute top-50 start-50 translate-middle w-50"
      >
        <h1 className="text-center">New product</h1>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
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
            {...register("published")}
          />
        </Form.Group>
        <div className="d-flex justify-content-evenly">
          <Button className="w-25" variant="success" type="submit">
            Create
          </Button>
          <Button
            className="w-25"
            variant="warning"
            type="button"
            onClick={() => reset()}
          >
            Clear form
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Creation;
