import React from 'react'
import './review.scss'
import { FaStar } from 'react-icons/fa'
import { AiFillLike, AiFillDislike } from 'react-icons/ai'
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'
import { CirclesWithBar } from 'react-loader-spinner'

const Review = ({ review }) => {
  const { isPending, error, data } = useQuery({
    queryKey: [review.userId],
    queryFn: () =>
      newRequest.get(`/users/${review.userId}`).then((res) => res.data),
  })

  return (
    <div>
      <div className="review">
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
            Sorry!, error fetching reviews
          </span>
        ) : (
          <div className="user">
            <img src={data.img} alt="profile picture" />
            <div className="info">
              <span>{data.username}</span>
              <div className="country">
                {data.country === 'United Kingdom' && (
                  <img src="./img/flag.webp" alt="flag" />
                )}
                <span>{data.country}</span>
              </div>
            </div>
          </div>
        )}
        <div className="stars">
          {Array(review.stars)
            .fill()
            .map((item, i) => (
              <FaStar key={i} />
            ))}
          <span>{review.stars}</span>
        </div>
        <p>{review.desc}</p>
        <div className="helpful">
          <span>Helpful?</span>
          <AiFillLike />
          <span>Yes</span>
          <AiFillDislike />
          <span>No</span>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Review
