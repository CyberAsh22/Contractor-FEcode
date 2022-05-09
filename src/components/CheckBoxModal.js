import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Checkbox from "@mui/material/Checkbox";
import ConfirmModal from "./ConfirmModal";

const CheckBoxModal = ({ show, handleClose, handleShow }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleCloseConfirm = () => setShowConfirm(false);
  const handleShowConfirm = () => {
    
 
    handleClose()
    setShowConfirm(true);

     
  
  
  }




    var [state, setstate] = useState("")
  const [checked, setChecked] = React.useState({
    checkbox1: "",
    checkbox2: "",
    checkbox3: "",
  });

  const handleChange = (event) => {
    const { name } = event.target;
    setChecked({ ...checked, [event.target.name]: event.target.checked });
  };



  const { checkbox1, checkbox2, checkbox3 } = checked;
  checkbox1 && checkbox2 && checkbox3
    ?  state = true
    : state = false

    console.log(state)

  return (
    <div>
      <Modal show={show} onHide={handleClose} className="modal_main checkbox-modal">
            <div className="pl-5 main-div-modal">
        <Modal.Header className="checkBox_modal" closeButton>

          <Modal.Title className="checkbox_title_modal"> 
            Please tap on the checkboxes to confirm that the tasks have been
            completed
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="checkbox_desc_modal">
    <div className="d-flex">
          <Checkbox
            checked={checked.checkbox1}
            name="checkbox1"
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        <p>


All the totes have been loaded/unloaded

        </p>


</div>
<div className="d-flex">

          <Checkbox
            checked={checked.checkbox2}
            name="checkbox2"
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
            <p>


            Removed the totes/other obstancles from the vehicle path

        </p>

</div>
<div className="d-flex">

          <Checkbox
            checked={checked.checkbox3}
            name="checkbox3"
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
<p>


Vehicle liftgate and doors have been locked and secured
</p>
</div>

          </div>
        </Modal.Body>
        </div>

        <Modal.Footer className="checkbox_button_modal">

    <Button onClick={ handleShowConfirm }
      disabled={!state}
   
    >
        Confirm
    </Button>

    <Button  onClick={handleClose}>
        Cancel
    </Button>
        </Modal.Footer>
        <div>
            <p className="checkbox_modal_footer_content">
            For any issues related to the vehicle or the trip, please contact<span className="underline"> dispatch@gatik.ai</span>  or call <span className="underline">+1(23) 45 6789</span>   
            </p>
        </div>
      </Modal>




      <ConfirmModal handleCloseConfirm ={handleCloseConfirm}  handleShowConfirm={handleShowConfirm}  showConfirm={showConfirm}/>
    </div>
  );
};

export default CheckBoxModal;
