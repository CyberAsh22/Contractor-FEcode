import React, { useState, useEffect, useRef } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Header from "./Header";
import Footer from "./Footer";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import CurrentTip from "../Screens/CurrentTip";
import ManageTrip from "../Screens/ManageTrip";
import Feedback from "../Screens/Feedback";
import HelpSupport from "../Screens/HelpSupport";
import Notification from "../Screens/Notification";
import { Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Tooltip from "@mui/material/Tooltip";
import {
  currentTripIcon,
  manageTripIcon,
  notificationIcon,
  feedbackIcon,
  helpSupportIcon,
  logoutIcon,
  exitAppIcon,
  logoWithText,
  logoIcon,
  refreshIcon,
  logo,
} from "../constant/imagePath";
import { useHistory, useLocation } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import ReactTooltip from "react-tooltip";
import newLogoIcon from "../assets/images/newLogoIcon.png";
import LogoutModal from "./LogoutModal";
import ExitModa from "./ExitModa";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SideNavbar = () => {
  const history = useHistory();
  const location = useLocation();
  const interval = useRef();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("/");
  const [lastRefresh, setLastRefresh] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  const [showLogout, setShowLogout] = useState(false);

  const handleCloseLogout = () => setShowLogout(false);
  const handleShowLogout = () => setShowLogout(true);
  const [showExit, setShowExit] = useState(false);

  const handleCloseExit = () => setShowExit(false);
  const handleShowExit = () => setShowExit(true);

  const locationURL = history.location.pathname;

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  if (locationURL == "/") {
    console.log("done");
  }

  useEffect(() => {
    const pathName = location?.pathname;
    setSelected(pathName);
    setLastRefresh(0);
  }, [location]);

  useEffect(() => {
    interval.current = setInterval(() => {
      setLastRefresh((pre) => pre + 1);
    }, 60000);
    return () => clearInterval(interval.current);
  }, []);

  // useEffect(() => {
  //   history.listen((location, action) => {
  //     console.log(location, "history");

  //     setSelected(location?.pathname);
  {
    console.log(open);
  }

  //   });
  // }, [history]);
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open} className=" drawerContainer">
        <DrawerHeader className="logo_section">
          <div
          //  className="logo_not_open"
          >
            {open && (
              <>
                {" "}
                <img
                  src={logo}
                  alt=""
                  className="img-fluid icon_changed1 "
                  // className="img-fluid icon_changed "
                />
                {/* <p className="logo_font">
          Gatik
          </p> */}
              </>
            )}
          </div>
          <IconButton onClick={handleDrawerToggle} className="navHeaderIconBtn">
            {open ? (
              <ChevronLeftIcon />
            ) : (
              <>
                <img
                  src={newLogoIcon}
                  alt=""
                  className="img-fluid navLogoIcon"
                />
              </>
            )}
          </IconButton>
        </DrawerHeader>
        {/* <Divider /> */}
        <List
          style={{
            marginTop: "25px",
          }}
        >
          {/* <Dropdown
            // onMouseLeave={() => setShowDropdown(false)}
            // onMouseOver={() => setShowDropdown(true)}
            // style={{ width: "166px" }}
          > */}

          <Link
            data-tip={!open ? "Current Trip" : ""}
            to="/"
            className="mouse-cursor sideBarNavLink main-style "
            id="dropdown-basic"
          >
            <ListItem
              button
              key={"CurrentTip"}
              className="main-style"
              id="dropdown-basic"
              style={
                selected == "/"
                  ? {
                      borderLeft: "5px solid #6236CC",
                      paddingLeft: "11px",
                    }
                  : {}
              }
            >
              <ListItemIcon
                style={{
                  minWidth: "auto",
                  marginRight: 15,
                  marginLeft: -5,
                }}
              >
                <img
                  src={currentTripIcon}
                  alt=""
                  className="img-fluid currentTripIcon"
                />
              </ListItemIcon>
              <ListItemText
                style={
                  !open
                    ? {
                        // marginLeft: 20,
                        // transition: "margin-left 0.5s ease-in-out 0s",
                        opacity: 0,
                        transition: "opacity 0.5s ease-in-out 0s",
                        marginLeft: "-5px",
                      }
                    : {
                        // paddingLeft: "5px",
                        marginLeft: "-5px",
                        transition: "marginLeft 0.5s ease-in-out 0s",
                      }
                }
                primary={"Current Trip"}
                onClick={() => {
                  console.log("CurrentTip");
                }}
                className={selected == "/" && "sideBarNavLinkBoldText"}
              />
            </ListItem>
          </Link>
          {/* <Dropdown.Toggle >
          </Dropdown.Toggle>

          <Dropdown.Menu  onMouseLeave={() => setShowDropdown(false)}
           onMouseOver={() => setShowDropdown(true)} show={showDropdown}>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

                <div className="showDiv">
                  Show Div
                </div> */}
          <ReactTooltip
            place="right"
            type="info"
            effect="solid"
            className="TOOL_TIP"
          />
          <Link
            to="/managetrip"
            className="mouse-cursor sideBarNavLink"
            data-tip={!open ? "Manage Trip" : ""}
          >
            <ListItem
              button
              key={"Manage Trip"}
              style={
                selected == "/managetrip"
                  ? {
                      borderLeft: "5px solid #6236CC",
                      paddingLeft: "11px",
                    }
                  : {}
              }
            >
              <ListItemIcon
                style={{
                  minWidth: "auto",
                  marginRight: 15,
                }}
              >
                <img src={manageTripIcon} alt="" className="img-fluid" />
              </ListItemIcon>
              <ListItemText
                style={
                  !open
                    ? {
                        // marginLeft: 20,
                        // transition: "margin-left 0.5s ease-in-out 0s",
                        opacity: 0,
                        transition: "opacity 0.5s ease-in-out 0s",
                      }
                    : {
                        // paddingLeft: "5px",
                      }
                }
                primary={"Manage Trip"}
                onClick={() => {
                  console.log("ManageTrip");
                }}
                className={
                  selected == "/managetrip" && "sideBarNavLinkBoldText"
                }
              />
            </ListItem>
          </Link>

          <Link
            to="/notification"
            className="sideBarNavLink mouse-cursor"
            data-tip={!open ? "Notification" : ""}
          >
            <ListItem
              button
              key={"Notification"}
              style={
                selected == "/notification"
                  ? {
                      borderLeft: "5px solid #6236CC",
                      paddingLeft: "11px",
                    }
                  : {}
              }
            >
              <ListItemIcon
                style={{
                  minWidth: "auto",
                  marginRight: 15,
                }}
              >
                <img src={notificationIcon} alt="" className="img-fluid" />
              </ListItemIcon>
              <ListItemText
                style={
                  !open
                    ? {
                        // marginLeft: 20,
                        // transition: "margin-left 0.5s ease-in-out 0s",
                        opacity: 0,
                        transition: "opacity 0.5s ease-in-out 0s",
                      }
                    : {
                        // paddingLeft: "5px",
                      }
                }
                primary={"Notifications"}
                onClick={() => {
                  console.log("Notification");
                }}
                className={
                  selected == "/notification" && "sideBarNavLinkBoldText"
                }
              />
            </ListItem>
          </Link>

          <Link
            to="/feedback"
            className="sideBarNavLink mouse-cursor"
            data-tip={!open ? "Feedback" : ""}
          >
            <ListItem
              button
              key={"Feedback"}
              style={
                selected == "/feedback"
                  ? {
                      borderLeft: "5px solid #6236CC",
                      paddingLeft: "11px",
                    }
                  : {}
              }
            >
              <ListItemIcon
                style={{
                  minWidth: "auto",
                  marginRight: 15,
                }}
              >
                <img src={feedbackIcon} alt="" className="img-fluid" />
              </ListItemIcon>
              <ListItemText
                style={
                  !open
                    ? {
                        // marginLeft: 20,
                        // transition: "margin-left 0.5s ease-in-out 0s",
                        opacity: 0,
                        transition: "opacity 0.5s ease-in-out 0s",
                      }
                    : {
                        // paddingLeft: "5px",
                      }
                }
                primary={"Feedback"}
                onClick={() => {
                  console.log("Feedback");
                }}
                className={selected == "/feedback" && "sideBarNavLinkBoldText"}
              />
            </ListItem>
          </Link>
          <Link
            to="/helpsupport"
            className="sideBarNavLink mouse-cursor"
            data-tip={!open ? "Help/Support" : ""}
          >
            <ListItem
              button
              key={"HelpSupport"}
              style={
                selected == "/helpsupport"
                  ? {
                      borderLeft: "5px solid #6236CC",
                      paddingLeft: "11px",
                    }
                  : {}
              }
              className={selected == "/helpsupport" && "sideBarNavLinkBoldText"}
            >
              <ListItemIcon
                style={{
                  minWidth: "auto",
                  marginRight: 15,
                }}
              >
                <img src={helpSupportIcon} alt="" className="img-fluid" />
              </ListItemIcon>
              <ListItemText
                style={
                  !open
                    ? {
                        // marginLeft: 20,
                        // transition: "margin-left 0.5s ease-in-out 0s",
                        opacity: 0,
                        transition: "opacity 0.5s ease-in-out 0s",
                      }
                    : {
                        // paddingLeft: "5px",
                      }
                }
                primary={"Help/Support"}
                onClick={() => {
                  console.log("HelpSupport");
                }}
              />
            </ListItem>
          </Link>
          <div
            onClick={() => {
              handleShowLogout();
            }}
            className="sideBarNavLink mouse-cursor"
            data-tip={!open ? "Logout" : ""}
          >
            <ListItem
              button
              key={"logout"}
              // style={
              //   selected == "logout" ? { borderLeft: "5px solid #6236CC",    paddingLeft: '11px' } : {}
              // }
            >
              <ListItemIcon
                style={{
                  minWidth: "auto",
                  marginRight: 15,
                }}
              >
                <img src={logoutIcon} alt="" className="img-fluid" />
              </ListItemIcon>
              <ListItemText
                style={
                  !open
                    ? {
                        // marginLeft: 20,
                        // transition: "margin-left 0.5s ease-in-out 0s",
                        opacity: 0,
                        transition: "opacity 0.5s ease-in-out 0s",
                      }
                    : {
                        // paddingLeft: "5px",
                      }
                }
                primary={"Log out"}
                onClick={() => {
                  console.log("logout");
                }}
              />
            </ListItem>
          </div>
          <div
            className="sideBarNavLink mouse-cursor"
            data-tip={!open ? "Exit app" : ""}
          >
            <ListItem
              onClick={() => {
                handleShowExit();
              }}
              button
              key={"Exit app"}
              // style={
              //   selected == "exitApp" ? { borderLeft: "5px solid #6236CC",    paddingLeft: '11px' } : {}
              // }
            >
              <ListItemIcon
                style={{
                  minWidth: "auto",
                  marginRight: 15,
                }}
              >
                <img src={exitAppIcon} alt="" className="img-fluid" />
              </ListItemIcon>
              <ListItemText
                style={
                  !open
                    ? {
                        // marginLeft: 20,
                        // transition: "margin-left 0.5s ease-in-out 0s",
                        opacity: 0,
                        transition: "opacity 0.5s ease-in-out 0s",
                      }
                    : {
                        // paddingLeft: "5px",
                      }
                }
                primary={"Exit app"}
                onClick={() => {
                  console.log("Exit App");
                }}
              />
            </ListItem>
          </div>
          <div
            className="sideBarNavLink mouse-cursor"
            style={{
              marginTop: "150px",
            }}
          >
            {open && (
              <p
                style={{
                  // fontFamily: "Cabin",
                  // fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "19px",
                  letterSpacing: "0.03em",
                  color: "#22003B",
                  opacity: 0.75,
                  padding: "0px 21px",
                  fontFamily: "Cabin",
                }}
              >
                Updated {lastRefresh} mins ago
              </p>
            )}
            <ListItem
              data-tip={!open ? "Refresh Page" : ""}
              button
              key={"Refresh Page"}
              onClick={() => {
                window.location.reload();
                console.log("Refresh Page");
              }}
            >
              <ListItemIcon
                style={{
                  minWidth: "auto",
                  marginRight: 15,
                }}
              >
                <img src={refreshIcon} alt="" className="img-fluid" />
              </ListItemIcon>
              <ListItemText
                style={
                  !open
                    ? {
                        // marginLeft: 20,
                        // transition: "margin-left 0.5s ease-in-out 0s",
                        opacity: 0,
                        transition: "opacity 0.5s ease-in-out 0s",
                      }
                    : {
                        // paddingLeft: "5px",
                      }
                }
                primary={"Refresh Page"}
              />
            </ListItem>
          </div>
        </List>
      </Drawer>
      {/* <Box
        component="main"
        sx={{ flexGrow: 1, backgroundColor: "#faf9ff", height: "100vh" }}
        // sx={{ flexGrow: 1, p: 3, backgroundColor: "#faf9ff", height: "100vh", }}
      >
        {/* <Header /> */}
      {/* <Route path="/" exact component={CurrentTip} /> */}
      {/* <Route path="/" exact>
          <CurrentTip showStepper={open} />
        </Route>
        <Route path="/managetrip" exact component={ManageTrip} />
        <Route path="/notification" exact component={Notification} />
        <Route path="/feedback" exact component={Feedback} />
        <Route path="/helpsupport" exact component={HelpSupport} /> */}
      {/* <Footer /> */}
      {/* </Box>  */}
      <LogoutModal
        handleShowLogout={handleShowLogout}
        handleCloseLogout={handleCloseLogout}
        showLogout={showLogout}
      />
      <ExitModa
        showExit={showExit}
        handleCloseExit={handleCloseExit}
        handleShowExit={handleShowExit}
      />
    </Box>
  );
};

export default SideNavbar;
