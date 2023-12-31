import React, { useState } from 'react'
import './testimonials.scss'

const Testimonials = ({ item }) => {
    const [showControls, setShowControls] = useState(false)
  return (
    <div className="testimonials">
      <div className="container">
        <div className="left">
          {showControls ? (
            <video
              onMouseOut={() => setShowControls(!showControls)}
              src={item.video}
              controls={showControls}
              autoPlay
              muted
              loop
            ></video>
          ) : (
            <video
              onMouseOver={() => setShowControls(!showControls)}
              src={item.video}
              controls={showControls}
              autoPlay
              muted
              loop
            ></video>
          )}
        </div>
        <div className="right">
          <div className="info">
            <h2>
              {item.name}, <span>{item.job}</span>
            </h2>
            <img src={item.company} alt="compnay logo" />
          </div>
          <i>"{item.testimony}"</i>
        </div>
      </div>
    </div>
  )
}

export default Testimonials