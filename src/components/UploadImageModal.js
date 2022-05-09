import React from "react";
import { Button, Modal } from "react-bootstrap";

const UploadImageModal = ({ handleShowImage, handleCloseImage, showImage }) => {
  return (
    <Modal
      show={showImage}
      onHide={handleCloseImage}
      className="upload_imge_modal"
    >
      <Modal.Header closeButton
      style={{border:0}}
      
      >
        {/* <Modal.Title>Modal heading</Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <div className="upload_modal_main">
          <div>
            
        <div class="upload-btn-wrapper">
          <div className="img1_wrapper">
            <button class="btn_upload"></button>
            <input type="file" name="myfile" />
          </div>
        </div>
        <p className="text-center mt-3 cus_p_upload">
        Take a pic of Photo ID
        </p>
            </div>
            <div>
        <div class="upload-btn-wrapper">
          <div className="img1_wrapper1">
            <button class="btn_upload"></button>
            <input type="file" name="myfile" />
          </div>
        </div>
        <p className="text-center mt-3 cus_p_upload">
        Take a selfie
        </p>
              </div>
          </div>
      </Modal.Body>
    </Modal>
  );
};

export default UploadImageModal;
