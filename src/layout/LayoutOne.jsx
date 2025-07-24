import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import ResNav from '../components/Resnav'

const LayoutOne = () => {
  return (
    <>
        <Navbar/>
        <ResNav/>
        <Outlet/>
    </>
  )
}

export default LayoutOne