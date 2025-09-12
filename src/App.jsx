import React from 'react'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import {Toaster}from 'react-hot-toast'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Movies from './pages/Movies.jsx'
import MovieDetails from './pages/MovieDetails.jsx'
import SeatLayout from './pages/SeatLayout.jsx'
import MyBookings from './pages/MyBookings.jsx'
import Favourite from './pages/Favourite.jsx'



const App = () => {

  const isAdminRoute = useLocation().pathname.toLowerCase().startsWith('/admin');
  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path = '/movies' element = {< Movies/>}/>
        <Route path = '/movies/:id' element = {< MovieDetails/>}/>
        <Route path = '/movies/:id/:date' element = {< SeatLayout/>}/>
        <Route path = '/my-bookings' element = {<MyBookings/>}/>
        <Route path = '/favourite' element = {<Favourite/>}/>
        
      </Routes>

      

      {/* <div className="bg-red-500 text-white text-3xl p-4">
        If this is red with big white text → Tailwind is working!
      </div> */}

      {!isAdminRoute && <Footer />}
    </>
  )
}

export default App