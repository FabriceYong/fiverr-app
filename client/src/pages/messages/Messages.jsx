import React, { useState } from 'react'
import './messages.scss'
import { Link } from 'react-router-dom'
import { MdEmail } from 'react-icons/md'

const Messages = () => {
  const [active, setActive] = useState(true)
  const currentUser = {
    id: 1,
    username: 'James bond',
    isSeller: true,
    img: './img/james-bond.jpg',
  }

  const message =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ratione labore qui nostrum alias dignissimos saepe ipsam? Recusandae architecto fugiat debitis nihil et autem, nisi non perferendis, dolorum, quam vitae.'

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
          {/* <Link to={'/add'}>
            <button>Add New Gig</button>
          </Link> */}
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>action</th>
          </tr>
          <tr className={active ? 'active' : ''}>
            <td>John Doe</td>
            <td>
              <Link to={'/message/123'}>{message.substring(0, 100)}...</Link>
            </td>
            <td>1 day ago</td>
            <td>
              <button onClick={() => setActive(!active)}>
                {active ? 'Mark as Read' : 'Mark as Unread'}
              </button>
            </td>
          </tr>
          <tr className={active ? 'active' : ''}>
            <td>John Doe</td>
            <td>
              <Link to={'/message/123'}>{message.substring(0, 100)}...</Link>
            </td>
            <td>1 day ago</td>
            <td>
              <button onClick={() => setActive(!active)}>
                {active ? 'Mark as Read' : 'Mark as Unread'}
              </button>
            </td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>
              <Link to={'/message/123'}>{message.substring(0, 100)}...</Link>
            </td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>
              <Link to={'/message/123'}>{message.substring(0, 100)}...</Link>
            </td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>
              <Link to={'/message/123'}>{message.substring(0, 100)}...</Link>
            </td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>
              <Link to={'/message/123'}>{message.substring(0, 100)}...</Link>
            </td>
            <td>1 day ago</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Messages
