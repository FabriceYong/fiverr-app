import React from 'react'
import './orders.scss'
import { Link, useNavigate } from 'react-router-dom'
import { MdEmail } from 'react-icons/md'
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'
import { CirclesWithBar } from 'react-loader-spinner'

const Orders = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))
  const navigate = useNavigate()

  const { isPending, error, data } = useQuery({
    queryKey: ['orders'],
    queryFn: () => newRequest.get(`/orders`).then((res) => res.data),
  })

  const handleContact = async (order) => {
    const sellerId = order.sellerId
    const buyerId = order.buyerId
    const id = sellerId + buyerId

    try {
      const res = await newRequest.get(`/conversations/single/${id}`)
      navigate(`/message/${res.data.id}`)
    } catch (err) {
      if (err.response.status === 404) {
        const res = await newRequest.get(`/conversations/`, {
          to: currentUser.isSeller ? buyerId : sellerId,
        })
        navigate(`/message/${res.data.id}`)
      }
    }
  }

  return (
    <div className="orders">
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
            color: '#c42121cc',
          }}
        >
          Sorry!, error fetching orders
        </span>
      ) : (
        <div className="container">
          <div className="title">
            <h1>Orders</h1>
            {/* <Link to={'/add'}>
            <button>Add New Gig</button>
          </Link> */}
          </div>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Contact</th>
              </tr>
            </thead>

            {data.map((order) => (
              <tbody key={order._id}>
                <tr>
                  <td>
                    <img src={order.img} alt="order img" />
                  </td>
                  <td>{order.title}</td>
                  <td>${order.price}</td>
                  <td>
                    <MdEmail onClick={() => handleContact(order)} />
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      )}
    </div>
  )
}

export default Orders
