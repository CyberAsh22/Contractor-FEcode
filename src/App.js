import logo from "./logo.svg";
import "./App.css";
import "./assets/style.css";
import "./assets/Styles/stepperStyle.css";

import { Fragment } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import SideNavbar from "./components/SideNavbar";
import ProtectedRouter from "./components/ProtectedRouter";
import CurrentTip from "./Screens/CurrentTip";
import ManageTrip from "./Screens/ManageTrip";
import HelpSupport from "./Screens/HelpSupport";
import Feedback from "./Screens/Feedback";
import ActivityStepper from "./components/ActivityStepper";
import Feedback2 from "./Screens/Feedback2";
import Signin from "./Screens/Signin";
import Home from "./Screens/Home";
import Notification from "./Screens/Notification";
import CurrentTipBack from "./Screens/CurrentTipBack";
import CurrentTip1 from "./Screens/CurrentTip1";
import CurrentTip2 from "./Screens/CurrentTip2";
import CurrentTip3 from "./Screens/CurrentTip3";
import CurrentTip4 from "./Screens/CurrentTip4";

function App() {
  // const isLogin = false;
  const isLogin = useSelector((state) => state.authReducer.isLogin);
 
  return (
   <>
              
      <ToastContainer />
      <Router>
        <Fragment>
          <div className="row">
            {isLogin == false ? (
              <>
                <Route path="/" exact>
                  <Signin />
                </Route>
              </>
            ) : (
              <>
              
                <Route path="/" exact>
                  <SideNavbar />
                  <CurrentTip showStepper={"open"} />
                </Route>

                 <Route path="/CurrentTipBack" exact>
                  <SideNavbar />
                  <CurrentTipBack />
                </Route>

                <Route path="/CurrentTip1" exact>
                  <SideNavbar />
                  <CurrentTip1 showStepper={"open"}/>
                </Route>
               
              
                <Route path="/" exact>
                  <SideNavbar />
                  <CurrentTip2 showStepper={"open"}  />
                </Route>


                <Route path="/CurrentTip1" exact>
                  <SideNavbar />
                  <CurrentTip3 showStepper={"open"}/>
                </Route>


                <Route path="/home" exact>
                  <SideNavbar />
                  <Home />
                </Route>


                <Route path="/managetrip" exact>
                  <SideNavbar />
                  <ManageTrip />
                </Route>

                <Route path="/notification" exact>
                  <SideNavbar />
                  <Notification />
                </Route>


                <Route path="/feedback" exact>
                  <SideNavbar />
                  <Feedback />
                </Route>


                <Route path="/feedback2" exact>
                  <SideNavbar />
                  <Feedback2 />
                </Route>


                <Route path="/helpsupport" exact>
                  <SideNavbar />
                  <HelpSupport />
                </Route>
              </>
            )}
          </div>
        </Fragment>
      </Router>
    </>
  );
}

export default App;

// import logo from "./logo.svg";
// import "./App.css";
// import "./assets/style.css";

// import { Fragment } from "react";
// import { Route, BrowserRouter as Router } from "react-router-dom";
// import { useSelector } from "react-redux";

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.min.css";

// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import SideNavbar from "./components/SideNavbar";
// import CurrentTip from "./Screens/CurrentTip";

// function App() {
//   const isLogin = useSelector((state) => state.authReducer.isLogin);
//   return (
//     <>
//       <ToastContainer />
//       <Router>
//         <Fragment>
//           <div className="row">
//             <div id="wrapper" className="col-md-3">
//               <SideNavbar />
//             </div>
//             {/* <div id="content-wrapper" className="col-md-9"> */}
//             <div id="content-wrapper" className="col-md-9">
//               <Header />

//               <Route path="/" exact component={CurrentTip} />
//               <Footer />
//             </div>
//           </div>
//         </Fragment>
//       </Router>
//     </>
//   );
// }

// export default App;

// import logo from "./logo.svg";
// import "./App.css";
// import "./assets/style.css";

// import { Fragment } from "react";
// import { Route, BrowserRouter as Router } from "react-router-dom";
// import { useSelector } from "react-redux";

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.min.css";

// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import SideNavbar from "./components/SideNavbar";
// import CurrentTip from "./Screens/CurrentTip";

// function App() {
//   const isLogin = useSelector((state) => state.authReducer.isLogin);
//   return (
//     <>
//       <ToastContainer />
//       <Router>
//         <Fragment>
//           {/* {isLogin ? ( */}
//           <div id="wrapper" className="row" style={{ backgroundColor: "red" }}>
//             {/* <div id="wrapper" className="col-md-3">
//               <SideNavbar />
//             </div> */}
//             <div id="content-wrapper" className="col-md-9">
//               {/* <div id="content-wrapper" className="d-flex flex-column"> */}
//               <div id="content">
//                 <Header />

//                 <Route path="/CurrentTip" exact component={CurrentTip} />
//               </div>
//               <Footer />
//             </div>
//           </div>
//           {/* ) : (
//             <LoginScreen />
//           )} */}
//         </Fragment>
//       </Router>
//     </>
//   );
// }

// export default App;
