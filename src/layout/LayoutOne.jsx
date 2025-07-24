import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import { Resnav } from '../components/Resnav'

const LayoutOne = () => {
  return (
    <>
        <Navbar/>
        <Resnav/>
        <Outlet/>
    </>
  )
}

export default LayoutOne