import React from 'react'
import Slider from 'infinite-react-carousel'
import './slide.scss'

const Slide = ({ slidesToShow, arrowsScroll, children}) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={5} arrowsScroll={5}>
           {children}
        </Slider>
      </div>
    </div>
  )
}

export default Slide