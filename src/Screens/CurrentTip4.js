import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import TripDetail from "../components/TripDetail";
import TripStatusStepper from "../components/TripStatusStepper";
import { arrowDown, arrowUp, loadingBox } from "../constant/imagePath";
import end_unload from "../assets/images/end_unload.png";
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
import TimerModal from "../components/TimerModal";
const CurrentTip4 = ({ showStepper }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [activityLog, setActivityLog] = useState(true);
  const [response, setResponse] = useState([]);
  const [showStatus, setShowStatus] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [showResetBtn, setShowResetBtn] = useState(false);
  const [show, setShow] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseLoading = () => setShowLoading(false);
  const handleShowLoading = () => setShowLoading(true);
  console.log(show);

  const [showModalTimer, setShowModalTimer] = useState(false);

  const handleCloseModalTimer = () => setShowModalTimer(false);
  const handleShowModalTimer = () => setShowModalTimer(true);

  // let getCurrentTripApiUrl = "https://fleet.gatik.ai/trip/api/Trips_Ben";
  let getCurrentTripApiUrl = URL("Trips_Ben");

  const apiHeader = {
    headers: {
      Accept: "application/json",
    },
  };

  const getTripData = async () => {
    setIsLoading(true);
    const responseData = await Get(getCurrentTripApiUrl);
    if (responseData !== undefined) {
      setResponse(responseData?.data);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    getTripData();
    handleShowModalTimer();
  }, []);

  setTimeout(() => {
    handleCloseModalTimer();
  }, 5000);

  const data = {
    _id: "6152044938e9594b6378f9c3",
    Triplocation: "Arkansas_WMT",
    Route: {
      ID: "ONT-LCL-01",
      Name: "Argentia",
      Hub: {
        Type: "Hub",
        ID: "1033",
        Phy_Add: " 51 Gerry Fitzgerald Dr, North York, ON M3J 3N4",
        Geo: "43.80058031160663, -79.47564191747082",
      },
      Spoke: {
        Type: "Spoke",
        ID: "1080",
        Phy_Add: "3050 Argentia Rd, Mississauga, ON L5N 8E1",
        Geo: "43.612553261915544, -79.78356044369265",
      },
    },
    Trip_start: "2021-11-03",
    Truck_assigned: "ARK-0007",
    AVO_assigned: "Douglas Ellison",
    Trip_type: "Trial",
    Trip_freq: "Daily",
    Trip_rec_end: "2021-11-05",
    Trip_init_time: "2021-09-27 17:50:01.184168",
    Trip_ID: "Ark-Tri-00101",
    Trip_duration: "4 hours",
    Trip_time_start: "2021-09-27T13:30:00.972Z",
    Client_login_ID: {
      ID: "233425",
      Name: "John Doe",
      Firm: "Sodexho",
    },
    Vehicle_LP: "Volvo VNL 670",
    Status: [
      { label: "Vehicle at hub", time: "2021-11-03 10:00 am" },
      { label: "Hub login time", time: "2021-11-03 09:45 am" },
      { label: "Start Load Time", time: "2021-11-03 10:10 am" },
      { label: "End Load Time", time: "2021-11-03 10:45 am" },
      { label: "Driving to Spoke", time: "2021-11-03 10:30 am" },
      { label: "Spoke reach time", time: "2021-11-03 11:10 am" },
      { label: "Reached Spoke", time: "2021-11-03 11:30 am" },
      { label: "Start UnLoad Time", time: "2021-11-03 11:25 am" },
      { label: "Docked at Spoke ", time: "2021-11-03 11:45 am" },
      { label: "Spoke Depart Time", time: "2021-11-03 11:45 am" },
      { label: "Returning to hub", time: "2021-11-03 12:30 am" },
      { label: "Returning to hub", time: "2021-11-03 12:30 pm" },
      { label: "Hub Redepart Time", time: "2021-11-03 12:15 pm" },
      { label: "Current loc", time: "2021-11-03 12:15 pm" },
      // { label: "Current loc", time: "43.612553261915544, -79.78356044369265" },
      { label: "Trip completed", time: "2021-11-03 01:00 pm" },
    ],
    Feedback: {
      ID: "Issue 0001",
      Category: "App bug",
      "Trip ID": "Ark-Tri-00101",
      Message:
        " Lorem Ipsum is simply dummy text of the printing and typesetting...",
      Time_created: "2021-11-03 01:30 pm",
      Status: "Resolution pending",
      "Created at": {
        Type: "Spoke",
        ID: "1080",
        Phy_Add: "3050 Argentia Rd, Mississauga, ON L5N 8E1",
        Geo: "43.612553261915544, -79.78356044369265",
      },
      "Created by": {
        ID: "233425",
        Name: "John Doe",
        Firm: "Sodexho",
      },
      // "Image": {"image_01.jpg", "image_03.jpg"},
    },
  };

  const submitStatus = async (id) => {
    let updateApiUrl = URL(`Trips_Ben/${id}`);
    let data = { Start_Load_Time: moment().format("YYYY-MM-DD hh:mm A") };
    setSubmitLoading(true);
    const response = await Patch(updateApiUrl, data, apiHeader);
    if (response !== undefined) {
      setShowResetBtn(true);
      setTimeout(() => {
        setShowResetBtn(false);
      }, 60000);
      // console.log(response?.data);
    }
    setSubmitLoading(false);
  };
  return (
    <>
      {/* {isLoading == false && <Header data={response[0]} />} */}
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
                      <h1>Press “End Unloading” when you are ready</h1>
                      <div className="col-md-12 statusButtonContainer">
                        <Button
                          onClick={() => {
                            submitStatus(response[0]?.Trip_ID);
                          }}
                          disabled={submitLoading}
                        >
                          <img src={end_unload} alt="" />
                          <span onClick={handleShow}> End Unloading</span>
                        </Button>
                        <div className="ml-5" style={{ cursor: "pointer" }}>
                          <img src={redArrow} alt="pic not Found" />
                          <span
                            onClick={handleShowLoading}
                            className="red_arrow_color ml-3"
                          >
                            Go Back
                          </span>
                        </div>

                        {showResetBtn && (
                          <p className="recallAction">
                            <svg
                              width="35"
                              height="30"
                              viewBox="0 0 35 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M21.9943 5.42461H7.18493L8.68681 3.24724C8.88713 2.9592 9.00323 2.62335 9.02263 2.27578C9.04203 1.92822 8.964 1.58206 8.79693 1.2745C8.62985 0.966941 8.38004 0.709603 8.07434 0.530133C7.76863 0.350663 7.41858 0.255843 7.0618 0.255859H7.0577C6.73677 0.255838 6.41995 0.326246 6.1307 0.461872C5.84144 0.597497 5.58716 0.794865 5.38669 1.03936L0.765863 6.67536C0.62047 6.85267 0.54126 7.07298 0.54126 7.30005C0.54126 7.52712 0.62047 7.74743 0.765863 7.92474L5.3872 13.5604C5.58766 13.8049 5.84194 14.0023 6.13119 14.1379C6.42045 14.2736 6.73727 14.344 7.05821 14.344H7.0618C7.41856 14.344 7.76859 14.2492 8.07427 14.0697C8.37996 13.8902 8.62975 13.6329 8.79682 13.3254C8.96389 13.0178 9.04193 12.6717 9.02255 12.3242C9.00316 11.9766 8.88709 11.6408 8.68681 11.3527L7.18454 9.17461H21.9943C24.2805 9.17461 26.4731 10.0607 28.0897 11.6378C29.7063 13.215 30.6145 15.3541 30.6145 17.5846C30.6145 19.8151 29.7063 21.9542 28.0897 23.5314C26.4731 25.1086 24.2805 25.9946 21.9943 25.9946H17.8026C17.2929 25.9946 16.8041 26.1922 16.4437 26.5438C16.0833 26.8954 15.8808 27.3723 15.8808 27.8696C15.8808 28.3669 16.0833 28.8438 16.4437 29.1954C16.8041 29.5471 17.2929 29.7446 17.8026 29.7446H21.9943C25.2999 29.7446 28.4702 28.4635 30.8076 26.183C33.1451 23.9026 34.4583 20.8097 34.4583 17.5846C34.4583 14.3596 33.1451 11.2666 30.8076 8.98619C28.4702 6.70575 25.2999 5.42461 21.9943 5.42461Z"
                                fill="#ED074F"
                              />
                            </svg>{" "}
                            Recall Action
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="currentTripMiddleContentEndBtn">
                    <Button className="btn "> ON TIME</Button>
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
                      <ActivityStepper />
                    ) : (
                      <TripStatusStepper status={data?.Status} />
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
      {/* <TimerModal
        handleCloseModalTimer={handleCloseModalTimer}
        showModalTimer={showModalTimer}
        handleShowModalTimer={handleShowModalTimer}
      /> */}
      <StartLoadingModal
        showLoading={showLoading}
        handleCloseLoading={handleCloseLoading}
        handleShowLoading={handleShowLoading}
      />
      <CheckBoxModal
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
      />
    </>
  );
};

export default CurrentTip4;
