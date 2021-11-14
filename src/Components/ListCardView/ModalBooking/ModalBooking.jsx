import { Modal, Button } from "react-bootstrap";
import "./ModalBooking.css";

export function ModalBooking(props) {
  const btnModal = () => {
    props.postBooking();
    props.onHide();
  };
  return (
    <Modal
      {...props}
      size="mg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <div className="header-modal">
          <div className="text-modal">Book your trip</div>
          <input type="button" onClick={props.onHide} className="btn-close" />
        </div>
      </Modal.Header>
      <Modal.Body>
        <p>Enter your payment information to book the listing, inclusive.</p>
        <p>
          ${props.price} * {props.rentalDays} days = $
          {props.price * props.rentalDays}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={btnModal}>Book</Button>
      </Modal.Footer>
    </Modal>
  );
}
