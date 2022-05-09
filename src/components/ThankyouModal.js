import React from 'react'
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Image } from 'react-bootstrap';
import modalLogo from "../assets/images/modalLogo.png";
import Typography from "@mui/material/Typography";

const ThankyouModal = ({ handleClose, open, text = "submitting" , msg="query"}) => {
  const style = {
    position: "absolute",
    height: "386px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 957,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Image src={modalLogo} />

          <Typography
            id="modal-modal-description feedback-style"
            sx={{ mt: 5 }}
          >
            Thanks for {text} your {msg}.
          </Typography>
          <Typography
            id="modal-modal-description feedback-style"
            sx={{ mt: 2 }}
          >
            Your query has been sent successfully to dispatch@gatik.ai
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ThankyouModal
