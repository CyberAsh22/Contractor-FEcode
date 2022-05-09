import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOutRequest } from "../store/Actions/authAction";
import { useHistory } from "react-router";
import { loblawsLogo, logo, sodexo } from "../constant/imagePath";
import logonew from "../assets/images/logoNew.png"
import loblogo from "../assets/images/loblogo.png"
import { Button } from "react-bootstrap";
import moment from "moment";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { MenuItem, Select } from "@mui/material";

const Header = (props) => {
  const { data } = props;
  const userType = useSelector((state) => state.authReducer.userType);
  const dispatch = useDispatch();
  const history = useHistory();

  // const [selectedClientLogin, setSelectedCLientLogin] = useState(`
  // ${data?.Client_login[0]?.Location.Type}  ${data?.Client_login[0]?.Location.ID}
  
  // `
  // );
  const [selectedClientLoginIndex, setSelectedCLientLoginIndex] = useState(0);

  const putSelectedClient = (value) => {
    return value;
  };
// console.log(data?.Client_login[selectedClientLoginIndex]?.Firm  ,  selectedClientLogin)
  return (
    <section className="col-md-12  nav_padding">
      <nav className="navbar navbar-expand-lg navbar-light  justify-content-between">
        {/* <a className="navbar-brand" href="#">
          <img src={logo} width="134" height="35" alt="" />
        </a> */}
        <a className="navbar-brand" href="#">
          <img src={logonew} alt="" />
        </a>
        <span className="headerCheckInText">Check-in System</span>

        <Button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target=".nav_right"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </Button>

        <div className="collapse navbar-collapse nav_right">
          <ul className="navbar-nav ml-auto d-flex align-items-center flex-row ">
            <li className="nav-item active nav_right_date ml-3">
              <span>{moment().format("dddd, DD MMM YYYY") }</span>
              <span>{moment().format("hh.mm A")}</span>
            </li>

            <li className="nav-item nav_right_select ml-3">
              <div className="client-select">
                <LocationOnOutlinedIcon />  
                <p>
                  
                  
                  {/* {selectedClientLogin} */}
                  
                  Hub  1033
                  </p>
              </div>
              {/* <Select
                placeholder="Select Language"
                labelId="demo-simple-select-label"
                className="client-select"
                renderValue={() => putSelectedClient(selectedClientLogin)}
                value={selectedClientLogin}
                onChange={(event) => {
                  setSelectedCLientLogin(
                    event.target.value?.item?.Location.Type +
                      event.target.value?.item?.Location.ID
                  );
                  setSelectedCLientLoginIndex(event.target.value?.i);
                }}
              >
                {data?.Client_login.length > 0 &&
                  data?.Client_login.map((item, i) => (
                    <MenuItem key={i} value={{ item, i }}>
                      {item?.Location.Type}
                      {item?.Location.ID}
                    </MenuItem>
                  ))}
              </Select> */}
            </li>

            <li
              className="nav-item nav_right_login ml-3"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <a className="navbar-brand" href="#">
                <p>
                {/* {data?.Client_login[selectedClientLoginIndex]?.Firm} */}
                Sodexho
                </p>
              </a>
              <span className="headerLoginTimeText">Logged in 09:12 AM</span>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Header;