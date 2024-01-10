import React, { useState, useRef } from 'react'
import './gigs.scss'
import { FaAngleDown, FaChevronDown } from 'react-icons/fa'
import { gigs } from '../../data/data'
import GigCard from '../../components/gigCards/gigCard'
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'
import { Audio, CirclesWithBar } from 'react-loader-spinner'
import axios from 'axios'


const Gigs = () => {
  const [open, setOpen] = useState(false)
  const [sort, setSort] = useState('sales')
  const minRef = useRef()
  const maxRef = useRef()

  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
     newRequest('/gigs'),
  })

  const reSort = (type) => {
    setSort(type)
    setOpen(false)
  }

  const apply = () => {
    console.log(minRef.current.value)
    console.log(maxRef.current.value)
  }


  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">
          FIVERR {'>'} GRAPHICS & DESIGN {'>'}{' '}
        </span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Fiverr's Ai artists'
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder="min" ref={minRef} />
            <input type="text" placeholder="max" ref={maxRef} />
            <button onClick={apply}>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">SortBy:</span>
            <span onClick={() => setOpen(!open)} className="sortType">
              {sort === 'sales' ? 'Best Selling' : 'Newest'}
            </span>
            <FaAngleDown onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === 'sales' ? (
                  <span onClick={() => reSort('createdAt')}>Newest</span>
                ) : (
                  <span onClick={() => reSort('sales')}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {isPending ? (
            <span>
              <CirclesWithBar
              height="50"
              width="50"
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
            'Something went wrong'
          ) : (
            gigs.map((gig) => <GigCard key={gig.id} item={gig} />)
          )}
        </div>
      </div>
    </div>
  )
}

export default Gigs
