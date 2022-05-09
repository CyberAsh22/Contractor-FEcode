import React from "react";
import {
  currentTripIcon,
  delivery,
  twoSideArrow,
  user,
} from "../constant/imagePath";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import pointer from "../assets/images/pointer.png"
import newUser from "../assets/images/newUser.png"

const TripDetail = (props) => {
  const { data } = props;
  console.log(data?.Truck_assigned?.LP);
  return (
    <section className="trip-detail-component">
      <div class="hero1 d-flex flex-row justify-content-between p-3">
        <div class="hero1_content d-flex align-items-center">
          <div class="hero1_content_inner_img   d-flex justify-content-center align-items-center text-center">
            <img src={delivery} alt="" />
          </div>
          <div class="hero1_content_inner_data   text-left  ml-4">
            <h4>Gatik AV Number</h4>
            <p>AJA 781 </p>
            {/* <p>{data?.Truck_assigned?.LP} </p> */}
          </div>
        </div>

        <div class="hero1_content d-flex justify-content-center align-items-center">
          <div class="hero1_content_inner_img d-flex justify-content-center align-items-center text-center">
            <img src={newUser} alt="" />
          </div>
          <div class="hero1_content_inner_data   text-left ml-4">
            <h4>Gatik AVO</h4>
            <p class="hci_p2">Adam Sydanus</p>
            {/* <p class="hci_p2">{data?.AVO_assigned}</p> */}
          </div>
        </div>
        <div class="hero1_content d-flex align-items-center ">
          <div class="hero1_content_inner_img  d-flex justify-content-center  align-items-center text-center">
            {/* <LocationOnOutlinedIcon
              style={{
                color: "#22003b",
              }}
            /> */}
            <img src={pointer} />
          </div>
          <div class="hero1_content_inner_data  d-flex  flex-column text-left ml-4 ">
            <h4>Trip Details (ID: 4761)</h4>
            {/* <h4>Trip Details (ID: {data?.Trip_ID})</h4> */}

            <div class="hero1_content_inner_data d-flex text-left align-items-center justify-content-between text-left ">
              <p class="hci_p3">Hub 67810</p>
              {/* <p class="hci_p3">Hub {data?.Route?.Hub?.ID}</p> */}
              <img src={twoSideArrow} class="mr-2 ml-2" top="" alt="" />
              <p class="hci_p3">Spoke 7810</p>
              {/* <p class="hci_p3">Spoke {data?.Route?.Spoke?.ID}</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripDetail;
