import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import ResNavbar from '../components/ResNavbar'
import Footer from '../components/Footer'

const LayoutOne = () => {
  return (
    <>
        <Navbar/>
        <ResNavbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default LayoutOne