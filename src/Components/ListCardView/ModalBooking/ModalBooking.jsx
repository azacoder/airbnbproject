import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export function ModalBooking(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
          <button
            onClick={props.onHide}
            className="btn-close"
            aria-label="Close"
          ></button>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Book your trip</h4>
        <p>
          ${props.price} * {props.rentalDays} days = $
          {props.price * props.rentalDays}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Book</Button>
      </Modal.Footer>
    </Modal>
  );
}
