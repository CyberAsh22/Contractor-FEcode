import React, { useState, useEffect } from "react";
import { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import TripDetail from "../components/TripDetail";
import TripStatusStepper from "../components/TripStatusStepper";
import { arrowDown, arrowUp, loadingBox } from "../constant/imagePath";
import { Link } from "react-router-dom";
import { Get, Post, Patch } from "../Axios/AxiosFunctions";
import { SpinnerRoundOutlined } from "spinners-react";
import Header from "../components/Header";
import { URL } from "../Config/apiUrl";
import moment from "moment";
import redArrow from "../assets/images/redArrow.png";
import feedback1 from "../assets/images/feedback1.png";
import ActivityStepper from "../components/ActivityStepper";
import ViewTripModal from "../components/ViewTripModal";
import CheckBoxModal from "../components/CheckBoxModal";
import StartLoadingModal from "../components/StartLoadingModal";
import EndLoadingModal from "../components/EndLoadingModal";
import TimerModal from "../components/TimerModal";
import momentTimezone from "moment-timezone";
import { Button, Col, Container, Image, Modal, Row } from "react-bootstrap";
import truckBig from "../assets/images/truckBig.png";
import { useHistory } from "react-router-dom";
const CurrentTip1 = (props) => {
  const { showStepper } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [activityLog, setActivityLog] = useState(true);
  const [response, setResponse] = useState([]);
  const [showStatus, setShowStatus] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [showResetBtn, setShowResetBtn] = useState(true);
  const [show, setShow] = useState(false);
  const [showLoading, setShowLoading] = useState(false);



  const [currentStatus, setCurrentStatus] = useState(0);

  const [delayTime, setDelayTime] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseLoading = () => setShowLoading(false);
  const handleShowLoading = () => setShowLoading(true);


  const [showModalTimer, setShowModalTimer] = useState(false);

  const handleCloseModalTimer = () => setShowModalTimer(false);
  const handleShowModalTimer = () => setShowModalTimer(true);

  const [showTripSchedule, setShowTripSchedule] = useState(false);

  const handleCloseTripSchedule = () => setShowTripSchedule(false);
  const handleShowTripSchedule = () => setShowTripSchedule(true);

  let getCurrentTripApiUrl = URL("Trips_Ben");
  let endLoadingApiUrl = URL("Trips_Ben/6155eed0434cc01d843d1fe0/end_load");

  const apiHeader = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const history = useHistory();
  const navigateTo = () => history.push('/CurrentTipBack');//eg.history.push('/login');
  const SubmitUpdateEndLoading = async () => {
    // const params = {
    //   Start_Load_Time: Date.now(),
    // };

    const params = {
      "End_Load-time": momentTimezone().tz("America/New_York").format(),
      "Index":"A3"
    };
    setLoading(true);
    const responseData = await Patch(endLoadingApiUrl, params, apiHeader);
    if (responseData !== undefined) {
      let sub =
        momentTimezone().tz("America/New_York").format("X") -
        momentTimezone(response?.Trip_end_est)
          .tz("America/New_York")
          .format("X");
      setDelayTime(sub);
      // setDelayTime(
      //   momentTimezone().tz("America/New_York").format("X") -
      //     momentTimezone(response?.Trip_end_est)
      //       .tz("America/New_York")
      //       .format("X")
      // );
      // setResponse(responseData?.data);
      setCurrentStatus(0);
      setShowResetBtn(true);
      setTimeout(() => {
        setShowResetBtn(false);
      }, 60000);
    }
    setLoading(false);

  };

  const getTripData = async () => {
    setIsLoading(true);
    const responseData = await Get(getCurrentTripApiUrl);
    if (responseData !== undefined) {
      setResponse(responseData?.data[0]);
      let sub =
        momentTimezone().tz("America/New_York").format("X") -
        momentTimezone(responseData?.data[0]?.Trip_end_est)
          .tz("America/New_York")
          .format("X");
      setDelayTime(sub);

      handleShowModalTimer();
      setTimeout(() => {
        handleCloseModalTimer();
      }, 5000);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getTripData();
  }, []);
  useEffect(() => {
    console.log({ response });
    console.log(
      { time: parseFloat(response["Current_ETA(min)"]) },
      parseFloat(response["Current_ETA(min)"]) < 20
    );
  }, [response]);

  

  const hoursFormat = (time) => {
    var hours =
      Math.floor(time / 3600) < 10
        ? ("00" + Math.floor(time / 3600)).slice(-2)
        : Math.floor(time / 3600);
    var minutes = ("00" + Math.floor((time % 3600) / 60)).slice(-2);
    var seconds = ("00" + ((time % 3600) % 60)).slice(-2);
    return hours + ":" + minutes + ":" + seconds;
  };

  // const submitStatus = async (id) => {
  //   let updateApiUrl = URL(`Trips_Ben/${id}`);
  //   let data = { Start_Load_Time: moment().format("YYYY-MM-DD hh:mm A") };
  //   setSubmitLoading(true);
  //   const response = await Patch(updateApiUrl, data, apiHeader);
  //   if (response !== undefined) {
  //     setShowResetBtn(true);
  //     setTimeout(() => {
  //       setShowResetBtn(false);
  //     }, 60000);
  //     // console.log(response?.data);
  //   }
  //   setSubmitLoading(false);
  // };
  return (
    <>
      <section className="current-trip">
        {isLoading ? (
          <div className="col-md-12 darken-Loading">
            <SpinnerRoundOutlined
              enabled={isLoading}
              thickness={200}
              color="#6236CC"
            />
          </div>
        ) : (
          <div className="container-fluid">
            <div className="row">
              <Header data={response[0]} />

              <div className="col-md-12">
                <TripDetail data={response[0]} />
              </div>

                  <div className="col-md-12">
                    <div className="currentTripMiddle">
                      <div>
                        <div
                          className={
                            showStepper
                              ? "currentTripMiddleContentHeading text-center stepperOpen"
                              : "currentTripMiddleContentHeading text-center stepperClose"
                          }
                        >
                          <h1>Press “End Loading” when you are ready</h1>
                          <div className="col-md-12 statusButtonContainer">
                            {currentStatus == 0 && (
                              <Button
                                onClick={() => {
                                  SubmitUpdateEndLoading();
                                }}
                                disabled={submitLoading}
                              >
                                <img src={loadingBox} alt="" />
                                <span onClick={handleShow}> End Loading</span>
                              </Button>
                            )}
                            {/* {currentStatus == 0 && (
                              <Button
                                onClick={() => {
                                  SubmitUpdateStartLoading();
                                }}
                                disabled={submitLoading}
                              >
                                <img src={loadingBox} alt="" />
                                <span onClick={handleShow}> End Loading</span>
                              </Button>
                            )} */}
                           <div
                              className="ml-5"
                              style={{
                                cursor: "pointer",
                                visibility: showResetBtn ? "show" : "hidden",
                              }}
                            >
                              <img src={redArrow} alt="pic not Found" />
                              <span
                                onClick={navigateTo}
                                className="red_arrow_color ml-3"
                              >
                                Go Back
                              </span>
                            </div>

                           
                          </div>
                        </div>
                      </div>





                      <div className="currentTripMiddleContentEndBtn">
                        {delayTime > 60 ? (
                          <Button className="btn delay-btn">
                            Delayed By {parseInt(delayTime / 60)} mins
                            {/* {hoursFormat(delayTime)} Delayed By   */}
                          </Button>
                        ) : (
                          <Button className="btn "> ON TIME</Button>
                        )}
                        <Link to="/helpsupport">
                          <div>
                            <img src={feedback1} className="mr-3" />
                            <span className="feedback_text">Add Feedback</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12 ">
                    <div
                      className={
                        showStepper
                          ? "statusContainer stepperOpen "
                          : "statusContainer stepperColsed"
                      }
                    >
                      <div
                        className="current_status"
                        onClick={() => {
                          setShowStatus(!showStatus);
                        }}
                      >
                        <div class="card">
                          <h2 class="mb-0 colors-b">
                            {activityLog ? "Activity Log" : "Trip Status"}
                            {/* {showStatus == false && (
                          <span className="status">
                            Associate logged in at 10 am
                          </span>
                        )} */}
                            {/* <div className="accordion_arrow">
                          <img src={showStatus ? arrowUp : arrowDown} alt="" />
                        </div> */}
                          </h2>
                        </div>
                      </div>

                      <div
                        className={
                          `statusStepper isShowStatus ${
                            activityLog ? "activityActivated" : ""
                          }` ||
                          `statusStepper isShowStatus ${
                            activityLog ? "activityActivated" : ""
                          }`
                        }
                      >
                        {activityLog ? (
                          <ActivityStepper  status={response?.Status_new}/>
                        ) : (
                          // <TripStatusStepper status={response?.Status_new} />
                          <TripStatusStepper status={response?.Status_new} />
                        )}
                        <div
                          className={
                            activityLog
                              ? "col-md-12 tripLoggedContainer actvityLog "
                              : "col-md-12 tripLoggedContainer"
                          }
                        >
                          <span className="tripLoggedTitle">
                            {activityLog ? "" : "Full Trip Schedule"}
                          </span>
                          {/* <span className="tripLoggedTime">. 10:00 Am</span> */}
                          {activityLog ? (
                            <span
                              onClick={() => setActivityLog(false)}
                              className={
                                activityLog ? "tripStatus margin" : "tripStatus"
                              }
                            >
                              Trip Status
                            </span>
                          ) : (
                            <span
                              onClick={() => setActivityLog(true)}
                              className="tripStatus"
                            >
                              Activity Log
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

            </div>
          </div>
        )}
      </section>
      
      <EndLoadingModal
        showLoading={showLoading}
        handleCloseLoading={handleCloseLoading}
        handleShowLoading={handleShowLoading}
      />
      <CheckBoxModal
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
      />

      <ViewTripModal
        data={response?.Status_new}
        show={showTripSchedule}
        handleClose={handleCloseTripSchedule}
        handleShow={handleShowTripSchedule}
      />
    </>
  );
};

export default CurrentTip1;
