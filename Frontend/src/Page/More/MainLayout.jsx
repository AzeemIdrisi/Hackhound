import React from 'react'
import { Outlet } from 'react-router-dom'
// import Navbar from '../Components/Navbar'

export default function MainLayout() {
  return (
    <div className='bg-gray-9 text-gray-5'>
      {/* <Navbar/> */}
      <div>
         <Outlet/>
      </div>
    </div>
  )
}
