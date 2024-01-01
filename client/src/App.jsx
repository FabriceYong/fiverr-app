import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Gigs from './pages/gigs/Gigs'
import Gig from './pages/gig/Gig'
import Orders from './pages/orders/Orders'
import MyGigs from './pages/myGigs/MyGigs'
import Add from './pages/add/Add'
import Message from './pages/message/Message'
import Messages from './pages/messages/Messages'

function App() {
  const Layout = () => {
    return (
      <>
      <Navbar />
      <Outlet />
      <Footer />
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/gigs',
          element: <Gigs />,
        },
        {
          path: '/gig/:id',
          element: <Gig />,
        },
        {
          path: '/orders',
          element: <Orders />,
        },
        {
          path: '/my-gigs',
          element: <MyGigs />,
        },
        {
          path: '/add',
          element: <Add />,
        },
        {
          path: '/messages',
          element: <Messages />,
        },
        {
          path: '/message:id',
          element: <Message />,
        },
      ],
    },
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
