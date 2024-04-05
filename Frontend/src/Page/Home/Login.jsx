import React from 'react'
import { LoginButton } from '../../component/Logs'
import ParticleBg from '../../component/ParticleBg'
import Barriers from '../../component/Barriers'

export default function Login() {
  return (
    <div className='w-screen h-screen grid place-items-center bg-base-primary'>
        <LoginButton/>
        <ParticleBg/>
      <div>
      <Barriers/>
      </div>
    </div>
  )
}
