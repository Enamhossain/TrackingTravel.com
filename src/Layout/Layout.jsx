// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../Shared/Navbar'

import { Footer } from '../Shared/Footer'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div>
        <Navbar/>
         <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout