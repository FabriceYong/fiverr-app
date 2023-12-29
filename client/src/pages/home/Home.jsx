import React from 'react'
import './home.scss'
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/trustedBy'
import CatCards from '../../components/categoryCards/CatCards'
import Slide from '../../components/Slide/Slide'
import { cards } from '../../data/data'
import { CiCircleCheck } from 'react-icons/ci'

const Home = () => {
  return (
    <div>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCards key={card.id} item={card} />
        ))}
      </Slide>
      <div className="home">
        <div className="features">
          <div className="container">
            <div className="item">
              <h1>A whole world of freelance talent at your fingertips</h1>
              <div className="title">
                <CiCircleCheck />
                <span>The best for every budget</span>
              </div>
              <p>
                Find hight-quality services at every price point. No hourly
                rates, just project-based pricing
              </p>

              <div className="title">
                <CiCircleCheck />
                <span>The best for every budget</span>
              </div>
              <p>
                Find hight-quality services at every price point. No hourly
                rates, just project-based pricing
              </p>

              <div className="title">
                <CiCircleCheck />
                <span>The best for every budget</span>
              </div>
              <p>
                Find hight-quality services at every price point. No hourly
                rates, just project-based pricing
              </p>

              <div className="title">
                <CiCircleCheck />
                <span>The best for every budget</span>
              </div>
              <p>
                Find hight-quality services at every price point. No hourly
                rates, just project-based pricing
              </p>
            </div>
            <div className="item">
              <video src="./img/video.mp4" controls muted autoplay={true} loop={true}></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
