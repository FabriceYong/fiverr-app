import React from 'react'
import './message.scss'
import { Link, useParams } from 'react-router-dom'
import { VscSend } from 'react-icons/vsc'
import { BsSend } from 'react-icons/bs'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'
import { CirclesWithBar } from 'react-loader-spinner'
import moment from 'moment'

const Message = () => {
  const { id } = useParams()
  const queryClient = useQueryClient()

  const currentUser = JSON.parse(localStorage.getItem('currentUser'))

  const { isPending, error, data } = useQuery({
    queryKey: ['messages'],
    queryFn: () => newRequest(`/messages/${id}`).then((res) => res.data),
  })

  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post(`/messages/`, message)
    },
    onSuccess: () => queryClient.invalidateQueries(['messages'])
  })

  const handleSubmit = (e) => {
    e.preventDefault(),
    mutation.mutate({
      conversationId: id,
      desc: e.target[0].value
    })
    e.target[0].value = ''
  }

  return (
    <div className="message">
      <div className="container">
        <span className="breadCrumbs">
          <Link to={'/messages'}>MESSAGES</Link> {'>'} JAMES BOND {'>'}
        </span>

        {isPending ? (
          <span
            className="spinner"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#c42121cc',
              justifyContent: 'center',
              margin: '20px',
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
          <div className="messages">
            {data.map((message) => (
              <div className={message.userId === currentUser._id ? 'owner item' : "item"} key={message._id}>
                <img
                  src={message.userId === currentUser._id ? currentUser.img : './img/user-avatar.jpg'}
                  alt="profile image"
                />
                <p>
                  {message.desc}
                  <span>{moment(message.updateAt).fromNow()}</span>
                </p>
              </div>
            ))}
          </div>
        )}

        <hr />

        <form className="write" onSubmit={handleSubmit}>
          <textarea
            name=""
            id="write"
            cols="5"
            rows="3"
            placeholder="write a message"
          ></textarea>
          <button type='submit'>
            <VscSend />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Message
