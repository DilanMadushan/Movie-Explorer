import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import SearchBar from './SearchBar'

const RootLayout = () => {
  return (
    <>
      
    <NavBar/>
    <Outlet/>
    
    </>
  )
}

export default RootLayout