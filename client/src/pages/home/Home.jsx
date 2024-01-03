import React from 'react'
import './home.scss'
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/trustedBy'
import CatCards from '../../components/categoryCards/CatCards'
import Slide from '../../components/Slide/Slide'
import {
  cards,
  guides,
  projects,
  testimonials,
  mainCategories,
} from '../../data/data'
import { CiCircleCheck } from 'react-icons/ci'
import { HiBadgeCheck } from 'react-icons/hi'
import ProjectCard from '../../components/projectCards/ProjectCard'
import GuideCard from '../../components/guides/GuideCard'
import { Link } from 'react-router-dom'
import Testimonials from '../../components/testimonials/Testimonials'

const Home = () => {
  return (
    <div className="home-parent">
      <Featured />
      <TrustedBy />
      <div className="slides-parent">
        <h1>Popular Services</h1>
        <Slide slidesToShow={5} arrowsScroll={5}>
          {cards.map((card) => (
            <CatCards key={card.id} item={card} />
          ))}
        </Slide>
      </div>
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
              <video src="./img/video.mp4" controls muted autoPlay loop></video>
            </div>
          </div>
        </div>
        <div className="categories-parent">
          <h1>You need it, we've got it</h1>
          <div className="container">
            {mainCategories.map((category) => (
              <div className="item" key={category.id}>
                <div className="icon">
                  <img src={category.img} alt="main category" />
                </div>
                <h2>{category.title}</h2>
              </div>
            ))}
          </div>
        </div>
        <div className="features dark">
          <div className="container">
            <div className="item">
              <div className="title">
                <h1 className="logo">
                  fiverr<span>.</span>
                </h1>
                <span className="text">Business Solutions</span>
              </div>
              <h1>A business solution designed for teams</h1>
              <p>
                Upgrade to a curated experience packed with tools and benefits,
                dedicated bo businesses
              </p>
              <div className="info">
                <div>
                  <HiBadgeCheck />
                </div>
                <div className="text">
                  <h2 className="title">Fiver Pro</h2>
                  <p>
                    Access top freelancers and professional business tools for
                    any project
                  </p>
                </div>
              </div>
              <div className="info">
                <div>
                  <HiBadgeCheck />
                </div>

                <div className="text">
                  <h2 className="title">Fiverr Certified</h2>
                  <p>Build your own branded marketplace of certified exerts</p>
                </div>
              </div>
              <div className="info">
                <div>
                  <HiBadgeCheck />
                </div>
                <div className="text">
                  <h2 className="title">Fiverr Enterprise</h2>
                  <p>
                    Manage your freelance workforce and onboard additional
                    talent with an end-to-end SaaS solution
                  </p>
                </div>
              </div>
              <button>Eplore Fiverr Business</button>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
                alt="image"
              />
            </div>
          </div>
        </div>

        <Slide slidesToShow={1} arrowsScroll={1}>
          {testimonials.map((testimonial) => (
            <Testimonials key={testimonial.id} item={testimonial} />
          ))}
        </Slide>

        <div className="logo-maker">
          <div className="container">
            <div className="left">
              <h2>
                fiverr<span> logo maker</span>
              </h2>
              <h1>Make an incredible logo</h1>
              <i>in minutes</i>
              <p>Predisigned by top talent. Just add your touch</p>
              <button>Try Fiver Logo Maker</button>
            </div>
            <div className="right">
              <img
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1160,dpr_1.0/v1/attachments/generic_asset/asset/b49b1963f5f9008f5ff88bd449ec18f7-1608035772453/logo-maker-banner-wide-desktop-1352-2x.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="slides-parent">
          <h1>Inspiring work made on Fiverr</h1>
          <Slide slidesToShow={4} arrowsScroll={4}>
            {projects.map((project) => (
              <ProjectCard key={project.id} item={project} />
            ))}
          </Slide>
        </div>

        <div className="slides-parent">
          <h1>Guides to help you grow</h1>
          <Slide slidesToShow={3} arrowsScroll={3}>
            {guides.map((guide) => (
              <GuideCard key={guide.id} item={guide} />
            ))}
          </Slide>
        </div>

        <div className="banner">
          <div className="container">
            <div className="left">
              <h1>
                Suddenly it's all so <i>doable</i>
              </h1>
              <Link to={'/login'}>Join fiverr</Link>
            </div>
            <div className="right">
              <img
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1400,dpr_1.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608122/bg-signup-1400-x1.png"
                alt="banner image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
