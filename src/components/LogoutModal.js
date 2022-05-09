import React from "react";
import { Button, Modal } from "react-bootstrap";

const LogoutModal = ({ handleShowLogout, handleCloseLogout, showLogout }) => {
  return (
    <div>
      <Modal
        show={showLogout}
        onHide={handleCloseLogout}
        className="logout_modal"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="text-center">
          Are you sure you want to logout?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary btn1_logoutModal" onClick={handleCloseLogout}>
            Cancel
          </Button>
          <Button variant="primary btn2_logoutModal" onClick={handleCloseLogout}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LogoutModal;
