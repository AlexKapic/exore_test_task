import { Modal, Button } from "react-bootstrap";

export const DeleteModal = ({ modalShow, hide, onDelete }) => {
  return (
    <Modal
      show={modalShow}
      onHide={hide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Are you shure? Confirm delete.
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <Button onClick={hide} variant="success" type="button" className="me-4">
          Chancel
        </Button>
        <Button onClick={onDelete} variant="danger" type="button">
          Delete
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteModal;
