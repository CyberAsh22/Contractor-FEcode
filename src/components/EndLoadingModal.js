import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const EndLoadingModal = ({showLoading,handleCloseLoading ,handleShow }) => {


    return (
        <div>
             <Modal 
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
             
             
             className="StartLoadingModal width-size" show={showLoading} onHide={handleCloseLoading}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className="text-center">Are you sure you want to recall the action - End Loading’’?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLoading}>
           Yes
          </Button>
          <Button variant="primary" onClick={handleCloseLoading}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default EndLoadingModal
