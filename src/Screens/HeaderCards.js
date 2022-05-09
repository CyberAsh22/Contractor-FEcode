import React from 'react'
import { Image } from 'react-bootstrap'

const HeaderCards = (props) => {
    return (
        <>
            <div className='home_header_icon_color'>
              <Image src={props.img} />
            </div>
            <div>
              <h5>{props.primary}</h5>
              <h6>{props.secondary}</h6>
            </div>
        </>
    )
}

export default HeaderCards
