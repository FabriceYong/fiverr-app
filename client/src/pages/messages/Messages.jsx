import React, { useState } from 'react'
import './messages.scss'
import { Link, useParams } from 'react-router-dom'
import { MdEmail } from 'react-icons/md'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'
import { CirclesWithBar } from 'react-loader-spinner'
import moment from 'moment'

const Messages = () => {
  const queryClient = useQueryClient()
  const { id } = useParams()
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))

  const { isPending, error, data } = useQuery({
    queryKey: ['conversations'],
    queryFn: () => newRequest.get(`/conversations`).then((res) => res.data),
  })

  const mutation = useMutation({
    mutationFn: (id) => newRequest.put(`/conversations/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(['conversations'])
    },
  })

  const handleRead = (id) => {
    mutation.mutate(id)
  }

  return (
    <div className="messages">
      {isPending ? (
        <span
          className="spinner"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#c42121cc',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
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
          <div className="title">
            <h1>Messages</h1>
            {/* <Link to={'/add'}>
            <button>Add New Gig</button>
          </Link> */}
          </div>
          <table>
            <thead>
              <tr>
                <th>{currentUser.isSeller ? 'Seller' : 'Buyer'}</th>
                <th>Last Message</th>
                <th>Date</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((conversation) => (
                <tr
                  className={((currentUser.isSeller && !conversation.readBySeller) || (!currentUser.isSeller && !conversation.readByBuyer)) ? 'active' : ''}
                  key={conversation.id}
                >
                  <td>
                    {currentUser.isSeller
                      ? conversation.buyerId
                      : conversation.sellerId}
                  </td>
                  <td>
                    <Link to={`/message/${conversation.id}`}>
                      {conversation?.lastMessage?.substring(0, 100)}...
                    </Link>
                  </td>
                  <td>{moment(conversation.updateAt).fromNow()}</td>
                  <td>
                    {((currentUser.isSeller && !conversation.readBySeller) || (!currentUser.isSeller && !conversation.readByBuyer)) && (
                      <button onClick={() => handleRead(conversation.id)}>Mark as read</button>
                    )} 
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default Messages
