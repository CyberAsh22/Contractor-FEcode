import React, { useState, useEffect } from "react";
import { underProducation } from "../constant/imagePath";
import Header from "../components/Header";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Link, NavLink, useHistory } from "react-router-dom";
import Typography from "@mui/material/Typography";
// import Select from "react-dropdown-select";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NativeSelect from "@mui/material/NativeSelect";
import InputBase from "@mui/material/InputBase";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThankyouModal from "../components/ThankyouModal";
import { URL } from "../Config/apiUrl";
import { Get, Patch } from "../Axios/AxiosFunctions";

import pastFace from "../assets/images/pastFace.png";
import pastArrow from "../assets/images/pastArrow.png";
import ThreeDots from "../components/ThreeDots";
import { SpinnerRoundOutlined } from "spinners-react";
import moment from "moment";
import momentTimezone from "moment-timezone";

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
const Feedback = (props) => {
  const [trip, setTrip] = React.useState({
    trip: "Hub 67810-Spoke 7810",
    category: "Truck / AVO",
    message: "",
  });

  const [choose, setChoose] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let submitFeedBackApiUrl = URL("Trips_Ben/6155eed0434cc01d843d1fe0/feedback");

  const apiHeader = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const params = {
      Category: trip?.category,
      Message: trip?.message,
      Time_Created: momentTimezone().tz("America/New_York").format(),
      Status: "resolved",
    };

    setLoading(true);
    const responseData = await Patch(submitFeedBackApiUrl, params, apiHeader);
    if (responseData !== undefined) {
      handleOpen();
    }
    setLoading(false);
  };

  const handleChange = (event) => {
    console.log({ event });
    const { name, value } = event.target;

    setTrip({ ...trip, [name]: value });
  };

  setTimeout(() => {
    handleClose();
  }, 5000);

  const options = [{ option: "abc" }];

  const history = useHistory();
  const pathname = history?.location?.pathname;

  const [addNewFeedback, setAddNewFeedback] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState([]);

  let getCurrentTripApiUrl = URL("Trips_Ben");

  const getFeedBackData = async () => {
    setIsLoading(true);
    const responseData = await Get(getCurrentTripApiUrl);
    if (responseData !== undefined) {
      setResponse(responseData?.data[0]?.Feedback);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getFeedBackData();
  }, []);

  return (
    <>
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
            <Container fluid>
              <Row className="row-0 btn-styling-row-0">
                <Button
                  onClick={() => setAddNewFeedback(true)}
                  className={`btn-style ${
                    addNewFeedback == true ? "active-btn" : "inactive-btn"
                  }`}
                  // className={`${
                  //   pathname == "/feedback"
                  //     ? "active-btn btn-style "
                  //     : "inactive-btn btn-style"
                  // }`}
                >
                  Add FeedBack
                </Button>

                <Button
                  onClick={() => setAddNewFeedback(false)}
                  className={`btn-style btn2-margin ${
                    addNewFeedback == false ? "active-btn" : "inactive-btn"
                  }`}
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  View Past feedbacks
                </Button>
              </Row>
              {addNewFeedback == true ? (
                <>
                  <div className="feedBack">
                    <Row className="row-1">
                      <Col>
                        <h3 className="feedback_heading">Feedback </h3>
                      </Col>
                    </Row>
                    <form onSubmit={handleSubmit}>
                      <Row className="row-2">
                        <Col md={6}>
                          <div className="dropBox box1">
                            <label>Trip</label>

                            <FormControl variant="standard">
                              <Select
                                className="drop1_new cus_drop_down"
                                labelId="demo-customized-select-label"
                                id="demo-customized-select"
                                value={trip.trip}
                                name="trip"
                                defaultValue="value"
                                onChange={handleChange}
                                input={<BootstrapInput />}
                              >
                                <MenuItem value={"Hub 67810-Spoke 7810"}>
                                  Hub 67810-Spoke 7810
                                </MenuItem>
                                <MenuItem value={"Spoke 7810-Hub 67810"}>
                                  Spoke 7810-Hub 67810
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="dropBox box2">
                            <label>Category</label>
                            <FormControl variant="standard">
                              <Select
                                className="drop1_new"
                                labelId="demo-customized-select-label"
                                id="demo-customized-select"
                                value={trip.category}
                                name="category"
                                defaultValue="value"
                                onChange={handleChange}
                                input={<BootstrapInput />}
                              >
                                <MenuItem value={"Truck / AVO"}>
                                  Truck / AVO
                                </MenuItem>
                                <MenuItem value={"App Design/Functionality"}>
                                  App Design/Functionality
                                </MenuItem>
                                <MenuItem value={"Missing/Wrong information"}>
                                  Missing/Wrong information
                                </MenuItem>
                                <MenuItem value={"Fleet load"}>
                                  Fleet load
                                </MenuItem>
                                <MenuItem value={"Login not working"}>
                                  Login not working
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </div>
                        </Col>
                      </Row>

                      <Row className="row-3">
                        <Col>
                          <div className="dropBox textArea_feedback">
                            <label>Message</label>
                            <TextareaAutosize
                              className="FeedBack_TextArea"
                              minRows={8}
                              aria-label="maximum height"
                              name="message"
                              onChange={handleChange}
                              value={trip.message}
                              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua."
                            />
                          </div>
                        </Col>
                      </Row>

                      <Row className="row-4">
                        <Col>
                          <Button
                            type="submit"
                            className="feedBack Btn"
                            disabled={loading}
                          >
                            {loading ? "Submiting.." : "Submit"}
                          </Button>
                        </Col>
                      </Row>
                    </form>
                  </div>
                </>
              ) : (
                <>
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
                              <h4>{item?.Time_Created}</h4>
                              {/* <h4>05 Aug, 06:00 PM</h4> */}
                            </div>

                            <div className="des-div">{item.Message}</div>
                          </Col>
                        </Row>
                      </div>
                    );
                  })}
                </>
              )}
            </Container>
          )}
        </section>

        <ThankyouModal handleClose={handleClose} open={open} />
      </div>
    </>
  );
};

export default Feedback;
