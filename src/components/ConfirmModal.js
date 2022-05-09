import { Button } from "@mui/material";
import React from "react";
import { Modal } from "react-bootstrap";
import lob from "../assets/images/lob.png"
import gat from "../assets/images/gat.png"

const ConfirmModal = ({ handleCloseConfirm, showConfirm }) => {
  return (
    <div>
      <Modal show={showConfirm} onHide={handleCloseConfirm} className="twoLogo_modal">
        <Modal.Header className="modal_header_border"></Modal.Header>
        
        <Modal.Body className="text-center">
        <div className="logoModalDiv">
        <img src={gat} />
            <img src={lob} />
        </div>
            <div className="secondModalRow">

          All tasks for Trip 4761 completed at Hub 67810<br/>Gatik Vehicle will be
          departing soon
          </div>
          <div className="thirdModalRow ">
          Contact <span className="underline">  dispatch@gatik.ai</span> or call <span className="underline">+1(23) 45 6789 </span> for queries
          </div>

        </Modal.Body>
     
      </Modal>
    </div>
  );
};

export default ConfirmModal;
