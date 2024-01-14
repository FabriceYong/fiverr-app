import React from 'react'
import './gig.scss'
import { FaStar } from 'react-icons/fa'
import { FaRegClock, FaCheck } from 'react-icons/fa6'
import { RiRefreshLine } from 'react-icons/ri'
import Slider from 'infinite-react-carousel'
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'
import { useParams } from 'react-router-dom'
import { CirclesWithBar } from 'react-loader-spinner'
import Reviews from '../../components/reviews/Reviews'

const Gig = () => {
  const { id } = useParams()

  const { isPending, error, data } = useQuery({
    queryKey: ['gig'],
    queryFn: () => newRequest.get(`gigs/single/${id}`).then((res) => res.data),
  })

  const userId = data?.userId

  const {
    isPending: isPendingUser,
    error: errorUser,
    data: userData,
  } = useQuery({
    queryKey: ['user'],
    queryFn: () =>
      newRequest.get(`/users/${userId}`).then((res) => res.data),
      enabled: !!userId
  })

  return (
    <div className="gig">
      {isPending ? (
        <span className="spinner">
          <CirclesWithBar
            height="25"
            width="25"
            color="#c42121cc"
            outerCircleColor="#c42121cc"
            innerCircleColor="#c42121cc"
            barColor="#c42121cc"
            ariaLabel="circles-with-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />{' '}
          loading...
        </span>
      ) : error ? (
        <span
          style={{
            padding: '0 1px',
            textAlign: 'center',
            color: '#c42121cc',
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

            {isPendingUser ? (
              <span className="spinner">
                <CirclesWithBar
                  height="25"
                  width="25"
                  color="#c42121cc"
                  outerCircleColor="#c42121cc"
                  innerCircleColor="#c42121cc"
                  barColor="#c42121cc"
                  ariaLabel="circles-with-bar-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />{' '}
                loading...
              </span>
            ) : errorUser ? (
              <span
                style={{
                  padding: '0 1px',
                  color: '#c42121cc',
                }}
              >
                Sorry!, error fetching user information
              </span>
            ) : (
              <div className="user">
                <img
                  src={userData.img || './img/user-avatar.jpg'}
                  alt="profile picture"
                />
                <span>{userData.username}</span>
                {!isNaN(data.totalStars / data.starNumber) && (
                  <div className="stars">
                    {Array(Math.round(data.totalStars / data.starNumber))
                      .fill()
                      .map((item, i) => (
                        <FaStar key={i} />
                      ))}
                    <span>{Math.round(data.totalStars / data.starNumber)}</span>
                  </div>
                )}
              </div>
            )}

            <Slider slidesToShow={1} arrowsScroll={1} className="slider">
              {data.images.map((img) => {
                return <img key={img} src={img} alt="images" />
              })}
            </Slider>
            <h2>About This Gig</h2>
            <p>{data.desc}</p>
            {isPendingUser ? (
              <span className="spinner">
                <CirclesWithBar
                  height="25"
                  width="25"
                  color="#c42121cc"
                  outerCircleColor="#c42121cc"
                  innerCircleColor="#c42121cc"
                  barColor="#c42121cc"
                  ariaLabel="circles-with-bar-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />{' '}
                loading...
              </span>
            ) : errorUser ? (
              <span
                style={{
                  padding: '0 1px',
                  color: '#c42121cc',
                }}
              >
                Sorry!, error fetching user information
              </span>
            ) : (
              <div className="seller">
                <h2>About The Seller</h2>
                <div className="user">
                  <img
                    src="https://img6.arthub.ai/649f195d-28d6.webp"
                    alt="user profile"
                  />
                  <div className="info">
                    <span>{userData.username}</span>
                    {!isNaN(data.totalStars / data.starNumber) && (
                      <div className="stars">
                        {Array(Math.round(data.totalStars / data.starNumber))
                          .fill()
                          .map((item, i) => {
                            return <FaStar key={i} />
                          })}
                        <span>
                          {Math.round(data.totalStars / data.starNumber)}
                        </span>
                      </div>
                    )}
                    <button>Contact me</button>
                  </div>
                </div>
                <div className="box">
                  <div className="items">
                    <div className="item">
                      <span className="title">From</span>
                      <span className="desc">{userData.country}</span>
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
                  <p>{userData.desc}</p>
                </div>
              </div>
            )}

            <Reviews gigId={id} />
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
