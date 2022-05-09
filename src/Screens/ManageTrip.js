import React, { useState, useEffect } from "react";
import { underProducation } from "../constant/imagePath";
import Header from "../components/Header";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import date from "../assets/images/date.png";
import manageFace from "../assets/images/manageFace.png";
import hash from "../assets/images/hash.png";
import van from "../assets/images/van.png";
import RightLeftArrow from "../assets/images/RightLeftArrow.png";
import { Input } from "@mui/material";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

const ManageTrip = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const holder = "test";
  const valuee = <p className="black">tas</p>;
  console.log(valuee);
  return (
    <>
      <div className="ManageTrip">
        <Header />
        <section>
          <Container fluid>
            <div className="cardManageTrip">
              <Row className="firstRow">
                <Col md={2}>
                  <h2>Manage Trip</h2>
                </Col>
                <Col md={9} className="cus_col_9">
                  <Row className="f_row_bg_color">
                    <Col md={4}>
                      <h3>Trip ID 4761</h3>
                    </Col>
                    <Col md={3}>
                      <h4>Hub 67810</h4>
                    </Col>
                    <Col md={2}>
                      <img src={RightLeftArrow} />
                    </Col>
                    <Col md={3}>
                      <h4>Spoke 7810</h4>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="SecondRow">
                <Col md={4}>
                  <div className="cardMain">
                    <div className="img-bg">
                      <img src={date} />
                    </div>

                    <div>
                      <h5>Start date</h5>
                      <h6>Aug 4, 2021 10:00 am</h6>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="cardMain">
                    <div className="img-bg mr-5">
                      <img src={van} />
                    </div>

                    <div>
                      <h5>Vehicle details</h5>
                      <h6>Volvo VNL 670</h6>
                    </div>
                  </div>
                </Col>

                <Col md={4}>
                  <div>
                    <Button onClick={handleShow} className="btn_manageTrip">
                      Change Trip
                    </Button>
                  </div>
                </Col>
              </Row>
              <Row className="ThirdRow">
                <Col md={4}>
                  <div className="cardMain pl-3 pr-3">
                    <div className="img-bg ">
                      <img src={hash} />
                    </div>

                    <div>
                      <h5>Trip Duration</h5>
                      <h6>3 hours</h6>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="cardMain">
                    <div className=" mr-5 pl-3 pr-3">
                      <img src={manageFace} />
                    </div>

                    <div>
                      <h5>Gatik AVO</h5>
                      <h6>Adam Sydanus</h6>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <Link to="/helpsupport">
                    <div>
                      <Button className="btn_manageTrip">Add Feedback</Button>
                    </div>
                  </Link>
                </Col>
              </Row>

              <Row className="FourthRow">
                <Col>
                  <p>
                    If you cannot find your trip, please contact{" "}
                    <Link to="/helpSupport"> <span className="blue_link">dispatch@gatik.ai</span> or call{" "} </Link>
                    <span className="blue_link"> +1(234)567 </span>
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </section>

        <Modal
          show={show}
          onHide={handleClose}
          className="manageTripModal_addTrip"
        >
          <Modal.Header closeButton></Modal.Header>

          <Modal.Title className="changeTrip_heading">
            Are you sure you want to <br /> change the trip?
          </Modal.Title>
          <Modal.Body>
            <Col className="custom_input">
              <label>Current Trip ID:</label>
              <input
                className="changeTrip_input"
                placeholder={` 4761 (H67810 <-> S7810)`}
              />
            </Col>
            <Col className="custom_input mt-3">
              <label>New Trip ID:</label>
              <input
                className="changeTrip_input"
                placeholder={` 6681 (H2201 <-> S3933)`}
              />
            </Col>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default ManageTrip;
