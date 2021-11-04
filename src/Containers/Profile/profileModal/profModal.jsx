import "./profileModal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";

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
        <input
          placeholder="Номер карты                                                                                                                ММ/ГГ CVC"
          className="input-pay-card"
        ></input>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
};
