import React, { useState, useEffect } from "react";
import { underProducation } from "../constant/imagePath";
import Header from "../components/Header";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Box from "@mui/material/Box";
import { Link, NavLink, useHistory } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import modalLogo from "../assets/images/modalLogo.png";
// import Select from "react-dropdown-select";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NativeSelect from "@mui/material/NativeSelect";
import InputBase from "@mui/material/InputBase";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { TextField } from "@mui/material";
import pastFace from "../assets/images/pastFace.png";
import pastArrow from "../assets/images/pastArrow.png";
import ViewPastIssues from "../components/ViewPastIssues";
import HelpSupport from "../components/HelpSupport";
import { URL } from "../Config/apiUrl";
import { Get, Patch } from "../Axios/AxiosFunctions";

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
    trip: "10",
    category: "",
    message: "",
  });

  const [choose, setChoose] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    console.log(event);
    const { name, value } = event.target;
    setTrip({ ...trip, [name]: value });
  };
  const options = [{ option: "abc" }];

  const history = useHistory();
  const pathname = history?.location?.pathname;

  const array = new Array(5).fill();

  let submitIssueApiUrl = URL("Trips_Ben/6155eed0434cc01d843d1fe0/issue");

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
    };

    setLoading(true);
    const responseData = await Patch(submitIssueApiUrl, params, apiHeader);
    if (responseData !== undefined) {
      handleOpen();
    }
    setLoading(false);
  };

  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState([]);

  const [addNewIssue, setAddNewIssue] = useState(true);

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
      <div className="cus_header">
        <Header />
      </div>
      <div className="btn_bar">
        <Container fluid>
          <Row className="row-0 btn-styling-row-0">
            <Button
              onClick={() => setAddNewIssue(true)}
              className={`helpSupport_btn ${
                addNewIssue == true ? "active" : "inActive"
              }`}
            >
              Help/Support
            </Button>
            <Button
              onClick={() => setAddNewIssue(false)}
              className={`helpSupport_btn btn2-margin ${
                addNewIssue == false ? "active" : "inActive"
              }`}
            >
              View Past Issues
            </Button>
          </Row>
        </Container>
      </div>
      {addNewIssue == true ? (
        <HelpSupport
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleClose={handleClose}
          open={open}
          loading={loading}
          trip={trip}
        />
      ) : (
        <ViewPastIssues array={response} />
      )}
    </>
  );
};

export default Feedback;
