import React, { useState, useEffect } from "react";
import { underProducation } from "../constant/imagePath";
import Header from "../components/Header";
import { Button, Col, Container, Row } from "react-bootstrap";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Link, useHistory } from "react-router-dom";
import pastFace from "../assets/images/pastFace.png";
import pastArrow from "../assets/images/pastArrow.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThreeDots from "../components/ThreeDots";
import { SpinnerRoundOutlined } from "spinners-react";
import { Get } from "../Axios/AxiosFunctions";
import { URL } from "../Config/apiUrl";
import momentTimezone from "moment-timezone";

const array = new Array(4).fill();
const Notification = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState([]);

  let getCurrentTripApiUrl = URL("Trips_Ben");

  const getFeedBackData = async () => {
    setIsLoading(true);
    const responseData = await Get(getCurrentTripApiUrl);
    if (responseData !== undefined) {
      setResponse(responseData?.data[0]?.Notifications);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getFeedBackData();
  }, []);

  return (
    <div className="FeedBack">
      <Header />
      <section>
        {isLoading ? (
          <div className="col-md-12 darken-Loading">
            <SpinnerRoundOutlined
              enabled={isLoading}
              thickness={200}
              color="#6236CC"
            />
          </div>
        ) : (
          <Container fluid className="notification_Container">
            {response.map((item, i) => {
              return (
                <div className="feedBack d-flex">
                  <Row className="row-01">
                    <Col>
                      <img src={pastFace} />
                    </Col>
                  </Row>
                  <Row className="row-1">
                    <Col>
                      <div className="d-flex title-div feeback2_main_div">
                        <div className="d-flex">
                          <h3>Ronald Barner </h3>
                          <h4>Hub 67810</h4>
                          <img className="arrowDiv" src={pastArrow} />
                          <h4>Spoke 6810</h4>
                        </div>

                        <div className="color_three_dots">
                          <ThreeDots />
                        </div>
                      </div>
                      <div className="time-div">
                        {/* <h4>05 Aug, 06:00 PM</h4> */}
                        <h4>
                          {momentTimezone(item?.Received)
                            .tz("America/New_York")
                            .format("DD MMM, hh:mm A")}
                        </h4>
                      </div>

                      <div className="des-div">{item?.Message}</div>
                    </Col>
                  </Row>
                </div>
              );
            })}
          </Container>
        )}
      </section>
    </div>
  );
};

export default Notification;
