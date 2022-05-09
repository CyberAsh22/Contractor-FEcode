import React ,{useState}from "react";
import { Button, Col, Container, Image, Modal, Row } from "react-bootstrap";
import "./HomeStyle.css";
import Point from "../assets/images/point.png";
import truck from "../assets/images/truck.png";
import truckBig from "../assets/images/truckBig.png";
import face from "../assets/images/face.png"
import HeaderCards from "./HeaderCards";
import Header from "../components/Header";
import ViewTripModal from "../components/ViewTripModal";
import TripDetail from "../components/TripDetail";
const Home = (props) => {

console.log(props.test)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const properties = [
        {
            primary: "Gatik AV Number",
            secondary : "AJA 781",
            img : truck,
        },
        {
            primary: "Gatik AVO",
            secondary : "Adam Sydanus",
            img : face,
        },
        {
            primary: "Gatik AV Number",
            secondary : "Hub 67810",
            img : Point,
        },
    ]
  return (
    <>
      <Container fluid className="bg-color pre-ar rival home-bg-color">
        <Header/>
        <div className="col-md-12">
                <TripDetail  />
              </div>

        <Row className="bg_white_section ">
            <Col className="home_section">
            <div className={props.test ? "icon_section pt-4" : "okok" }>
            <Image  src={truckBig}/>
            <h3>
            Gatik Vehicle is in Transit
            </h3>
            </div>


            <Button className="mt-4 home_section_button" onClick={handleShow} >
            View Trip Schedule  
            </Button>

            <h3 className="pt-4 pb-4 blue_link styling-timing">
            ETA 10 min (On-time)
            </h3>
            </Col>

        </Row>
        <Row>
          <Col >
            <div className="box_size" > 
            <h3 >
            Contact <span className="underline">dispatch@gatik.ai </span>  or call <span className="underline">+1(23) 45 6789</span>  for queries  
              
              </h3>


              </div>
         
          </Col>
          </Row>
      </Container>
          <Container>
            <Row>

              <Col>
             
              </Col>
            </Row>

          </Container>

          <ViewTripModal show= {show} handleClose={handleClose} handleShow ={handleShow} />
 
    </>
  );
};

export default Home;
