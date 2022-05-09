import React from 'react'
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
const ThreeDots = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
  

    return (
        <div>
            <MoreVertIcon onClick={handleClick}/>


            <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        className="Read_popper"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
          <div className="popper_main_cus">


        <h5 className="popper_hover" onClick={handleClose}>
          Read
        </h5>
        <h5 style={{marginBottom:0}} className="popper_hover" onClick={handleClose}>
         Unread
        </h5>
              </div>


      </Popover>
        </div>



    )
}

export default ThreeDots
