import React, { useState, useEffect } from "react";
import { underProducation } from "../constant/imagePath";
import Header from "../components/Header";
import { Button, Col, Container, Row } from "react-bootstrap";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Link,useHistory } from "react-router-dom";
import pastFace from "../assets/images/pastFace.png";
import pastArrow from "../assets/images/pastArrow.png";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThreeDots from "../components/ThreeDots";

const Feedback2 = (props) => {
  const [age, setAge] = React.useState("");
  const [choose, setChoose] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const history = useHistory();
  const pathname= history?.location?.pathname
  console.log(pathname);


  const array = new Array(5).fill()
  console.log(array)

  return (
    <>
      <div className="FeedBack">
        <Header />
        <section>
          <Container fluid>
            <Row className="row-0 btn-styling-row-0">
              <Link to="/feedback"  
               
              >
                <Button
                  onClick={() => setChoose(false)}
                  className={`${
                    pathname == "/feedback1" ? "active-btn btn-style" : "inactive-btn btn-style"
                  }`}
                // className={pathname == "/feedback" ? "active-btn btn-style" : "inactive-btn btn-style" }
                
                >Add FeedBack</Button>
              </Link>

              <Button
                onClick={() => setChoose(true)}
                className={`${
                  pathname == "/feedback2" ? "active-btn btn-style btn2-margin" : "inactive-btn btn-style btn2-margin"}`}
              //  className={pathname == "/feedback2" ? "active-btn btn-style" : "inactive-btn btn-style" }
              
              >View Past feedbacks</Button>
            </Row>
            <div className="scoll_add">

{array.map((item,i)=>{


return(
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
                    <img className="arrowDiv" src={pastArrow}/>
                    <h4>Spoke 6810</h4>
                    </div>
                    <div className="color_three_dots">
                    <ThreeDots/>

                      </div>
                  </div>
                  <div className="time-div">
                    <h4>05 Aug, 06:00 PM</h4>
                  </div>

                  <div className="des-div">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </div>
                </Col>
              </Row>
            </div>
)

})}

</div>
            
          </Container>
        </section>
      </div>
    </>
  );
};

export default Feedback2;
