import React from 'react'
import './message.scss'
import { Link } from 'react-router-dom'
import { VscSend } from 'react-icons/vsc'
import { BsSend } from 'react-icons/bs'

const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadCrumbs">
          <Link to={'/messages'}>MESSAGES</Link> {'>'} JAMES BOND {'>'}
        </span>

        <div className="messages">
          <div className="item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ9AMZxFPtoxUHj04B6uFm_rcl27osHxytYg&usqp=CAU"
              alt="profile image"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              beatae, aspernatur eius, eligendi illo veritatis quaerat deserunt
              nam aliquam deleniti non ea reiciendis ullam quos voluptatibus
              alias similique amet rerum!
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIEQ8A5yC7RR3LH2Ah9K-YZ7Yn9HshI92XvQ&usqp=CAU"
              alt="profile image"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              beatae, aspernatur eius, eligendi illo veritatis quaerat deserunt
              nam aliquam deleniti non ea reiciendis ullam quos voluptatibus
              alias similique amet rerum!
            </p>
          </div>
          <div className="item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ9AMZxFPtoxUHj04B6uFm_rcl27osHxytYg&usqp=CAU"
              alt="profile image"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              beatae, aspernatur eius, eligendi illo veritatis quaerat deserunt
              nam aliquam deleniti non ea reiciendis ullam quos voluptatibus
              alias similique amet rerum!
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIEQ8A5yC7RR3LH2Ah9K-YZ7Yn9HshI92XvQ&usqp=CAU"
              alt="profile image"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              beatae, aspernatur eius, eligendi illo veritatis quaerat deserunt
              nam aliquam deleniti non ea reiciendis ullam quos voluptatibus
              alias similique amet rerum!
            </p>
          </div>
          <div className="item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ9AMZxFPtoxUHj04B6uFm_rcl27osHxytYg&usqp=CAU"
              alt="profile image"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              beatae, aspernatur eius, eligendi illo veritatis quaerat deserunt
              nam aliquam deleniti non ea reiciendis ullam quos voluptatibus
              alias similique amet rerum!
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIEQ8A5yC7RR3LH2Ah9K-YZ7Yn9HshI92XvQ&usqp=CAU"
              alt="profile image"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              beatae, aspernatur eius, eligendi illo veritatis quaerat deserunt
              nam aliquam deleniti non ea reiciendis ullam quos voluptatibus
              alias similique amet rerum!
            </p>
          </div>
          <div className="item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ9AMZxFPtoxUHj04B6uFm_rcl27osHxytYg&usqp=CAU"
              alt="profile image"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              beatae, aspernatur eius, eligendi illo veritatis quaerat deserunt
              nam aliquam deleniti non ea reiciendis ullam quos voluptatibus
              alias similique amet rerum!
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIEQ8A5yC7RR3LH2Ah9K-YZ7Yn9HshI92XvQ&usqp=CAU"
              alt="profile image"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              beatae, aspernatur eius, eligendi illo veritatis quaerat deserunt
              nam aliquam deleniti non ea reiciendis ullam quos voluptatibus
              alias similique amet rerum!
            </p>
          </div>
        </div>

        <hr />

        <div className="write">
          <textarea
            name=""
            id="write"
            cols="5"
            rows="3"
            placeholder="write a message"
          ></textarea>
          <button>
            <VscSend />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Message