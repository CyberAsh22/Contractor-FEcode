import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import upload_icon from "../assets/images/upload_icon1.png";
import ThankyouModal from "./ThankyouModal";
import UploadImageModal from "./UploadImageModal";

const HelpSupport = ({
  loading,
  handleSubmit,
  handleChange,
  trip,
  handleClose,
  open,
}) => {
  // const [open, setOpen] = React.useState(false);

  const [showImage, setShowImage] = React.useState(false);

  const handleCloseImage = () => setShowImage(false);
  const handleShowImage = () => setShowImage(true);
  setTimeout(() => {
    handleClose();
  }, 5000);
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        borderRadius: 4,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },
  }));

  return (
    <div className="FeedBack">
      <section>
        <Container fluid>
          <div className="feedBack">
            {/* <Row className="row-1">
              <Col>
                <h3 className="feedback_heading">Feedback </h3>
              </Col>
            </Row> */}
            <form onSubmit={handleSubmit}>
              <Row className="row-2">
                <Col>
                  <div className="dropBox textArea_feedback helpSupport">
                    <label>Category</label>
                    <input
                      id="bootstrap-input"
                      className="issueInput"
                      placeholder="Security"
                      name="category"
                      onChange={handleChange}
                      value={trip.category}
                    />
                  </div>
                </Col>
              </Row>

              <Row className="row-3">
                <Col>
                  <div className="dropBox textArea_feedback">
                    <label>Message</label>
                    <TextareaAutosize
                      className="helpSupport_TextArea"
                      minRows={5}
                      Row={10}
                      aria-label="maximum height"
                      name="message"
                      onChange={handleChange}
                      placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                    />
                  </div>
                </Col>
              </Row>
              <Row className="row-3">
                <Col>
                  <div className="dropBox textArea_feedback">
                    <label
                      class="help_support_fileupload "
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={handleShowImage}
                    >
                      <div className="innerDiv_fileUpload ">
                        <div className="d-flex j-center a-center upload_btn">
                          <Image src={upload_icon} />
                          <p style={{ margin: 0, marginLeft: 10 }}>
                            Upload Images
                          </p>
                        </div>
                      </div>
                      {/* <input
                        type="file"
                        size="60"
                        class="file_upload_form3rd"
                      /> */}
                    </label>
                  </div>
                </Col>
              </Row>
              <Row className="row-4">
                <Col md={6}>
                  <Button
                    type="submit"
                    className="reset_btn"
                    disabled={loading}
                  >
                    Reset
                  </Button>
                </Col>
                <Col md={6}>
                  <Button
                    // onClick={handleOpen}
                    type="submit"
                    className="feedBack Btn"
                    disabled={loading}
                  >
                    Send
                  </Button>
                </Col>
              </Row>
            </form>
          </div>
        </Container>
      </section>
      <ThankyouModal
        handleClose={handleClose}
        open={open}
        text="sending"
        msg="message"
      />
      <UploadImageModal
        handleShowImage={handleShowImage}
        handleCloseImage={handleCloseImage}
        showImage={showImage}
      />
    </div>
  );
};

export default HelpSupport;
