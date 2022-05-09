import React from "react";
import {
  Button,
  Col,
  Container,
  Image,
  OverlayTrigger,
  Popover,
  Row,
} from "react-bootstrap";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Typography from "@mui/material/Typography";
import ThreeDots from "./ThreeDots";

const ViewPastIssues = ({ array }) => {
  const popover = (
    <Popover id="popover-basic">
      <div className="popper_main_cus">
        <h5 className="popper_hover">Read</h5>
        <h5 style={{ marginBottom: 0 }} className="popper_hover">
          Unread
        </h5>
      </div>
    </Popover>
  );

  return (
    <div className="FeedBack">
      <section>
        <Container fluid>
          <div className="scoll_add_viewPast">
            {array.map((item, i) => {
              return (
                <div className="feedBack d-flex mar_b_50">
                  <Container fluid>
                    <Row>
                      <Col md={12}>
                        <div className="d-flex j-between">
                          <div className="d-flex">
                            <p className="p-18 black bold mr-5">ID 001</p>
                            <p className="p-18 bold black">
                              Category: {item?.Category}
                            </p>
                          </div>
                          <div className="color_three_dots">
                            <ThreeDots />
                            {/* <div className="App">
    <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popover}>
      <MoreVertIcon/>
    </OverlayTrigger>
    </div> */}
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p className="p-18 fade-40">{item?.Time_Created}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                      //  style={{ padding: 0 }}
                      >
                        <p className="p-16 bold black" style={{ margin: 0 }}>
                          Message:
                        </p>
                        <p className="p-16 ">{item?.Message}</p>
                      </Col>
                    </Row>
                  </Container>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ViewPastIssues;
