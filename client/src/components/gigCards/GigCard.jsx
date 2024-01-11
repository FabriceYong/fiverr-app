import React from 'react'
import './gigCard.scss'
import { Link } from 'react-router-dom'
import { FaStar, FaHeart } from 'react-icons/fa'
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'
import { CirclesWithBar } from 'react-loader-spinner'

const GigCard = ({ item }) => {

    const { isPending, error, data } = useQuery({
      queryKey: ['gigUser'],
      queryFn: () =>
        newRequest
          .get(
            `/users/${item.userId}`
          )
          .then(res => res.data),
    })



  return (
    <Link to={`/gig/${item._id}`} className="link">
      <div className="gigCard">
        <img src={item.cover} alt="gig item" />
        <div className="info">
          {isPending ? (
            <span className="spinner">
              <CirclesWithBar
                height="30"
                width="30"
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
            <div className="user">
              <img
                src={data?.img || './img/user-avatar.jpg'}
                alt="profile picture"
              />
              <span>{data?.username}</span>
            </div>
          )}
          <p>{item.desc}</p>
          <div className="star">
            <FaStar />
            <span>
              {!isNaN(Math.round(item?.totalStars / item?.starNumber)) &&
                Math.round(item?.totalStars / item?.starNumber)}
            </span>
          </div>
        </div>
        <hr />
        <div className="details">
          <FaHeart />
          <div className="price">
            <span>STARTING AT</span>
            <h2>${item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default GigCard
