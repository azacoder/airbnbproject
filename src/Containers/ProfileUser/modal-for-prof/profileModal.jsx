import "./profileModal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import Pay from '../../../assets/image/pay-card.svg'

export const MyVerticallyCenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter" className="modal-title">
          You need to pay before going to the page
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="div-card-icon">
          <input
            type="text"
            placeholder="Номер карты                                                                                                  ММ/ГГ CVC"
            className="input-pay-card"
          />
          <img src={Pay} alt="payment" />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
};