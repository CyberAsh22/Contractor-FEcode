import moment from "moment-timezone";
import React from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import openingModalLogo from "../assets/images/openingModalLogo.png";
const TimerModal = ({
  data,
  handleCloseModalTimer,
  showModalTimer,
  handleShowModalTimer,
}) => {
  const userData = useSelector((state) => state.authReducer.user);

  return (
    <div>
      <Modal
        show={showModalTimer}
        onHide={handleCloseModalTimer}
        className="timer_modal"
      >
        <Modal.Body>
          <div className="d-flex logoAndTitle text-center">
            <img src={openingModalLogo} />
            <div>
              <p className="modal_new_setting"> Welcome to Gatik </p>
              <p> IPCC App </p>
            </div>
          </div>

          <div className="text-center content">
            Logged in as {userData?.userName} <br /> at{" "}
            {moment(data[0]?.Client_login_drop?.Time)
              .tz("America/New_York")
              .format("hh:mm A")}{" "}
            at Etobicoke Hub #1234
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TimerModal;
