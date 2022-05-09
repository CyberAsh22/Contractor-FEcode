import React from "react";
import { Button, Modal } from "react-bootstrap";

const ExitModa = ({ handleShowExit, showExit, handleCloseExit }) => {
  return (
    <div>
      <Modal show={showExit} onHide={handleCloseExit} className="logout_modal">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="text-center">
          Are you sure you want to exit the app
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary btn1_logoutModal"
            onClick={handleCloseExit}
          >
            Cancel
          </Button>
          <Button variant="primary btn2_logoutModal" onClick={handleCloseExit}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ExitModa;
