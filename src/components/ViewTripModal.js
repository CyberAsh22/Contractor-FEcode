import moment from "moment";
import React, { useState } from "react";
import { Button, Col, Container, Image, Modal, Row } from "react-bootstrap";
import twoSideArrow from "../assets/images/twoSideArrow.png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import ViewTripModalInner from "./ViewTripModalInner";
const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#784af4",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

//   const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];
const steps = [
  {
    TripStatus: "Trip started",
    subStatus: "Vehicle reached hub",
    CurrentStatus: "Completed ",
    CompletionTimeEstimated: "10:30 AM",
    CompletionTimeActual: "10:25 AM",
  },
  {
    subStatus: "Vehicle reached hub",
    CurrentStatus: "Completed ",
    CompletionTimeEstimated: "10:30 AM",
    CompletionTimeActual: "10:25 AM",
  },
  {
    subStatus: "Vehicle reached hub",
    CurrentStatus: "Completed ",
    CompletionTimeEstimated: "10:30 AM",
    CompletionTimeActual: "10:25 AM",
  },
];
const ViewTripModal = ({ data, show, handleClose, handleShow }) => {
  const [activeStep, setActiveStep] = useState(2);
  console.log({ data }, "*****************************");
  const array = [
    {
      first: "TripStarted",
      second: "vehicle reached hub",
      timeSituation: "On Time",
      third: "completed",
      timeEstimated: "(Estimated)",
      timeActual: "(Actual)",

      fourth: "10:30 AM",
      fifth: "10:25 AM",
    },
    {
      second: "vehicle reached hub",
      timeSituation: "Delayed",
      third: "completed",
      timeEstimated: "(Estimated)",
      timeActual: "(Actual)",
      fourth: "10:40 AM",
      fifth: "10:40 AM",
    },
    {
      second: "Associate Logged in",
      timeSituation: "",
      third: "In progress",
      timeEstimated: "(Estimated)",
      fourth: "10:45 AM  ",
    },
    {
      second: "Vehicle Locked and ready to depart",
      timeSituation: "",
      third: "Not started",
      timeEstimated: "(Estimated)",
      fourth: "10:50 AM  ",
    },
    {
      second: "Vehicle departed     from Hub",
      timeSituation: "",
      third: "Not started",
      timeEstimated: "(Estimated)",
      fourth: "11:05 AM  ",
    },
    {
      second: "Vehicle reached Spoke",
      timeSituation: "",
      third: "Not started",
      timeEstimated: "(Estimated)",
      fourth: "11:15 AM  ",
    },
  ];

  return (
    <div>
      <Modal show={show} onHide={handleClose} className="customStepperStyling">
        <Modal.Header closeButton className="customStepperBody">
          <Container>
            <Row className="customStepperModal_heading">
              <Col md={2} className="customeStepperModal_time">
                <span>{moment().format("hh:mm A")}</span>
              </Col>
              <Col md={1}></Col>
              <Col md={9} className="flex-start">
                <h3>Hub 67810</h3>
                <Image src={twoSideArrow} />
                <h3>Spoke 7810</h3>{" "}
                <span>
                  <h4>(ID: 4761)</h4>
                </span>
              </Col>
            </Row>
          </Container>
        </Modal.Header>
        <Modal.Body style={{ paddingTop: 0 }}>
          <ViewTripModalInner activeStep={activeStep} array={data} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ViewTripModal;
