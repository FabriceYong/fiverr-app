import React from 'react'
import './gig.scss'
import { FaStar } from 'react-icons/fa'
import { AiFillLike, AiFillDislike } from 'react-icons/ai'
import { FaRegClock, FaCheck } from 'react-icons/fa6'
import { RiRefreshLine } from 'react-icons/ri'
import Slider from 'infinite-react-carousel'
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'
import { useParams } from 'react-router-dom'
import { CirclesWithBar } from 'react-loader-spinner'

const Gig = () => {
  const { id } = useParams()

  const { isPending, error, data } = useQuery({
    queryKey: ['gig'],
    queryFn: () => newRequest.get(`gigs/single/${id}`).then((res) => res.data),
  })

  return (
    <div className="gig">
      {isPending ? (
        <span className="spinner">
          <CirclesWithBar
            height="100"
            width="100"
            color="#c42121cc"
            outerCircleColor="#c42121cc"
            innerCircleColor="#c42121cc"
            barColor="#c42121cc"
            ariaLabel="circles-with-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </span>
      ) : error ? (
        <span
          style={{
            backgroundColor: '#c42121cc',
            padding: '0 1px',
            textAlign: 'center',
          }}
        >
          Sorry!, error fetching user information
        </span>
      ) : (
        <div className="container">
          <div className="left">
            <span className="breadCrumbs">
              FIVER {'>'} GRAPHICS & DESIGN {'>'}
            </span>
            <h1>{data.title}</h1>

            <div className="user">
              <img src="https://img6.arthub.ai/649f195d-28d6.webp" alt="" />
              <span>James Bond</span>
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span>5</span>
              </div>
            </div>
            <Slider slidesToShow={1} arrowsSroll={1} className="slider">
              {data.images.map((img) => {
                return <img key={img} src={img} alt='images' />
              })}
            </Slider>
            <h2>About This Gig</h2>
            <p>{data.desc}</p>
            <div className="seller">
              <h2>About The Seller</h2>
              <div className="user">
                <img
                  src="https://img6.arthub.ai/649f195d-28d6.webp"
                  alt="user profile"
                />
                <div className="info">
                  <span>James Bond</span>
                  <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span>5</span>
                  </div>
                  <button>Contact me</button>
                </div>
              </div>
              <div className="box">
                <div className="items">
                  <div className="item">
                    <span className="title">From</span>
                    <span className="desc">USA</span>
                  </div>
                  <div className="item">
                    <span className="title">Member since</span>
                    <span className="desc">Aug 2022</span>
                  </div>
                  <div className="item">
                    <span className="title">Avg. response time</span>
                    <span className="desc">4 hours</span>
                  </div>
                  <div className="item">
                    <span className="title">Last delivery</span>
                    <span className="desc">1 day</span>
                  </div>
                  <div className="item">
                    <span className="title">Languages</span>
                    <span className="desc">English, French</span>
                  </div>
                </div>
                <hr />
                <p>
                  My name is Ciaran, I enjoy creating AI generated are in my
                  spare time. I have a lot of experience using the AI programme
                  and that means I know what to prompt the AI with to get a
                  greate and incredibly detailed result.{' '}
                </p>
              </div>
              <div className="reviews">
                <h2>Reviews</h2>
                <div className="item">
                  <div className="user">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ9AMZxFPtoxUHj04B6uFm_rcl27osHxytYg&usqp=CAU"
                      alt=""
                    />
                    <div className="info">
                      <span>Matilde Bond</span>
                      <div className="country">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
                          alt="UK flag"
                        />
                        <span>United Kingdom</span>
                      </div>
                    </div>
                  </div>
                  <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span>5</span>
                  </div>
                  <p>
                    I just want to say that art_with_ai was the first, and after
                    this, the only artist I'll be using on Fiverr. Communication
                    was amazing, each and every day he sent me images that I was
                    free to request changes to. They listened, understood, and
                    delivered above and beyond my expectations. I absolutely
                    recommend this gig, and know already that I'll be using it
                    again very very soon
                  </p>
                  <div className="helpful">
                    <span>Helpful?</span>
                    <AiFillLike />
                    <span>Yes</span>
                    <AiFillDislike />
                    <span>No</span>
                  </div>
                </div>
                <hr />

                <div className="item">
                  <div className="user">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ9AMZxFPtoxUHj04B6uFm_rcl27osHxytYg&usqp=CAU"
                      alt=""
                    />
                    <div className="info">
                      <span>Matilde Bond</span>
                      <div className="country">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
                          alt="UK flag"
                        />
                        <span>United Kingdom</span>
                      </div>
                    </div>
                  </div>
                  <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span>5</span>
                  </div>
                  <p>
                    I just want to say that art_with_ai was the first, and after
                    this, the only artist I'll be using on Fiverr. Communication
                    was amazing, each and every day he sent me images that I was
                    free to request changes to. They listened, understood, and
                    delivered above and beyond my expectations. I absolutely
                    recommend this gig, and know already that I'll be using it
                    again very very soon
                  </p>
                  <div className="helpful">
                    <span>Helpful?</span>
                    <AiFillLike />
                    <span>Yes</span>
                    <AiFillDislike />
                    <span>No</span>
                  </div>
                </div>
                <hr />

                <div className="item">
                  <div className="user">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ9AMZxFPtoxUHj04B6uFm_rcl27osHxytYg&usqp=CAU"
                      alt=""
                    />
                    <div className="info">
                      <span>Matilde Bond</span>
                      <div className="country">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
                          alt="UK flag"
                        />
                        <span>United Kingdom</span>
                      </div>
                    </div>
                  </div>
                  <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span>5</span>
                  </div>
                  <p>
                    I just want to say that art_with_ai was the first, and after
                    this, the only artist I'll be using on Fiverr. Communication
                    was amazing, each and every day he sent me images that I was
                    free to request changes to. They listened, understood, and
                    delivered above and beyond my expectations. I absolutely
                    recommend this gig, and know already that I'll be using it
                    again very very soon
                  </p>
                  <div className="helpful">
                    <span>Helpful?</span>
                    <AiFillLike />
                    <span>Yes</span>
                    <AiFillDislike />
                    <span>No</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="price">
              <h3>{data.shortTitle}</h3>
              <h2>$ {data.price}</h2>
            </div>
            <p>{data.desc}</p>
            <div className="details">
              <div className="item">
                <FaRegClock />
                <span>{data.deliveryTime} days Delivery</span>
              </div>
              <div className="item">
                <RiRefreshLine />
                <span>{data.revisionNumber} Revisions</span>
              </div>
            </div>
            <div className="features">
              {data.features.map((feature) => (
                <div className="item" key={feature}>
                  <FaCheck />
                  <span>{feature}</span>
                </div>
              ))}
              <button>Continue</button>
            </div>

            {/* <div className="button">
            <button>Contact Me</button>
          </div> */}
          </div>
        </div>
      )}
    </div>
  )
}

export default Gig
