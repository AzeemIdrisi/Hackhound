import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../component/Navbar'

export default function MainLayout() {
  return (
    <div className='bg-gray-9 text-gray-5 overflow-x-hidden'>
      <div className='absolute w-screen z-10'>
      <Navbar/>
      </div>
      <div>
         <Outlet/>
      </div>
    </div>
  )
}
