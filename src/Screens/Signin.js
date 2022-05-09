import React, { useState, useRef, useEffect } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import ReactCodeInput from "react-code-input";
import "./SigninStyle.css";
import signinLogo from "../assets/images/signinLogo.png";
import eye from "../assets/images/eye.png";
import close_eye from "../assets/images/close_eye.png";
import newSignin from "../assets/images/signinImageleftImage.png";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { apiHeader, URL } from "../Config/apiUrl";
import { Get, Patch, Post } from "../Axios/AxiosFunctions";
import { useDispatch } from "react-redux";
import { saveLoginUserData } from "../store/Actions/authAction";
import momentTimezone from "moment-timezone";

function Signin() {
  const history = useHistory();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const inputRef = useRef();
  const dispatch = useDispatch();
  const [user,setUser]=useState("");
  const [pinCode, setPinCode] = useState("");
  const [allData, setAllData] = useState([]);
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState(false);
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });
    if (value !=="admin@sodexho.com")
    {
      setTemp("A1");
    }
    else
    {
      setTemp("B1")
    }
    setInput({ ...input, [name]: value });
  };
  const [temp,setTemp]=useState("def");

  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  let getAllDataApiUrl = URL("Trips_Ben");
  let updateTripApiUrl = URL("Trips_Ben/6155eed0434cc01d843d1fe0/login_pickup");
  const apiHeader = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // login api
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const params = {
      Username: input.email,
      Password: input.password,
    };

    for (const key in params) {
      if (params[key] == "") {
        return toast.error(`${key} is required.`);
      }
    }

    setIsLoading(true);
    const condition = allData[0].Login.some(
      (x) => x.Username == input.email && x.Password == input.password
    );
    if (condition) {
      SubmitLoginTimeStamp();
      // dispatch(
      //   saveLoginUserData({
      //     email: input.email,
      //     userName:
      //       input.email == "admin@sodexho.com"
      //         ? "Sodexho user"
      //         : "1PCC associate",
      //   })
      // );
    } else {
      toast.error("Incorrect Email or Password!", {
        position: toast.POSITION.TOP_CENTER,
      });
      setIsLoading(false);
    }
    // const response = await Patch(getAllDataApiUrl, params, apiHeader());
    // if (response !== undefined) {
    //   console.log("Login API: ", response.data);
    // }
  };

  const handleReset = () => {
    setInput({
      email: "",
      password: "",
    });
    // if (inputRef.current.textInput[0]) {
    //   inputRef.current.textInput[0].focus();
    //   inputRef.current.state.input[0] = "";
    //   inputRef.current.state.input[1] = "";
    //   inputRef.current.state.input[2] = "";
    //   inputRef.current.state.input[3] = "";
    //   inputRef.current.state.input[4] = "";
    //   inputRef.current.state.input[5] = "";
    // }
  };

  const getAllData = async () => {
    setLoading(true);
    const responseData = await Get(getAllDataApiUrl);
    if (responseData !== undefined) {
      setAllData(responseData?.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAllData();
  }, []);

  const SubmitLoginTimeStamp = async () => {

    const params = {
      "Client-pickup-login-time": momentTimezone().tz("America/New_York").format(),
      "Index":temp
    };
     setIsLoading(true);
    const responseData = await Patch(updateTripApiUrl, params, apiHeader);
       
    if (responseData !== undefined) {
      dispatch(
        saveLoginUserData({
          email: input.email,
          userName:
            input.email == "admin@sodexho.com"
              ? "Sodexho user"
              : "1PCC associate",
        })
      );
    }
    setIsLoading(false);
  };

  return (
    <Container fluid>
      <Row className="custom_width" style={{ height: "100vh" }}>
        <Col
          sm={5}
          md={6}
          style={{ padding: "0px" }}
          className="top-pic bg-color-signin"
        >
          <div className="img-shadow"></div>
          <div className="signin_left_text">
            <h3>Autonomous Delivery Network for the Middle Mile</h3>
          </div>
        </Col>
        <Col md={6} className="centered-b top-mar signin-right-padd">
          <div style={{ width: "85%" }} className="text-left">
            <Image src={signinLogo} className="mb-5" />
          </div>
          <div style={{ width: "85%" }}>
            <h3 className="mb-4 text-left font-cabin_avo">
              AVO Check-in System
            </h3>
          </div>
          <Form onSubmit={handleFormSubmit} className="form-b">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="mb-3 singIn_label">
                Enter you Email
              </Form.Label>
              <Form.Control
                className="mb-3 signinEmailInput"
                type="email"
                name="email"
                placeholder="Enter email"
                value={input.email}
                onChange={handleChangeInput}
              />
            </Form.Group>

            <Form.Group
              className="mb-3 pass-flex"
              controlId="formBasicPassword"
            >
              <Form.Label className="mb-3 show_pass singIn_label">
                <p>Enter your Passcode</p>
                {error ? (
                  <p className="red1"> Wrong access code, please try again</p>
                ) : (
                  ""
                )}
                {showPass ? (
                  <img
                    style={{ cursor: "pointer", height: "23px" }}
                    className="mb-3 "
                    onClick={() => setShowPass(!showPass)}
                    src={eye}
                  />
                ) : (
                  <img
                    style={{ cursor: "pointer", height: "23px" }}
                    className="mb-3 "
                    onClick={() => setShowPass(!showPass)}
                    src={close_eye}
                  />
                )}
              </Form.Label>

              <ReactCodeInput
                fields={6}
                ref={inputRef}
                name="password"
                type={showPass ? "text" : "password"}
                fields={6}
                onChange={(code) => setInput({ ...input, password: code })}
                value={input.password}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <div className="mb-5">
              <Button
                onClick={handleReset}
                className="signinBtn1"
                // type="submit"
              >
                Reset
              </Button>
              <Button className="signinBtn2" type="submit" disabled={isLoading}>
                {isLoading ? "Please Wait..." : "Submit"}
              </Button>
            </div>
          </Form>
          <div style={{ width: "85%" }} className="text-left signin_footer">
            <div className="mb-3 singin_footer_first">
              Access code didn’t work?
            </div>
            <div className="mb-3 font-size-family" style={{ fontFamily: 700 }}>
              Please contact{" "}
              <span className="blue_link singin_footer_second">
                dispatch@gatik.ai
              </span>{" "}
              or call <span>+1(23) 45 6789</span>{" "}
            </div>
          </div>
          {/* <input
        type={true ? "password" : "text"  }

        /> */}
        </Col>
      </Row>
    </Container>
  );
}

export default Signin;
