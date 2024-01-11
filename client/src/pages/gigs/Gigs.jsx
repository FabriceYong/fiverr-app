import React, { useState, useRef, useEffect } from 'react'
import './gigs.scss'
import { FaAngleDown, FaChevronDown } from 'react-icons/fa'
import GigCard from '../../components/gigCards/gigCard'
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'
import { CirclesWithBar } from 'react-loader-spinner'
import { useLocation } from 'react-router-dom'

const Gigs = () => {
  const [open, setOpen] = useState(false)
  const [sort, setSort] = useState('sales')
  const minRef = useRef()
  const maxRef = useRef()
  const location = useLocation()

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ['gigs'],
    queryFn: () =>
      newRequest
        .get(
          `/gigs${location.search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
        )
        .then((res) => {
          return res.data
        }),
  })

  const reSort = (type) => {
    setSort(type)
    setOpen(false)
  }

  useEffect(() => {
    refetch()
  }, [sort])

  const apply = () => {
    refetch()
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
            <span className="spinner">
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
            <p className="error">Sorry!, something went wrong</p>
          ) : (
            data.map((gig) => <GigCard key={gig._id} item={gig} />)
          )}
        </div>
      </div>
    </div>
  )
}

export default Gigs
