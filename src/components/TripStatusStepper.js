import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

import { makeStyles, Tooltip } from "@material-ui/core";

import {
  delivery,
  stepFormTick,
  stepFormTruck1,
  stepFormTruck2,
  stepFormTruck3,
 
  arrowDown,
} from "../constant/imagePath";

import newTruck from "../assets/images/newTruck.png"
import newTruck1 from "../assets/images/newTruck1.png"
import newTruck4 from "../assets/images/newTruck4.png"
import tick_b from "../assets/images/tick_b.png"
import latestTruck from "../assets/images/latestTruck.png"
import moment from "moment";

const steps = [
  "Vehicle at hub",
  "Hub login time",
  "Start Load Time",
  "End Load Time",
  "Driving to Spoke",
  "Spoke reach time",
  "Reached Spoke",
  "Start UnLoad Time",
  "Docked at Spoke ",
  "Spoke Depart Time",
  "Returning to hub",
  "Hub Return Time",
  "Hub Redepart Time",
  "Current loc",
  "Trip completed",
];

export default function TripStatusStepper(props) {
  const { status } = props;
  const { showStepper } = props;
console.log(status)
  console.log("this is trip" + showStepper)
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    let currentStatus = status[status.length - 1].label;
    let index = steps.findIndex((x) => x == currentStatus);
    setCurrentState(1);
  }, [status]);

  return (
    <div class="container-fluid">
      <div class="row">
        <div class= "col">
          <div class="timeline-steps aos-init aos-animate" data-aos="fade-up">
            {status.slice(0,15).map(
              (e, i) =>
                i == 0 || i == 4 || i == 6 || i == 10 || i == 14 ? (
                  <div4
                    class={`timeline-step ${
                      i == 0 || i == 4 || i == 6 || i == 10 || i == 14
                        ? "image"
                        : "circle"
                    } ${currentState >= i ? "active" : ""}`}
                    key={i}
                  >
                    <div
                      class="timeline-content"
                      data-toggle="popover"
                      data-trigger="hover"
                      data-placement="top"
                      title=""
                      data-content="And here's some amazing content. It's very engaging. Right?"
                      data-original-title="2003"
                    >
                      <div class="inner-circle">
                        <div className="img_div">
                        <img
                          src={
                            i == 0
                              ? latestTruck
                              : i == 4 || i == 6
                              ? newTruck1
                              : i == 10
                              ? newTruck4
                              : i == 14 && tick_b
                          }
                          alt=""
                          class="img-fluid"
                        />
                          </div>

                      </div>
                      <div class="desc">
                        <p class="h6 mt-3 mb-1 title">
                          {/* Step
                          {i == 0
                            ? 1
                            : i == 4
                            ? 2
                            : i == 6
                            ? 3
                            : i == 10
                            ? 4
                            : i == 14
                            ? 5
                            : null} */}
                            {e.id}
                        </p>
                        <p class="h6 text-muted mb-0 mb-lg-0 label">
                          {/* {e.replaceAll("_", " ")} */}
                          {e.label}
                        </p>
                        <p class="h6 text-muted mb-0 mb-lg-0 time">
                          {status[i]?.time !== undefined
                            ? moment(status[i].time).format("hh:mm A")
                            : null}
                        </p>
                      </div>
                    </div>
                  </div4>
                ) : (
                  <div
                    class={`timeline-step circle ${
                      currentState >= i ? "active" : ""
                    }`}
                    key={i}
                  >
                    <div
                      class="timeline-content"
                      data-toggle="popover"
                      data-trigger="hover"
                      data-placement="top"
                      title=""
                      data-content="And here's some amazing content. It's very engaging. Right?"
                      data-original-title="2003"
                    >
                      <div class="inner-circle">
                        <img
                          src={
                            i == 0
                              ? stepFormTruck1
                              : i == 4 || i == 6
                              ? stepFormTruck2
                              : i == 10
                              ? stepFormTruck3
                              : i == 14 && stepFormTick
                          }
                          alt=""
                          class="img-fluid"
                        />
                        <div className="dot"></div>
                      </div>
                      <div class="desc timeline-tooltip">
                        <p class="h6 text-muted mb-0 mb-lg-0 label">
                          {/* {e.replaceAll("_", " ")} */}
                          <br />
                          <span className="color_gray">
                          {status[i]?.time !== undefined
                            ? moment(status[i].time).format("hh:mm A")
                            : null}
                            </span>

                        </p>
                      </div>
                    </div>
                  </div>
                )
              // <div
              //   class={`timeline-step ${
              //     i == 0 || i == 4 || i == 6 || i == 10 || i == 14
              //       ? "image"
              //       : "circle"
              //   } ${currentState >= i ? "active" : ""}`}
              //   key={i}
              // >
              //   <div
              //     class="timeline-content"
              //     data-toggle="popover"
              //     data-trigger="hover"
              //     data-placement="top"
              //     title=""
              //     data-content="And here's some amazing content. It's very engaging. Right?"
              //     data-original-title="2003"
              //   >
              //     <div class="inner-circle">
              //       <img
              //         src={
              //           i == 0
              //             ? stepFormTruck1
              //             : i == 4 || i == 6
              //             ? stepFormTruck2
              //             : i == 10
              //             ? stepFormTruck3
              //             : i == 14 && stepFormTick
              //         }
              //         alt=""
              //         class="img-fluid"
              //       />
              //     </div>
              //     <div class="desc">
              //       <p class="h6 mt-3 mb-1 title">
              //         {i == 0
              //           ? "Step 1"
              //           : i == 4
              //           ? "Step 2"
              //           : i == 6
              //           ? "Step 3"
              //           : i == 10
              //           ? "Step 4"
              //           : i == 14
              //           ? "Step 5"
              //           : null}
              //       </p>
              //       <p class="h6 text-muted mb-0 mb-lg-0 label">
              //         {e.replaceAll("_", " ")}
              //       </p>
              //       <p class="h6 text-muted mb-0 mb-lg-0 time">
              //         {(status[i]?.time !== undefined && i == 0) || i == 6
              //           ? moment(status[i].time).format("hh:mm A")
              //           : null}
              //       </p>
              //     </div>
              //   </div>
              // </div>
            )}
            {/* <div class="timeline-step image active">
              <div
                class="timeline-content"
                data-toggle="popover"
                data-trigger="hover"
                data-placement="top"
                title=""
                data-content="And here's some amazing content. It's very engaging. Right?"
                data-original-title="2003"
              >
                <div class="inner-circle">
                  <img src="./currentTrip.png" alt="" class="img-fluid" />
                </div>
                <div class="desc">
                  <p class="h6 mt-3 mb-1">2003</p>
                  <p class="h6 text-muted mb-0 mb-lg-0">Favland Founded</p>
                </div>
              </div>
            </div>

            <div class="timeline-step circle active">
              <div
                class="timeline-content"
                data-toggle="popover"
                data-trigger="hover"
                data-placement="top"
                title=""
                data-content="And here's some amazing content. It's very engaging. Right?"
                data-original-title="2003"
              >
                <div
                  class="inner-circle"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Tooltip on top"
                ></div>
                <div class="desc">
                  <p class="h6 mt-3 mb-1">2003</p>
                  <p class="h6 text-muted mb-0 mb-lg-0">Favland Founded</p>
                </div>
              </div>
            </div>

            <div class="timeline-step circle">
              <div
                class="timeline-content"
                data-toggle="popover"
                data-trigger="hover"
                data-placement="top"
                title=""
                data-content="And here's some amazing content. It's very engaging. Right?"
                data-original-title="2003"
              >
                <div
                  class="inner-circle"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Tooltip on top"
                ></div>
                <div class="desc">
                  <p class="h6 mt-3 mb-1">2003</p>
                  <p class="h6 text-muted mb-0 mb-lg-0">Favland Founded</p>
                </div>
              </div>
            </div>

            <div class="timeline-step circle">
              <div
                class="timeline-content"
                data-toggle="popover"
                data-trigger="hover"
                data-placement="top"
                title=""
                data-content="And here's some amazing content. It's very engaging. Right?"
                data-original-title="2003"
              >
                <div
                  class="inner-circle"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Tooltip on top"
                ></div>
                <div class="desc">
                  <p class="h6 mt-3 mb-1">2003</p>
                  <p class="h6 text-muted mb-0 mb-lg-0">Favland Founded</p>
                </div>
              </div>
            </div>

            <div class="timeline-step image">
              <div
                class="timeline-content"
                data-toggle="popover"
                data-trigger="hover"
                data-placement="top"
                title=""
                data-content="And here's some amazing content. It's very engaging. Right?"
                data-original-title="2003"
              >
                <div class="inner-circle">
                  <img src="./currentTrip.png" alt="" class="img-fluid" />
                </div>
                <div class="desc">
                  <p class="h6 mt-3 mb-1">2003</p>
                  <p class="h6 text-muted mb-0 mb-lg-0">Favland Founded</p>
                </div>
              </div>
            </div>

            <div class="timeline-step circle">
              <div
                class="timeline-content"
                data-toggle="popover"
                data-trigger="hover"
                data-placement="top"
                title=""
                data-content="And here's some amazing content. It's very engaging. Right?"
                data-original-title="2003"
              >
                <div
                  class="inner-circle"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Tooltip on top"
                ></div>
                <div class="desc">
                  <p class="h6 mt-3 mb-1">2003</p>
                  <p class="h6 text-muted mb-0 mb-lg-0">Favland Founded</p>
                </div>
              </div>
            </div>

            <div class="timeline-step circle">
              <div
                class="timeline-content"
                data-toggle="popover"
                data-trigger="hover"
                data-placement="top"
                title=""
                data-content="And here's some amazing content. It's very engaging. Right?"
                data-original-title="2003"
              >
                <div
                  class="inner-circle circle"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Tooltip on top"
                ></div>
                <div class="desc">
                  <p class="h6 mt-3 mb-1">2003</p>
                  <p class="h6 text-muted mb-0 mb-lg-0">Favland Founded</p>
                </div>
              </div>
            </div>

            <div class="timeline-step image">
              <div
                class="timeline-content"
                data-toggle="popover"
                data-trigger="hover"
                data-placement="top"
                title=""
                data-content="And here's some amazing content. It's very engaging. Right?"
                data-original-title="2003"
              >
                <div class="inner-circle">
                  <img src="./currentTrip.png" alt="" class="img-fluid" />
                </div>
                <div class="desc">
                  <p class="h6 mt-3 mb-1">2003</p>
                  <p class="h6 text-muted mb-0 mb-lg-0">Favland Founded</p>
                </div>
              </div>
            </div>

            <div class="timeline-step circle">
              <div
                class="timeline-content"
                data-toggle="popover"
                data-trigger="hover"
                data-placement="top"
                title=""
                data-content="And here's some amazing content. It's very engaging. Right?"
                data-original-title="2003"
              >
                <div
                  class="inner-circle"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Tooltip on top"
                ></div>
                <div class="desc">
                  <p class="h6 mt-3 mb-1">2003</p>
                  <p class="h6 text-muted mb-0 mb-lg-0">Favland Founded</p>
                </div>
              </div>
            </div>

            <div class="timeline-step circle">
              <div
                class="timeline-content"
                data-toggle="popover"
                data-trigger="hover"
                data-placement="top"
                title=""
                data-content="And here's some amazing content. It's very engaging. Right?"
                data-original-title="2003"
              >
                <div
                  class="inner-circle"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Tooltip on top"
                ></div>
                <div class="desc">
                  <p class="h6 mt-3 mb-1">2003</p>
                  <p class="h6 text-muted mb-0 mb-lg-0">Favland Founded</p>
                </div>
              </div>
            </div>

            <div class="timeline-step image">
              <div
                class="timeline-content"
                data-toggle="popover"
                data-trigger="hover"
                data-placement="top"
                title=""
                data-content="And here's some amazing content. It's very engaging. Right?"
                data-original-title="2003"
              >
                <div class="inner-circle">
                  <img src="./currentTrip.png" alt="" class="img-fluid" />
                </div>
                <div class="desc">
                  <p class="h6 mt-3 mb-1">2003</p>
                  <p class="h6 text-muted mb-0 mb-lg-0">Favland Founded</p>
                </div>
              </div>
            </div>

            <div class="timeline-step circle">
              <div
                class="timeline-content"
                data-toggle="popover"
                data-trigger="hover"
                data-placement="top"
                title=""
                data-content="And here's some amazing content. It's very engaging. Right?"
                data-original-title="2003"
              >
                <div
                  class="inner-circle"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Tooltip on top"
                ></div>
                <div class="desc">
                  <p class="h6 mt-3 mb-1">2003</p>
                  <p class="h6 text-muted mb-0 mb-lg-0">Favland Founded</p>
                </div>
              </div>
            </div>

            <div class="timeline-step circle">
              <div
                class="timeline-content"
                data-toggle="popover"
                data-trigger="hover"
                data-placement="top"
                title=""
                data-content="And here's some amazing content. It's very engaging. Right?"
                data-original-title="2003"
              >
                <div
                  class="inner-circle"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Tooltip on top"
                ></div>
                <div class="desc">
                  <p class="h6 mt-3 mb-1">2003</p>
                  <p class="h6 text-muted mb-0 mb-lg-0">Favland Founded</p>
                </div>
              </div>
            </div>

            <div class="timeline-step image">
              <div
                class="timeline-content"
                data-toggle="popover"
                data-trigger="hover"
                data-placement="top"
                title=""
                data-content="And here's some amazing content. It's very engaging. Right?"
                data-original-title="2003"
              >
                <div class="inner-circle">
                  <img src="./currentTrip.png" alt="" class="img-fluid" />
                </div>
                <div class="desc">
                  <p class="h6 mt-3 mb-1">2003</p>
                  <p class="h6 text-muted mb-0 mb-lg-0">Favland Founded</p>
                </div>
              </div>
            </div>

            <div class="timeline-step circle">
              <div
                class="timeline-content"
                data-toggle="popover"
                data-trigger="hover"
                data-placement="top"
                title=""
                data-content="And here's some amazing content. It's very engaging. Right?"
                data-original-title="2003"
              >
                <div
                  class="inner-circle"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Tooltip on top"
                ></div>
                <div class="desc">
                  <p class="h6 mt-3 mb-1">2003</p>
                  <p class="h6 text-muted mb-0 mb-lg-0">Favland Founded</p>
                </div>
              </div>
            </div>

            <div class="timeline-step circle">
              <div
                class="timeline-content"
                data-toggle="popover"
                data-trigger="hover"
                data-placement="top"
                title=""
                data-content="And here's some amazing content. It's very engaging. Right?"
                data-original-title="2003"
              >
                <div
                  class="inner-circle"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Tooltip on top"
                ></div>
                <div class="desc">
                  <p class="h6 mt-3 mb-1">2003</p>
                  <p class="h6 text-muted mb-0 mb-lg-0">Favland Founded</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import { styled } from "@mui/material/styles";
// import Stack from "@mui/material/Stack";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import Check from "@mui/icons-material/Check";
// import SettingsIcon from "@mui/icons-material/Settings";
// import GroupAddIcon from "@mui/icons-material/GroupAdd";
// import VideoLabelIcon from "@mui/icons-material/VideoLabel";
// import StepConnector, {
//   stepConnectorClasses,
// } from "@mui/material/StepConnector";

// import { makeStyles, Tooltip } from "@material-ui/core";

// import {
//   delivery,
//   stepFormTick,
//   stepFormTruck1,
//   stepFormTruck2,
//   stepFormTruck3,
//   arrowDown,
// } from "../constant/imagePath";
// import moment from "moment";

// // tooltip styling function
// const customStyling = makeStyles(() => ({
//   tooltip: {
//     backgroundColor: "rgba(101,101,101,92%)",
//     padding: "10px",
//   },
// }));

// const QontoConnector = styled(StepConnector)(({ theme }) => ({
//   [`&.${stepConnectorClasses.alternativeLabel}`]: {
//     top: 10,
//     left: "calc(-50% + 16px)",
//     right: "calc(50% + 16px)",
//   },
//   [`&.${stepConnectorClasses.active}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       borderColor: "#784af4",
//     },
//   },
//   [`&.${stepConnectorClasses.completed}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       borderColor: "#784af4",
//     },
//   },
//   [`& .${stepConnectorClasses.line}`]: {
//     borderColor:
//       theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
//     borderTopWidth: 3,
//     borderRadius: 1,
//   },
// }));

// const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
//   color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
//   display: "flex",
//   height: 22,
//   alignItems: "center",
//   ...(ownerState.active && {
//     color: "#784af4",
//   }),
//   "& .QontoStepIcon-completedIcon": {
//     color: "#784af4",
//     zIndex: 1,
//     fontSize: 18,
//   },
//   "& .QontoStepIcon-circle-completedIcon": {
//     backgroundColor: "#784af4",
//     width: 8,
//     height: 8,
//     borderRadius: "50%",
//   },
//   "& .QontoStepIcon-circle": {
//     width: 8,
//     height: 8,
//     borderRadius: "50%",
//     backgroundColor: "currentColor",
//   },
// }));

// function QontoStepIcon(props) {
//   const { active, completed, className, icon } = props;
//   return (
//     <QontoStepIconRoot ownerState={{ active }} className={className}>
//       {/* {completed ? (
//         <div className="QontoStepIcon-circle-completedIcon" />
//       ) : (
//         <div className="QontoStepIcon-circle" />
//       )} */}
//       {icon == 1 ? (
//         <div className="step_icon">
//           <img src={stepFormTruck1} alt="" />
//         </div>
//       ) : icon == 5 || icon == 7 ? (
//         <div className="step_icon">
//           <img src={stepFormTruck2} alt="" />
//         </div>
//       ) : icon == 11 ? (
//         <div className="step_icon">
//           <img src={stepFormTruck3} alt="" />
//         </div>
//       ) : icon == 15 ? (
//         <div className="step_icon">
//           <img src={stepFormTick} alt="" />
//         </div>
//       ) : completed ? (
//         <div className="QontoStepIcon-circle-completedIcon" />
//       ) : (
//         <div className="QontoStepIcon-circle" />
//       )}
//     </QontoStepIconRoot>
//   );
// }

// QontoStepIcon.propTypes = {
//   /**
//    * Whether this step is active.
//    * @default false
//    */
//   active: PropTypes.bool,
//   className: PropTypes.string,
//   /**
//    * Mark the step as completed. Is passed to child components.
//    * @default false
//    */
//   completed: PropTypes.bool,
//   label: PropTypes.string,
// };

// const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
//   backgroundColor:
//     theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
//   zIndex: 1,
//   color: "#fff",
//   width: 50,
//   height: 50,
//   display: "flex",
//   borderRadius: "50%",
//   justifyContent: "center",
//   alignItems: "center",
//   ...(ownerState.active && {
//     backgroundImage:
//       "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
//     boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
//   }),
//   ...(ownerState.completed && {
//     backgroundImage:
//       "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
//   }),
// }));

// function ColorlibStepIcon(props) {
//   const { active, completed, className } = props;

//   const icons = {
//     1: <SettingsIcon />,
//     2: <GroupAddIcon />,
//     3: <VideoLabelIcon />,
//   };

//   return (
//     <ColorlibStepIconRoot
//       ownerState={{ completed, active }}
//       className={className}
//     >
//       {icons[String(props.icon)]}
//     </ColorlibStepIconRoot>
//   );
// }

// ColorlibStepIcon.propTypes = {
//   /**
//    * Whether this step is active.
//    * @default false
//    */
//   active: PropTypes.bool,
//   className: PropTypes.string,
//   /**
//    * Mark the step as completed. Is passed to child components.
//    * @default false
//    */
//   completed: PropTypes.bool,
//   /**
//    * The label displayed in the step icon.
//    */
//   icon: PropTypes.node,
// };

// const steps = [
//   "Hub_reach_time",
//   "Hub_login_time",
//   "Start_Load_Time",
//   "End_Load_Time",
//   "Hub_Depart_Time",
//   "Spoke_reach_time",
//   "Spoke_login_time",
//   "Start_UnLoad_Time",
//   "End_UnLoad_Time",
//   "Spoke_Depart_Time",
//   "Hub_Return_Time",
//   "Hub_relogin_time",
//   "Hub_Redepart_Time",
//   "Current_loc",
//   "Trip_Act_end",
// ];

// export default function TripStatusStepper(props) {
//   const { status } = props;
//   const [currentState, setCurrentState] = useState(0);
//   const classes = customStyling();

//   useEffect(() => {
//     let currentStatus = status[status.length - 1].label;
//     let index = steps.findIndex((x) => x == currentStatus);
//     setCurrentState(index);
//   }, [status]);

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col">
//           <div
//             className="timeline-steps aos-init aos-animate"
//             data-aos="fade-up"
//           >
//             {steps.map((e, index) => (
//               <div className="timeline-step" key={index}>
//                 <div
//                   className="timeline-content"
//                   data-toggle="popover"
//                   data-trigger="hover"
//                   data-placement="top"
//                   title=""
//                   data-content="And here's some amazing content. It's very engaging. Right?"
//                   data-original-title="2003"
//                 >
//                   {index == 0 ||
//                   index == 4 ||
//                   index == 6 ||
//                   index == 10 ||
//                   index == 14 ? (
//                     <>
//                       <div className="inner-circle"></div>
//                       <p className="h6 mt-3 mb-1 title">
//                         {" "}
//                         Step{" "}
//                         {index == 0
//                           ? 1
//                           : index == 4
//                           ? 2
//                           : index == 6
//                           ? 3
//                           : index == 10
//                           ? 4
//                           : index == 14
//                           ? 5
//                           : null}
//                       </p>
//                       <p className="h6 text-muted mb-0 mb-lg-0 label">
//                         {e.replaceAll("_", " ")}
//                       </p>
//                       <p className="h6 text-muted mb-0 mb-lg-0 time">
//                         {" "}
//                         {(status[index]?.time !== undefined && index == 0) ||
//                         index == 6
//                           ? moment(status[index].time).format("hh:mm A")
//                           : null}
//                       </p>
//                     </>
//                   ) : (
//                     <Tooltip
//                       placement={"bottom"}
//                       classes={classes}
//                       arrow
//                       title={
//                         <small
//                           style={{ fontSize: "14px", fontFamily: "Nexa Light" }}
//                         >
//                           {e}
//                         </small>
//                       }
//                     >
//                       <div className="inner-circle"></div>
//                     </Tooltip>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import { styled } from "@mui/material/styles";
// import Stack from "@mui/material/Stack";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import Check from "@mui/icons-material/Check";
// import SettingsIcon from "@mui/icons-material/Settings";
// import GroupAddIcon from "@mui/icons-material/GroupAdd";
// import VideoLabelIcon from "@mui/icons-material/VideoLabel";
// import StepConnector, {
//   stepConnectorClasses,
// } from "@mui/material/StepConnector";

// import { makeStyles, Tooltip } from "@material-ui/core";

// import {
//   delivery,
//   stepFormTick,
//   stepFormTruck1,
//   stepFormTruck2,
//   stepFormTruck3,
//   arrowDown,
// } from "../constant/imagePath";
// import moment from "moment";

// // tooltip styling function
// const customStyling = makeStyles(() => ({
//   tooltip: {
//     backgroundColor: "rgba(101,101,101,92%)",
//     padding: "10px",
//   },
// }));

// const QontoConnector = styled(StepConnector)(({ theme }) => ({
//   [`&.${stepConnectorClasses.alternativeLabel}`]: {
//     top: 10,
//     left: "calc(-50% + 16px)",
//     right: "calc(50% + 16px)",
//   },
//   [`&.${stepConnectorClasses.active}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       borderColor: "#784af4",
//     },
//   },
//   [`&.${stepConnectorClasses.completed}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       borderColor: "#784af4",
//     },
//   },
//   [`& .${stepConnectorClasses.line}`]: {
//     borderColor:
//       theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
//     borderTopWidth: 3,
//     borderRadius: 1,
//   },
// }));

// const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
//   color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
//   display: "flex",
//   height: 22,
//   alignItems: "center",
//   ...(ownerState.active && {
//     color: "#784af4",
//   }),
//   "& .QontoStepIcon-completedIcon": {
//     color: "#784af4",
//     zIndex: 1,
//     fontSize: 18,
//   },
//   "& .QontoStepIcon-circle-completedIcon": {
//     backgroundColor: "#784af4",
//     width: 8,
//     height: 8,
//     borderRadius: "50%",
//   },
//   "& .QontoStepIcon-circle": {
//     width: 8,
//     height: 8,
//     borderRadius: "50%",
//     backgroundColor: "currentColor",
//   },
// }));

// function QontoStepIcon(props) {
//   const { active, completed, className, icon } = props;
//   return (
//     <QontoStepIconRoot ownerState={{ active }} className={className}>
//       {/* {completed ? (
//         <div className="QontoStepIcon-circle-completedIcon" />
//       ) : (
//         <div className="QontoStepIcon-circle" />
//       )} */}
//       {icon == 1 ? (
//         <div className="step_icon">
//           <img src={stepFormTruck1} alt="" />
//         </div>
//       ) : icon == 5 || icon == 7 ? (
//         <div className="step_icon">
//           <img src={stepFormTruck2} alt="" />
//         </div>
//       ) : icon == 11 ? (
//         <div className="step_icon">
//           <img src={stepFormTruck3} alt="" />
//         </div>
//       ) : icon == 15 ? (
//         <div className="step_icon">
//           <img src={stepFormTick} alt="" />
//         </div>
//       ) : completed ? (
//         <div className="QontoStepIcon-circle-completedIcon" />
//       ) : (
//         <div className="QontoStepIcon-circle" />
//       )}
//     </QontoStepIconRoot>
//   );
// }

// QontoStepIcon.propTypes = {
//   /**
//    * Whether this step is active.
//    * @default false
//    */
//   active: PropTypes.bool,
//   className: PropTypes.string,
//   /**
//    * Mark the step as completed. Is passed to child components.
//    * @default false
//    */
//   completed: PropTypes.bool,
//   label: PropTypes.string,
// };

// const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
//   backgroundColor:
//     theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
//   zIndex: 1,
//   color: "#fff",
//   width: 50,
//   height: 50,
//   display: "flex",
//   borderRadius: "50%",
//   justifyContent: "center",
//   alignItems: "center",
//   ...(ownerState.active && {
//     backgroundImage:
//       "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
//     boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
//   }),
//   ...(ownerState.completed && {
//     backgroundImage:
//       "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
//   }),
// }));

// function ColorlibStepIcon(props) {
//   const { active, completed, className } = props;

//   const icons = {
//     1: <SettingsIcon />,
//     2: <GroupAddIcon />,
//     3: <VideoLabelIcon />,
//   };

//   return (
//     <ColorlibStepIconRoot
//       ownerState={{ completed, active }}
//       className={className}
//     >
//       {icons[String(props.icon)]}
//     </ColorlibStepIconRoot>
//   );
// }

// ColorlibStepIcon.propTypes = {
//   /**
//    * Whether this step is active.
//    * @default false
//    */
//   active: PropTypes.bool,
//   className: PropTypes.string,
//   /**
//    * Mark the step as completed. Is passed to child components.
//    * @default false
//    */
//   completed: PropTypes.bool,
//   /**
//    * The label displayed in the step icon.
//    */
//   icon: PropTypes.node,
// };

// const steps = [
//   "Hub_reach_time",
//   "Hub_login_time",
//   "Start_Load_Time",
//   "End_Load_Time",
//   "Hub_Depart_Time",
//   "Spoke_reach_time",
//   "Spoke_login_time",
//   "Start_UnLoad_Time",
//   "End_UnLoad_Time",
//   "Spoke_Depart_Time",
//   "Hub_Return_Time",
//   "Hub_relogin_time",
//   "Hub_Redepart_Time",
//   "Current_loc",
//   "Trip_Act_end",
// ];

// export default function TripStatusStepper(props) {
//   const { status } = props;
//   const [currentState, setCurrentState] = useState(0);
//   const classes = customStyling();

//   useEffect(() => {
//     let currentStatus = status[status.length - 1].label;
//     let index = steps.findIndex((x) => x == currentStatus);
//     setCurrentState(index);
//   }, [status]);

//   return (
//     <Stack
//       className="stepperContainer"
//       sx={{ width: "100%", padding: "40px 0px" }}
//       spacing={4}
//     >
//       <Stepper
//         alternativeLabel
//         activeStep={currentState}
//         connector={<QontoConnector />}
//       >
//         {steps.map((label, index) => (
//           <Step key={label}>
//             {index == 0 ||
//             index == 4 ||
//             index == 6 ||
//             index == 10 ||
//             index == 14 ? (
//               <StepLabel StepIconComponent={QontoStepIcon}>
//                 <span className="title">
//                   Step{" "}
//                   {index == 0
//                     ? 1
//                     : index == 4
//                     ? 2
//                     : index == 6
//                     ? 3
//                     : index == 10
//                     ? 4
//                     : index == 14
//                     ? 5
//                     : null}
//                 </span>
//                 <span className="label"> {label.replaceAll("_", " ")}</span>
//                 <span className="time">
//                   {(status[index]?.time !== undefined && index == 0) ||
//                   index == 6
//                     ? moment(status[index].time).format("hh:mm A")
//                     : null}
//                 </span>
//               </StepLabel>
//             ) : (
//               <Tooltip
//                 placement={"bottom"}
//                 classes={classes}
//                 arrow
//                 title={
//                   <small style={{ fontSize: "14px", fontFamily: "Nexa Light" }}>
//                     {label}
//                   </small>
//                 }
//               >
//                 <StepLabel StepIconComponent={QontoStepIcon}></StepLabel>
//               </Tooltip>
//             )}
//           </Step>
//         ))}
//       </Stepper>
//     </Stack>
//   );
// }

// // import React, { useState, useEffect } from "react";
// // import PropTypes from "prop-types";
// // import { styled } from "@mui/material/styles";
// // import Stack from "@mui/material/Stack";
// // import Stepper from "@mui/material/Stepper";
// // import Step from "@mui/material/Step";
// // import StepLabel from "@mui/material/StepLabel";
// // import Check from "@mui/icons-material/Check";
// // import SettingsIcon from "@mui/icons-material/Settings";
// // import GroupAddIcon from "@mui/icons-material/GroupAdd";
// // import VideoLabelIcon from "@mui/icons-material/VideoLabel";
// // import StepConnector, {
// //   stepConnectorClasses,
// // } from "@mui/material/StepConnector";

// // import { makeStyles, Tooltip } from "@material-ui/core";

// // import {
// //   delivery,
// //   stepFormTick,
// //   stepFormTruck1,
// //   stepFormTruck2,
// //   stepFormTruck3,
// //   arrowDown,
// // } from "../constant/imagePath";

// // // tooltip styling function
// // const customStyling = makeStyles(() => ({
// //   tooltip: {
// //     backgroundColor: "rgba(101,101,101,92%)",
// //     padding: "10px",
// //   },
// // }));

// // const QontoConnector = styled(StepConnector)(({ theme }) => ({
// //   [`&.${stepConnectorClasses.alternativeLabel}`]: {
// //     top: 10,
// //     left: "calc(-50% + 16px)",
// //     right: "calc(50% + 16px)",
// //   },
// //   [`&.${stepConnectorClasses.active}`]: {
// //     [`& .${stepConnectorClasses.line}`]: {
// //       borderColor: "#784af4",
// //     },
// //   },
// //   [`&.${stepConnectorClasses.completed}`]: {
// //     [`& .${stepConnectorClasses.line}`]: {
// //       borderColor: "#784af4",
// //     },
// //   },
// //   [`& .${stepConnectorClasses.line}`]: {
// //     borderColor:
// //       theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
// //     borderTopWidth: 3,
// //     borderRadius: 1,
// //   },
// // }));

// // const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
// //   color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
// //   display: "flex",
// //   height: 22,
// //   alignItems: "center",
// //   ...(ownerState.active && {
// //     color: "#784af4",
// //   }),
// //   "& .QontoStepIcon-completedIcon": {
// //     color: "#784af4",
// //     zIndex: 1,
// //     fontSize: 18,
// //   },
// //   "& .QontoStepIcon-circle-completedIcon": {
// //     backgroundColor: "#784af4",
// //     width: 8,
// //     height: 8,
// //     borderRadius: "50%",
// //   },
// //   "& .QontoStepIcon-circle": {
// //     width: 8,
// //     height: 8,
// //     borderRadius: "50%",
// //     backgroundColor: "currentColor",
// //   },
// // }));

// // function QontoStepIcon(props) {
// //   const { active, completed, className, icon } = props;
// //   return (
// //     <QontoStepIconRoot ownerState={{ active }} className={className}>
// //       {icon == 2 ? (
// //         <div className="step_icon">
// //           <img src={stepFormTruck1} alt="" />
// //         </div>
// //       ) : icon == 6 || icon == 8 ? (
// //         <div className="step_icon">
// //           <img src={stepFormTruck2} alt="" />
// //         </div>
// //       ) : icon == 12 ? (
// //         <div className="step_icon">
// //           <img src={stepFormTruck3} alt="" />
// //         </div>
// //       ) : icon == 16 ? (
// //         <div className="step_icon">
// //           <img src={stepFormTick} alt="" />
// //         </div>
// //       ) : completed ? (
// //         // <Tooltip
// //         //   placement={"bottom"}
// //         //   classes={classes}
// //         //   arrow
// //         //   title={
// //         //     <small style={{ fontSize: "14px", fontFamily: "Nexa Light" }}>
// //         //       {/* {label} */}
// //         //       123
// //         //     </small>
// //         //   }
// //         // >
// //         //   <div className="QontoStepIcon-circle-completedIcon" />
// //         // </Tooltip>
// //         <div className="QontoStepIcon-circle-completedIcon" />
// //       ) : (
// //         // <Tooltip
// //         //   placement={"bottom"}
// //         //   classes={classes}
// //         //   arrow
// //         //   title={
// //         //     <small style={{ fontSize: "14px", fontFamily: "Nexa Light" }}>
// //         //       {/* {label} */}
// //         //       123
// //         //     </small>
// //         //   }
// //         // >
// //         //   <div className="QontoStepIcon-circle" />
// //         // </Tooltip>
// //         <div className="QontoStepIcon-circle" />
// //       )}

// //       {/* {completed ? (
// //         // <Check className="QontoStepIcon-completedIcon" />
// //         <div className="QontoStepIcon-circle-completedIcon" />
// //       ) : (
// //         <div className="QontoStepIcon-circle" />
// //       )} */}
// //     </QontoStepIconRoot>
// //   );
// // }

// // QontoStepIcon.propTypes = {
// //   /**
// //    * Whether this step is active.
// //    * @default false
// //    */
// //   active: PropTypes.bool,
// //   className: PropTypes.string,
// //   /**
// //    * Mark the step as completed. Is passed to child components.
// //    * @default false
// //    */
// //   completed: PropTypes.bool,
// //   label: PropTypes.string,
// // };

// // const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
// //   backgroundColor:
// //     theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
// //   zIndex: 1,
// //   color: "#fff",
// //   width: 50,
// //   height: 50,
// //   display: "flex",
// //   borderRadius: "50%",
// //   justifyContent: "center",
// //   alignItems: "center",
// //   ...(ownerState.active && {
// //     backgroundImage:
// //       "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
// //     boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
// //   }),
// //   ...(ownerState.completed && {
// //     backgroundImage:
// //       "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
// //   }),
// // }));

// // function ColorlibStepIcon(props) {
// //   const { active, completed, className } = props;

// //   const icons = {
// //     1: <SettingsIcon />,
// //     2: <GroupAddIcon />,
// //     3: <VideoLabelIcon />,
// //   };

// //   return (
// //     <ColorlibStepIconRoot
// //       ownerState={{ completed, active }}
// //       className={className}
// //     >
// //       {icons[String(props.icon)]}
// //     </ColorlibStepIconRoot>
// //   );
// // }

// // ColorlibStepIcon.propTypes = {
// //   /**
// //    * Whether this step is active.
// //    * @default false
// //    */
// //   active: PropTypes.bool,
// //   className: PropTypes.string,
// //   /**
// //    * Mark the step as completed. Is passed to child components.
// //    * @default false
// //    */
// //   completed: PropTypes.bool,
// //   /**
// //    * The label displayed in the step icon.
// //    */
// //   icon: PropTypes.node,
// // };

// // const steps = [
// //   "Trip_Act_start",
// //   "Hub_reach_time",
// //   "Hub_login_time",
// //   "Start_Load_Time",
// //   "End_Load_Time",
// //   "Hub_Depart_Time",
// //   "Spoke_reach_time",
// //   "Spoke_login_time",
// //   "Start_UnLoad_Time",
// //   "End_UnLoad_Time",
// //   "Spoke_Depart_Time",
// //   "Hub_Return_Time",
// //   "Hub_relogin_time",
// //   "Hub_Redepart_Time",
// //   "Current_loc",
// //   "Trip_Act_end",
// // ];

// // export default function TripStatusStepper(props) {
// //   const { status } = props;
// //   const [currentState, setCurrentState] = useState(0);
// //   const classes = customStyling();

// //   useEffect(() => {
// //     let currentStatus = status[status.length - 1].label;
// //     let index = steps.findIndex((x) => x == currentStatus);
// //     setCurrentState(index);
// //   }, [status]);

// //   return (
// //     <Stack sx={{ width: "100%", padding: "40px 0px" }} spacing={4}>
// //       <Stepper
// //         alternativeLabel
// //         activeStep={currentState}
// //         connector={<QontoConnector />}
// //       >
// //         {steps.map((label, index) => (
// //           <Step key={label}>
// //             {index == 1 ||
// //             index == 5 ||
// //             index == 7 ||
// //             index == 11 ||
// //             index == 15 ? (
// //               <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
// //             ) : (
// //               <Tooltip
// //                 placement={"bottom"}
// //                 classes={classes}
// //                 arrow
// //                 title={
// //                   <small style={{ fontSize: "14px", fontFamily: "Nexa Light" }}>
// //                     {label}
// //                   </small>
// //                 }
// //               >
// //                 <StepLabel StepIconComponent={QontoStepIcon}></StepLabel>
// //               </Tooltip>
// //             )}
// //           </Step>
// //         ))}
// //       </Stepper>
// //     </Stack>
// //   );
// // }

// // import React, { useEffect, useState } from "react";
// // import Box from "@mui/material/Box";
// // import Stepper from "@mui/material/Stepper";
// // import Step from "@mui/material/Step";
// // import StepLabel from "@mui/material/StepLabel";
// // import {
// //   delivery,
// //   stepFormTick,
// //   stepFormTruck1,
// //   stepFormTruck2,
// //   stepFormTruck3,
// //   arrowDown,
// // } from "../constant/imagePath";
// // import { makeStyles, Tooltip } from "@material-ui/core";
// // const steps = [
// //   "Trip_Act_start",
// //   "Hub_reach_time",
// //   "Hub_login_time",
// //   "Start_Load_Time",
// //   "End_Load_Time",
// //   "Hub_Depart_Time",
// //   "Spoke_reach_time",
// //   "Spoke_login_time",
// //   "Start_UnLoad_Time",
// //   "End_UnLoad_Time",
// //   "Spoke_Depart_Time",
// //   "Hub_Return_Time",
// //   "Hub_relogin_time",
// //   "Hub_Redepart_Time",
// //   "Current_loc",
// //   "Trip_Act_end",
// // ];

// // // tooltip styling function
// // const customStyling = makeStyles(() => ({
// //   tooltip: {
// //     backgroundColor: "rgba(101,101,101,92%)",
// //     padding: "10px",
// //   },
// // }));

// // const TripStatusStepper = (props) => {
// //   const { status } = props;
// //   const [currentState, setCurrentState] = useState(0);
// //   const classes = customStyling();

// //   useEffect(() => {
// //     let currentStatus = status[status.length - 1].label;
// //     let index = steps.findIndex((x) => x == currentStatus);
// //     setCurrentState(index);
// //   }, [status]);
// //   return (
// //     <div
// //       className={`stepform-main`}
// //       style={{
// //         width: "100%",
// //       }}
// //     >
// //       <Stepper activeStep={currentState} alternativeLabel>
// //         {steps.map((label, index) => {
// //           return (
// //             <Step key={label} style={{ dsiplay: "flex", flexDirection: "row" }}>
// //               {index == 0 ? (
// //                 <div className="step_icon">
// //                   <img src={stepFormTruck1} alt="" />
// //                 </div>
// //               ) : index == 4 || index == 6 ? (
// //                 <div className="step_icon">
// //                   <img src={stepFormTruck2} alt="" />
// //                 </div>
// //               ) : index == 10 ? (
// //                 <div className="step_icon">
// //                   <img src={stepFormTruck3} alt="" />
// //                 </div>
// //               ) : index == 14 ? (
// //                 <div className="step_icon">
// //                   <img src={stepFormTick} alt="" />
// //                 </div>
// //               ) : (
// //                 <Tooltip
// //                   placement={"bottom"}
// //                   classes={classes}
// //                   arrow
// //                   title={
// //                     <small
// //                       style={{ fontSize: "14px", fontFamily: "Nexa Light" }}
// //                     >
// //                       {label}
// //                     </small>
// //                   }
// //                 >
// //                   <StepLabel />
// //                 </Tooltip>
// //               )}
// //             </Step>
// //           );
// //         })}
// //       </Stepper>
// //     </div>
// //   );
// // };

// // export default TripStatusStepper;
