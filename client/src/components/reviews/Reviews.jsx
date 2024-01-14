import React from 'react'
import './reviews.scss'
import Review from '../review/Review'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'
import { CirclesWithBar } from 'react-loader-spinner'


const Reviews = ({ gigId }) => {
  const queryClient = useQueryClient()


  const { isPending, error, data } = useQuery({
    queryKey: ['reviews'],
    queryFn: () => newRequest.get(`/reviews/${gigId}`).then((res) => res.data),
  })

  const mutation = useMutation({
    mutationFn: (review) => {
      return newRequest.post('/reviews', review)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['reviews'])
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const desc = e.target[0].value
    const stars = e.target[1].value
    mutation.mutate({ gigId, desc, stars })
  }



  return (
    <div className="reviews">
      <h2>Reviews</h2>
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
        data.map((review) => <Review key={review._id} review={review} />)
      )}
      <div className="add">
        <h2>Add a review</h2>
        <form onSubmit={handleSubmit} className='add-form'>
          <input type="text" placeholder="write a review" />
          <div className="stars">
            <span>Rate this Gig: </span>
            <select name="" id="">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <span>Stars</span>
          </div>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Reviews
